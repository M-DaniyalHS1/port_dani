import Image from 'next/image';
import Destination from './Destination';
import { destinations } from '../config/navigation';

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">BACKEND / FULL-STACK / AGENTIC AI</p>
        <h1 id="hero-heading">DANIY<span className="name-accent">AL</span></h1>
        <h2 className="hero-tagline">
          <span className="hero-tagline-line"><span>Building systems.</span></span>
          <span className="hero-tagline-line"><span>Connecting intelligence.</span></span>
        </h2>
        <p className="supporting supporting-animated">
          <span className="supporting-phrase">Reliable backends.</span>{' '}
          <span className="supporting-phrase">Complete products.</span>{' '}
          <span className="supporting-phrase">Purposeful agents.</span>
        </p>
        <div className="hero-actions">
          <Destination destination={destinations.work} className="button button-primary">Explore my work <span aria-hidden="true">&#8599;</span></Destination>
          <Destination destination={destinations.contact} className="button button-secondary">Get in touch</Destination>
        </div>
        {!destinations.contact.href && <p className="destination-note">Contact destination coming soon.</p>}
      </div>
      <div className="hero-portrait">
        <Image src="/second_portrait.png" alt="Daniyal wearing glasses and a white shirt" width={1199} height={1312} sizes="(max-width: 1000px) 350px, 40vw" loading="eager" className="portrait-image" />
      </div>
    </section>
  );
}
