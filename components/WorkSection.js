import Image from 'next/image';
import { projects } from '../config/projects';
import ProjectCard from './ProjectCard';

export default function WorkSection() {
  if (!projects.length) return null;

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <header className="work-header">
        <p className="eyebrow">SELECTED WORK</p>
        <h2 id="work-heading">Systems into <span className="section-highlight">products</span><span className="name-accent">.</span></h2>
      </header>
      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} headingId={`project-${project.id}`}>
            {project.video ? (
              <div className="project-image">
                <video className="project-video" controls playsInline preload="none" poster={project.image?.src} aria-label={`${project.name} demo video`}>
                  <source src={project.video.src} type={project.video.type} />
                  Your browser does not support this video. <a href={project.video.src}>Watch the {project.name} demo</a>.
                </video>
              </div>
            ) : project.image && (
              <div className="project-image">
                <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 760px) 86vw, (max-width: 1100px) 43vw, (max-width: 1680px) 28vw, 475px" />
                {project.image.caption && <span className="project-image-caption">{project.image.caption}</span>}
              </div>
            )}
            <div className="project-body">
              <p className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</p>
              <p className="project-category">{project.category}</p>
              <h3 id={`project-${project.id}`}>{project.name}</h3>
              <p className="project-description">{project.summary || project.description}</p>
              <details className="project-details">
                <summary>
                  <span className="read-more-label">Read more</span>
                  <span className="read-less-label">Read less</span>
                  <span className="sr-only"> about {project.name}</span>
                  <span className="project-details-symbol" aria-hidden="true">+</span>
                </summary>
                <div className="project-detail-content">
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <p className="project-role"><span>ROLE</span> {project.role}</p>
                  <ul className="project-technologies" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {project.deployment && <p className="project-deployment">Deployed on {project.deployment}</p>}
                  {project.caseStudy && (
                    <dl>
                      <dt>Design goal</dt><dd>{project.caseStudy.goal}</dd>
                      <dt>My contribution</dt><dd>{project.caseStudy.contribution}</dd>
                      <dt>Solution</dt><dd>{project.caseStudy.solution}</dd>
                    </dl>
                  )}
                </div>
              </details>
              {(project.liveUrl || project.repositoryUrl) && (
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} aria-label={`View ${project.name} live`}>View live <span aria-hidden="true">↗</span></a>}
                  {project.repositoryUrl && <a href={project.repositoryUrl} aria-label={`View source for ${project.name}`}>Source code <span aria-hidden="true">↗</span></a>}
                </div>
              )}
            </div>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
