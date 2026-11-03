import Image from 'next/image';
import { projects } from '../config/projects';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';
import ProjectDetails from './ProjectDetails';
import TechIcon, { TechTag, iconStyle } from './TechIcon';

export default function WorkSection() {
  if (!projects.length) return null;

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <ProjectCarousel names={projects.map((project) => project.name)} header={<header className="work-header">
        <p className="eyebrow">04 / PROJECT MATRIX</p>
        <h2 id="work-heading">Systems into <span className="section-highlight">products</span><span className="name-accent">.</span></h2>
      </header>}>
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
                <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 760px) 86vw, 45vw" />
                {project.image.caption && <span className="project-image-caption">{project.image.caption}</span>}
              </div>
            )}
            <div className="project-body">
              <div className="project-head">
                <p className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</p>
                <p className="project-category">{project.category}</p>
              </div>
              <h3 id={`project-${project.id}`}>{project.name}</h3>
              <p className="project-description">{project.summary || project.description}</p>
              <ul className="project-technologies project-preview" aria-label={`${project.name} key technologies`}>
                {project.technologies.slice(0, 4).map((technology) => (
                  <li key={technology} className="tech-tag tech-chip" style={iconStyle(technology)} title={technology} aria-label={technology}>
                    <TechIcon name={technology} />
                    <span className="sr-only">{technology}</span>
                  </li>
                ))}
                {project.technologies.length > 4 && <li className="project-more" title={`${project.technologies.length - 4} more technologies`}>+{project.technologies.length - 4}<span className="sr-only"> more technologies</span></li>}
              </ul>
              <ProjectDetails id={project.id} name={project.name} links={(project.liveUrl || project.repositoryUrl) && (
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} aria-label={`View ${project.name} live`}>View live <span aria-hidden="true"><TechIcon name="arrow-up-right" /></span></a>}
                  {project.repositoryUrl && <a href={project.repositoryUrl} aria-label={`View source for ${project.name}`}>Source code <span aria-hidden="true"><TechIcon name="arrow-up-right" /></span></a>}
                </div>
              )}>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="project-role"><span>ROLE</span> {project.role}</p>
                <ul className="project-technologies" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <TechTag key={technology} name={technology} />)}
                </ul>
                {project.deployment && <p className="project-deployment">Deployed on {project.deployment}</p>}
                {project.caseStudy && (
                  <dl>
                    <dt>Design goal</dt><dd>{project.caseStudy.goal}</dd>
                    <dt>My contribution</dt><dd>{project.caseStudy.contribution}</dd>
                    <dt>Solution</dt><dd>{project.caseStudy.solution}</dd>
                  </dl>
                )}
              </ProjectDetails>
            </div>
          </ProjectCard>
        ))}
      </ProjectCarousel>
    </section>
  );
}
