import { profile } from '../config/profile';

export default function AboutSection() {
  if (!profile.about?.length) return null;
  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-heading">
      <header className="section-header">
        <p className="eyebrow">ABOUT</p>
        <h2 id="about-heading">The person<br />behind the systems<span className="name-accent">.</span></h2>
      </header>
      <div className="about-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>
  );
}
