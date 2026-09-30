import { useState, type FormEvent } from 'react'

type SubmissionState = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [email, setEmail] = useState('')
  const [projectIdea, setProjectIdea] = useState('')
  const [status, setStatus] = useState<SubmissionState>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setMessage('')

    try {
      const endpoint = window.location.hostname === 'localhost'
        ? `http://127.0.0.1:${window.location.port || '5173'}/api/contact`
        : '/api/contact'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, projectIdea }),
      })
      const result: { message?: string } = await response.json().catch(() => ({}))
      if (response.status === 404) throw new Error('Contact is temporarily unavailable. Please email us directly at arthvala@gmail.com.')
      if (!response.ok) throw new Error(result.message || 'We could not send your inquiry right now.')

      setStatus('success')
      setMessage(result.message || 'Your project idea was sent.')
      setEmail('')
      setProjectIdea('')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof TypeError
        ? 'Contact is temporarily unavailable. Please email us directly at arthvala@gmail.com.'
        : error instanceof Error ? error.message : 'We could not send your inquiry right now.')
    }
  }

  return (
    <div className="inquiry-panel" data-reveal>
      <div className="inquiry-intro">
        <p className="eyebrow">PROJECT INQUIRY</p>
        <h3>YOUR IDEA STARTS HERE.</h3>
        <p>Share a little about what you have in mind. We will reply to your email.</p>
      </div>
      <form className="inquiry-form" onSubmit={submit}>
        <div className="form-field">
          <label htmlFor="inquiry-email">YOUR EMAIL</label>
          <input id="inquiry-email" type="email" name="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === 'sending'} />
        </div>
        <div className="form-field">
          <label htmlFor="inquiry-idea">PROJECT IDEA</label>
          <textarea id="inquiry-idea" name="projectIdea" rows={6} minLength={10} maxLength={3000} placeholder="Tell us what you want to build..." required value={projectIdea} onChange={(event) => setProjectIdea(event.target.value)} disabled={status === 'sending'} />
        </div>
        <div className="form-actions">
          <button className="pill-button pill-button-filled" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'SENDING...' : 'SEND PROJECT IDEA'} <span aria-hidden="true">↗</span></button>
          {message && <p className={`form-message ${status === 'error' ? 'is-error' : ''}`} role="status">{message}</p>}
        </div>
      </form>
    </div>
  )
}
