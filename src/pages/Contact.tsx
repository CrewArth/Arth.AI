import { ContactForm } from '../components/ContactForm'

export function Contact() {
  return (
    <main id="main" className="simple-page contact-page">
      <section id="top" className="simple-page-section page-gutter" aria-labelledby="contact-page-title">
        <p className="eyebrow">CONTACT US</p>
        <h1 id="contact-page-title">LET'S BUILD SOMETHING.</h1>
        <div className="contact-page-intro">
          <p className="body-copy">Tell us what you want to build and we can discuss the right technical approach.</p>
          <a className="contact-email" href="mailto:arthvala@gmail.com">arthvala@gmail.com <span aria-hidden="true">&#8599;</span></a>
        </div>
      </section>
      <div className="page-gutter contact-page-form"><ContactForm /></div>
    </main>
  )
}
