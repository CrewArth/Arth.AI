import { ProjectVisual } from '../components/ProjectVisual'
import { projects } from '../data/projects'

export function Projects() {
  const project = projects[0]

  return (
    <section id="projects" className="editorial-section projects-section" aria-labelledby="project-title">
      <div className="page-gutter">
        <p className="index-label" data-reveal>03 / FEATURED PROJECT</p>
        <div className="reveal-layout">
          <div className="reveal-left" data-reveal>
            <p className="eyebrow">SELECTED WORK</p>
            <h2 id="project-title">{project.title}</h2>
            <p className="reveal-statement">SOFTWARE FOR CLEARER HOTEL OPERATIONS.</p>
          </div>
          <ProjectVisual project={project} />
          <div className="reveal-right" data-reveal>
            <p className="body-copy">{project.description}</p>
            <p className="support-copy">{project.longDescription}</p>
            <ul className="tag-list" aria-label="Project technologies">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
