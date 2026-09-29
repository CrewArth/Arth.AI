import { ContactForm } from '../components/ContactForm'

export function Closing() {
  return (
    <>
      <section className="editorial-section approach-section" aria-labelledby="approach-title">
        <div className="page-gutter approach-layout">
          <div data-reveal>
            <p className="index-label">05 / OUR APPROACH</p>
            <h2 id="approach-title">YOUR BUSINESS IS UNIQUE.<br />YOUR SOFTWARE SHOULD BE TOO.</h2>
          </div>
          <div className="approach-object" aria-hidden="true"><span /><span /><span /></div>
          <p className="body-copy" data-reveal>We build customized software around your processes instead of forcing your business into a generic off-the-shelf system.</p>
        </div>
      </section>
      <section className="editorial-section invitation-section" aria-labelledby="invitation-title">
        <div className="page-gutter invitation-layout" data-reveal>
          <div>
            <p className="index-label">06 / START A CONVERSATION</p>
            <h2 id="invitation-title">HAVE AN IDEA THAT NEEDS TO BECOME SOFTWARE?</h2>
          </div>
          <div>
            <p className="body-copy">Let's turn your business requirement into a practical, scalable digital product.</p>
            <a className="pill-button pill-button-filled" href="#contact">DISCUSS YOUR PROJECT <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section id="contact" className="editorial-section contact-section" aria-labelledby="contact-title">
        <div className="page-gutter contact-layout" data-reveal>
          <div>
            <p className="index-label">07 / CONTACT</p>
            <h2 id="contact-title">LET'S BUILD SOMETHING.</h2>
          </div>
          <div>
            <p className="body-copy">Tell us what you want to build and we can discuss the right technical approach.</p>
            <a className="contact-email" href="mailto:arthvala@gmail.com">arthvala@gmail.com <span aria-hidden="true">↗</span></a>
            <a className="pill-button pill-button-outline" href="mailto:arthvala@gmail.com">EMAIL ARTH.AI <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="page-gutter inquiry-wrap"><ContactForm /></div>
      </section>
    </>
  )
}
