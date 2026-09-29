import { technologies } from '../data/technologies'

export function Technologies() {
  return (
    <section id="technologies" className="editorial-section technologies-section" aria-labelledby="technologies-title">
      <div className="page-gutter">
        <div className="section-intro" data-reveal>
          <p className="index-label">04 / TECHNOLOGIES</p>
          <h2 id="technologies-title">THE RIGHT TOOLS FOR THE WORK.</h2>
          <p className="body-copy">Modern technologies selected based on the problem, not just the trend.</p>
        </div>
        <div className="technology-list">
          {technologies.map((technology, index) => (
            <div className="technology-row" key={technology.name} data-reveal>
              <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{technology.name}</h3>
              <p>{technology.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
