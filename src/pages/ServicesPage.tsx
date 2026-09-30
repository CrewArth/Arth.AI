import { services } from '../data/services'

export function ServicesPage() {
  return (
    <main id="main" className="simple-page services-page">
      <section id="top" className="simple-page-section page-gutter" aria-labelledby="services-page-title">
        <p className="eyebrow">SERVICES WE PROVIDE</p>
        <h1 id="services-page-title">TECHNOLOGY BUILT AROUND YOUR WORK.</h1>
        <p className="body-copy simple-page-lede">Custom technology solutions built around your workflow, your users and your business.</p>
        <div className="service-list service-page-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="row-index">{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <span className="row-arrow" aria-hidden="true">&#8599;</span>
            </article>
          ))}
        </div>
        <a className="pill-button pill-button-outline" href="/">BACK TO HOME <span aria-hidden="true">&#8594;</span></a>
      </section>
    </main>
  )
}
