import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="editorial-section services-section" aria-labelledby="services-title">
      <div className="page-gutter">
        <div className="section-intro" data-reveal>
          <h2 id="services-title">WHAT WE DO.</h2>
          <p className="body-copy">Custom technology solutions built around your workflow, your users and your business.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number} data-reveal>
              <span className="row-index">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="row-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
