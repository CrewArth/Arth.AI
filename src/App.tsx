import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Technologies } from './sections/Technologies'
import { Closing } from './sections/Closing'

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    items.forEach((item) => {
      item.classList.add('will-reveal')
      observer.observe(item)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Technologies />
        <Closing />
      </main>
      <Footer />
    </>
  )
}

export default App
