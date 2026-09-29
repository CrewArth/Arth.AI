import assert from 'node:assert/strict'
import { Readable } from 'node:stream'
import test from 'node:test'
import { createContactHandler, validateInquiry } from './contact.mjs'

function request(payload, { method = 'POST', contentType = 'application/json' } = {}) {
  const req = Readable.from([JSON.stringify(payload)])
  req.method = method
  req.headers = { 'content-type': contentType }
  req.socket = { remoteAddress: '127.0.0.1' }
  return req
}

function response() {
  return {
    headersSent: false,
    status: 0,
    headers: {},
    body: '',
    setHeader(name, value) { this.headers[name] = value },
    writeHead(status, headers = {}) { this.status = status; this.headers = { ...this.headers, ...headers }; this.headersSent = true; return this },
    end(body = '') { this.body = body; return this },
  }
}

test('validates both fields and trims their content', () => {
  assert.deepEqual(validateInquiry({ email: '  person@example.com  ', projectIdea: '  Build a booking application.  ' }), {
    email: 'person@example.com',
    projectIdea: 'Build a booking application.',
  })
  assert.equal(validateInquiry({ email: 'bad address', projectIdea: 'Build a booking application.' }), null)
  assert.equal(validateInquiry({ email: 'person@example.com', projectIdea: 'short' }), null)
})

test('sends a valid inquiry to Arth.AI with the visitor as reply-to', async () => {
  let mail
  const handler = createContactHandler({
    sender: 'studio@gmail.com',
    transporter: { async sendMail(value) { mail = value; return { accepted: ['arthvala@gmail.com'] } } },
    now: () => 100_000,
  })
  const res = response()
  await handler(request({ email: 'person@example.com', projectIdea: 'Build a booking application.' }), res)

  assert.equal(res.status, 200)
  assert.equal(mail.from, 'studio@gmail.com')
  assert.equal(mail.to, 'arthvala@gmail.com')
  assert.equal(mail.replyTo, 'person@example.com')
  assert.match(mail.text, /Build a booking application/)

  const second = response()
  await handler(request({ email: 'person@example.com', projectIdea: 'Build another booking application.' }), second)
  assert.equal(second.status, 429)
})

test('never reports success when delivery fails', async () => {
  const handler = createContactHandler({
    sender: 'studio@gmail.com',
    transporter: { async sendMail() { throw new Error('SMTP unavailable') } },
  })
  const res = response()
  await handler(request({ email: 'person@example.com', projectIdea: 'Build a booking application.' }), res)
  assert.equal(res.status, 502)
})

test('rejects invalid submissions before sending email', async () => {
  let sent = false
  const handler = createContactHandler({
    sender: 'studio@gmail.com',
    transporter: { async sendMail() { sent = true } },
  })
  const res = response()
  await handler(request({ email: 'invalid', projectIdea: 'Build a booking application.' }), res)
  assert.equal(res.status, 400)
  assert.equal(sent, false)
})
