import neuveraLogo from '../assets/neuvera logo.png'
import type { Project } from '../data/projects'

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual">
      <div className="browser-bar" aria-hidden="true"><span /><span /><span /><div>neuvera / hotel operations</div></div>
      <div className="project-fallback project-fallback--logo-only" role="img" aria-label={`${project.title} project graphic showing the Neuvera logo`}>
        <img className="project-logo" src={neuveraLogo} alt={`${project.title} logo`} />
      </div>
    </div>
  )
}
