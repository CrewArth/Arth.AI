import { useEffect, useState } from 'react'

const links = [
  { label: 'INTRO', href: '#top' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`)
      })
    }, { rootMargin: '-20% 0px -60% 0px' })
    links.forEach((link) => {
      const section = document.querySelector(link.href)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={() => setOpen(false)} aria-label="Arth.AI, back to top">
          ARTH.AI
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <div id="primary-navigation" className={`nav-links${open ? ' is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} aria-current={active === link.href ? 'location' : undefined} onClick={() => { setOpen(false); setActive(link.href) }}>{link.label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
