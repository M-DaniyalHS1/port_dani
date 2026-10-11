import { profile } from '../config/profile';

export default function AboutSection() {
  if (!profile.about?.length) return null;
  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-heading">
      <header className="section-header">
        <p className="eyebrow">ABOUT</p>
        <h2 id="about-heading">The person<br />behind the <span className="section-highlight">systems</span><span className="name-accent">.</span></h2>
      </header>
      <div className="about-copy">
        {profile.about.map((paragraph, paragraphIndex) => (
          <p key={paragraph}>
            {paragraph.split(/\s+/).map((word, wordIndex) => (
              <span key={wordIndex}>
                <span className="about-word" style={{ '--word-delay': `${paragraphIndex * 0.2 + Math.min(wordIndex * 0.025, 0.75)}s` }}>{word}</span>
                {' '}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
