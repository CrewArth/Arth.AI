import nodemailer from 'nodemailer'
import { createContactHandler } from '../server/contact.mjs'

const sender = process.env.EMAIL_USER?.trim()
const password = process.env.EMAIL_PASS?.replace(/\s/g, '')

const handleContact = sender && password
  ? createContactHandler({
      sender,
      transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: { user: sender, pass: password },
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 15_000,
      }),
    })
  : null

export default async function contact(req, res) {
  if (!handleContact) {
    res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' })
    res.end(JSON.stringify({ message: 'Contact is temporarily unavailable. Please email us directly at arthvala@gmail.com.' }))
    return
  }

  await handleContact(req, res)
}
