import Image from 'next/image';
import { projects } from '../config/projects';

export default function WorkSection() {
  if (!projects.length) return null;

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <header className="work-header">
        <p className="eyebrow">SELECTED WORK</p>
        <h2 id="work-heading">Systems into products<span className="name-accent">.</span></h2>
      </header>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id} aria-labelledby={`project-${project.id}`}>
            {project.image && (
              <div className="project-image">
                <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 760px) 86vw, (max-width: 1680px) 43vw, 720px" />
              </div>
            )}
            <div className="project-body">
              <p className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</p>
              <p className="project-category">{project.category}</p>
              <h3 id={`project-${project.id}`}>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <p className="project-role"><span>ROLE</span> {project.role}</p>
              <ul className="project-technologies" aria-label="Technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {project.deployment && <p className="project-deployment">Deployed on {project.deployment}</p>}
              {(project.liveUrl || project.repositoryUrl) && (
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} aria-label={`View ${project.name} live`}>View live <span aria-hidden="true">↗</span></a>}
                  {project.repositoryUrl && <a href={project.repositoryUrl} aria-label={`View source for ${project.name}`}>Source code <span aria-hidden="true">↗</span></a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
