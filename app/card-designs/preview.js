'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../config/projects';
import styles from './preview.module.css';

const concepts = [
  { id: 'frost', number: '01', name: 'Frosted Glass', description: 'Soft silver edges. Floating image. Quiet, polished depth.', label: 'THE MINIMAL ONE' },
  { id: 'aurora', number: '02', name: 'Aurora Glass', description: 'Prismatic light. Layered glass. A little more expressive.', label: 'THE EXPRESSIVE ONE' },
  { id: 'midnight', number: '03', name: 'Midnight Glass', description: 'Smoked glass. Amber lighting. Built for your portfolio.', label: 'THE SIGNATURE ONE' },
];

export default function CardDesigns() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const project = projects[projectIndex];

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Preview navigation">
        <Link href="/" className={styles.brand}>d<span>.</span></Link>
        <span>DESIGN EXPLORATION / PROJECT CARDS</span>
        <Link href="/#work" className={styles.back}>Back to portfolio ↗</Link>
      </nav>
      <header className={styles.header}>
        <p className={styles.eyebrow}><span /> THREE DIRECTIONS. YOUR CALL.</p>
        <h1>A little glass.<br />A lot more <em>character.</em></h1>
        <p className={styles.intro}>Same project, three different expressions. Explore the details and choose the direction that feels like you.</p>
      </header>
      <div className={styles.toolbar}>
        <div className={styles.switcher} role="group" aria-label="Preview project">
          {projects.map((item, index) => <button key={item.id} type="button" aria-pressed={index === projectIndex} onClick={() => setProjectIndex(index)}>{item.name === 'Physical AI & Humanoid Robotics' ? 'Physical AI' : item.name}</button>)}
        </div>
        <span className={styles.hint}>Hover to feel the glass ↗</span>
      </div>
      <div className={styles.grid}>
        {concepts.map((concept) => (
          <section key={concept.id} className={styles.concept} aria-labelledby={`concept-${concept.id}`}>
            <div className={styles.label}><span>{concept.number} / {concept.label}</span>{concept.id === 'midnight' && <span className={styles.recommended}>RECOMMENDED</span>}</div>
            <div className={`${styles.stage} ${styles[concept.id]}`}>
              <div className={styles.orb} aria-hidden="true" />
              <article className={styles.card}>
                <div className={styles.cardTop}><span className={styles.category}>{project.category}</span><span className={styles.cardNumber}>/{String(projectIndex + 1).padStart(2, '0')}</span></div>
                <div className={styles.media}>
                  <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 700px) 85vw, (max-width: 1100px) 42vw, 28vw" />
                  <span className={styles.mediaLabel}>{project.video ? 'VOICE ASSISTANT / DEMO' : 'PRODUCT PREVIEW'}</span>
                  <span className={styles.mediaIcon} aria-hidden="true">{project.video ? '▷' : '↗'}</span>
                </div>
                <div className={styles.content}>
                  <p className={styles.micro}>SELECTED PROJECT <span>•</span> {project.role}</p>
                  <h2>{project.name}</h2>
                  <p className={styles.summary}>{project.summary}</p>
                  <ul className={styles.tags} aria-label="Technologies">{project.technologies.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}{project.technologies.length > 3 && <li>+{project.technologies.length - 3}</li>}</ul>
                  <details className={styles.details} key={project.id}>
                    <summary>Explore project <span aria-hidden="true">↗</span></summary>
                    <div><p>{project.description}</p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>{project.video && <video controls playsInline preload="none" poster={project.image.src} aria-label={`${project.name} demo`}><source src={project.video.src} type={project.video.type} /></video>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit live project ↗</a>}</div>
                  </details>
                </div>
              </article>
            </div>
            <div className={styles.caption}><h3 id={`concept-${concept.id}`}>{concept.name}</h3><p>{concept.description}</p></div>
            <button className={styles.select} type="button" aria-pressed={selected === concept.id} onClick={() => setSelected(concept.id)}>{selected === concept.id ? '✓ Selected direction' : `Choose ${concept.name}`}<span aria-hidden="true">→</span></button>
          </section>
        ))}
      </div>
      <footer className={styles.footer}><span aria-live="polite">{selected ? `${concepts.find((concept) => concept.id === selected).name} selected. Tell me in chat to apply this direction.` : 'Pick a direction above, then tell me your choice in chat.'}</span><span>CONCEPT PREVIEW · 2026</span></footer>
    </main>
  );
}
