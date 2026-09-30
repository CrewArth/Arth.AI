const recipient = 'arthvala@gmail.com'
const maximumBodyBytes = 8_192
const minimumIdeaLength = 10
const maximumIdeaLength = 3_000

function respond(res, status, message) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  res.end(JSON.stringify({ message }))
}

export function validateInquiry(value) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return null
  const email = typeof value.email === 'string' ? value.email.trim() : ''
  const projectIdea = typeof value.projectIdea === 'string' ? value.projectIdea.trim() : ''

  if (email.length > 254 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) return null
  if (projectIdea.length < minimumIdeaLength || projectIdea.length > maximumIdeaLength) return null

  return { email, projectIdea }
}

export function createContactHandler({ transporter, sender, now = Date.now }) {
  const lastSent = new Map()

  return async function handleContact(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      respond(res, 405, 'Method not allowed.')
      return
    }
    const contentType = req.headers['content-type']
    if (typeof contentType !== 'string' || contentType.split(';')[0].trim() !== 'application/json') {
      respond(res, 415, 'Send a JSON request.')
      return
    }

    let body = ''
    let bytes = 0
    try {
      if (req.body !== undefined) {
        body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
        bytes = Buffer.byteLength(body)
      } else {
        for await (const chunk of req) {
          bytes += chunk.length
          if (bytes <= maximumBodyBytes) body += chunk.toString('utf8')
        }
      }
    } catch {
      if (!res.headersSent) respond(res, 400, 'We could not read your inquiry.')
      return
    }
    if (bytes > maximumBodyBytes) {
      respond(res, 413, 'Your message is too long.')
      return
    }

    let inquiry
    try {
      inquiry = validateInquiry(JSON.parse(body))
    } catch {
      inquiry = null
    }
    if (!inquiry) {
      respond(res, 400, 'Enter a valid email and a project idea of 10 to 3000 characters.')
      return
    }

    const address = inquiry.email.toLowerCase()
    const currentTime = now()
    if (lastSent.has(address) && currentTime - lastSent.get(address) < 30_000) {
      respond(res, 429, 'Please wait a moment before sending another inquiry.')
      return
    }

    try {
      const info = await transporter.sendMail({
        from: sender,
        to: recipient,
        replyTo: inquiry.email,
        subject: 'New Arth.AI project inquiry',
        text: `Sender email: ${inquiry.email}\n\nProject idea:\n${inquiry.projectIdea}`,
      })
      if (!info.accepted?.some((address) => address.toLowerCase() === recipient)) throw new Error('Recipient was not accepted')
      lastSent.set(address, currentTime)
      respond(res, 200, 'Your project idea was sent. We will reply by email.')
    } catch {
      respond(res, 502, 'We could not send your inquiry right now. Please email us directly.')
    }
  }
}
