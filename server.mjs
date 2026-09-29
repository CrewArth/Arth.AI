import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import nodemailer from 'nodemailer'
import { createContactHandler } from './server/contact.mjs'

if (existsSync('.env')) process.loadEnvFile('.env')

const sender = process.env.EMAIL_USER?.trim()
const password = process.env.EMAIL_PASS?.replace(/\s/g, '')
if (!sender || !password) throw new Error('EMAIL_USER and EMAIL_PASS are required to run the contact server.')

const isDevelopment = process.argv.includes('--dev')
const port = Number(process.env.PORT || 5173)
const host = process.env.HOST || '::'
const distDirectory = resolve('dist')
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: sender, pass: password },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 15_000,
})
const handleContact = createContactHandler({ transporter, sender })

function serveBuiltFile(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }

  let pathname
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
  } catch {
    res.writeHead(400).end()
    return
  }

  const file = resolve(distDirectory, `.${pathname === '/' ? '/index.html' : pathname}`)
  if (!file.startsWith(`${distDirectory}${sep}`) || !existsSync(file) || !statSync(file).isFile()) {
    res.writeHead(404).end()
    return
  }

  res.writeHead(200, {
    'Content-Type': types[extname(file)] || 'application/octet-stream',
    'Cache-Control': pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache',
  })
  if (req.method === 'HEAD') res.end()
  else createReadStream(file).pipe(res)
}

let vite
const server = createServer((req, res) => {
  let pathname
  try {
    pathname = new URL(req.url || '/', 'http://localhost').pathname
  } catch {
    res.writeHead(400).end()
    return
  }
  if (pathname === '/api/contact') {
    if (req.headers.origin === `http://localhost:${port}`) {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
      res.setHeader('Vary', 'Origin')
    }
    if (req.method === 'OPTIONS') {
      res.writeHead(204).end()
      return
    }
    void handleContact(req, res).catch(() => {
      if (!res.headersSent) res.writeHead(500).end()
    })
    return
  }
  if (isDevelopment) vite.middlewares(req, res, () => res.writeHead(404).end())
  else serveBuiltFile(req, res)
})

server.requestTimeout = 15_000
if (isDevelopment) {
  const { createServer: createViteServer } = await import('vite')
  vite = await createViteServer({
    appType: 'spa',
    server: { middlewareMode: true, hmr: { server } },
  })
}

server.listen({ port, host, ipv6Only: false }, () => {
  process.stdout.write(`Arth.AI running at http://127.0.0.1:${port}\n`)
})
