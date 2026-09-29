import { HeroVisual } from '../components/HeroVisual'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-shell page-gutter">
        <div className="hero-lockup" data-reveal>
          <p className="eyebrow">CUSTOM SOFTWARE · AI · WEB</p>
          <p className="hero-wordmark" aria-hidden="true">ARTH.AI</p>
        </div>
        <div className="hero-stage">
          <div className="hero-statement" data-reveal>
            <p className="index-label">01 / INTRODUCTION</p>
            <h1 id="hero-title">WE BUILD INTELLIGENT DIGITAL PRODUCTS.</h1>
            <p className="body-copy">Custom web applications, Android apps, CRM platforms and AI-powered solutions designed around real business requirements.</p>
            <div className="hero-actions">
              <a className="pill-button pill-button-filled" href="#contact">START A PROJECT <span aria-hidden="true">↗</span></a>
              <a className="pill-button pill-button-outline" href="#projects">VIEW OUR WORK <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <HeroVisual />
          <p className="hero-edge-label" aria-hidden="true">COMPLETE AI / WEB SOLUTION</p>
        </div>
        <div className="hero-baseline">
          <span>BUILT AROUND REAL BUSINESS REQUIREMENTS</span>
          <a href="#services">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  )
}
