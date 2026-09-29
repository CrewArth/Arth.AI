import type { Project } from '../data/projects'

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual">
      <div className="browser-bar" aria-hidden="true"><span /><span /><span /><div>neuvera / hotel operations</div></div>
      <div className="project-fallback" role="img" aria-label={`${project.title} project graphic showing booking, payment, and invoice capabilities`}>
        <div className="fallback-heading"><span>NEUVERA 1.0</span><span className="fallback-line" /></div>
        <div className="fallback-center"><span className="fallback-kicker">HOTEL OPERATIONS</span><strong>One platform.<br />Clearer control.</strong></div>
        <div className="fallback-features"><span>Bookings</span><span>Payments</span><span>Invoices</span></div>
      </div>
    </div>
  )
}
