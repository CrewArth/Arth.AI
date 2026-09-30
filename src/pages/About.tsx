export function About() {
  return (
    <main id="main" className="simple-page about-page">
      <section id="top" className="simple-page-section page-gutter" aria-labelledby="about-title">
        <p className="eyebrow">ABOUT US</p>
        <h1 id="about-title">SOFTWARE THAT FITS THE WAY YOU WORK.</h1>
        <div className="simple-page-copy">
          <p className="body-copy">ARTH.AI builds practical digital products for businesses with real workflows, real customers and real room to grow.</p>
          <p>We combine thoughtful design, reliable engineering and a clear understanding of your process to create software that feels made for your business.</p>
        </div>
        <a className="pill-button pill-button-outline" href="/">BACK TO HOME <span aria-hidden="true">&#8594;</span></a>
      </section>
    </main>
  )
}
