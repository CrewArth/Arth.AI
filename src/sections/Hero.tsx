import { HeroVisual } from '../components/HeroVisual'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-shell page-gutter">
        
        <div className="hero-stage">
          <div className="hero-statement" data-reveal>
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

      </div>
    </section>
  )
}
