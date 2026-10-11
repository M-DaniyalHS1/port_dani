import { expertise } from '../config/profile';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="portfolio-section expertise-section" aria-labelledby="expertise-heading">
      <header className="section-header">
        <p className="eyebrow">EXPERTISE</p>
        <h2 id="expertise-heading"><span className="expertise-heading-line">From the interface</span><span className="expertise-heading-line">to the <span className="expertise-shine">intelligence</span><span className="name-accent">.</span></span></h2>
      </header>
      <div className="expertise-list">
        {expertise.map((item) => (
          <article className="expertise-row" key={item.id}>
            <span className="section-number" aria-hidden="true">{item.symbol} /</span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
            <div>
              <ul className="project-technologies" aria-label={`${item.title} technologies`}>
                {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <p className="expertise-evidence">Applied in {item.evidence}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
