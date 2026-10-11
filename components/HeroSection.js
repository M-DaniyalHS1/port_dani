import HeroPortrait from './HeroPortrait';
import Destination from './Destination';
import { destinations } from '../config/navigation';

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">AI AGENT DEVELOPER</p>
        <h1 id="hero-heading">DANIY<span className="name-accent">AL</span></h1>
        <h2 className="hero-tagline">
          <svg className="headline-circuit" viewBox="0 0 520 120" fill="none" aria-hidden="true"><path d="M270 42 H420 Q445 42 445 62 V75 Q445 94 420 94 H370" /><path className="headline-pulse" d="M270 42 H420 Q445 42 445 62 V75 Q445 94 420 94 H370" /></svg>
          <span className="hero-tagline-line"><span>Building systems.</span></span>
          <span className="hero-tagline-line"><span>Connecting intelligence.</span></span>
        </h2>
        <p className="supporting supporting-animated">
          <span className="supporting-phrase">AI agents.</span>{' '}
          <span className="supporting-phrase">RAG chatbots.</span>{' '}
          <span className="supporting-phrase">Voice systems.</span>
        </p>
        <div className="hero-actions">
          <Destination destination={destinations.work} className="button button-primary">Explore my work <span aria-hidden="true">&#8599;</span></Destination>
          <Destination destination={destinations.contact} className="button button-secondary">Get in touch</Destination>
        </div>
        {!destinations.contact.href && <p className="destination-note">Contact destination coming soon.</p>}
      </div>
      <HeroPortrait />
    </section>
  );
}
