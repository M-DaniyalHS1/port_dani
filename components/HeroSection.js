import Image from 'next/image';
import SystemVisual from './SystemVisual';
import Destination from './Destination';
import { destinations } from '../config/navigation';

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <SystemVisual />
      <div className="hero-copy">
        <p className="eyebrow">BACKEND / FULL-STACK / AGENTIC AI</p>
        <h1 id="hero-heading">DANIY<span className="name-accent">AL</span></h1>
        <h2>Building systems.<br />Connecting intelligence.</h2>
        <p className="supporting supporting-animated">
          <span className="supporting-phrase">Reliable backends.</span>{' '}
          <span className="supporting-phrase">Complete products.</span>{' '}
          <span className="supporting-phrase">Purposeful agents.</span>
        </p>
        <div className="hero-actions">
          <Destination destination={destinations.work} className="button button-primary">Explore my work <span aria-hidden="true">&#8599;</span></Destination>
          <Destination destination={destinations.contact} className="button button-secondary">Get in touch</Destination>
        </div>
        <p className="destination-note">Work &amp; contact destinations coming soon.</p>
      </div>
      <div className="hero-portrait">
        <Image src="/daniyal-portrait.png" alt="Daniyal wearing glasses and a white shirt" width={1199} height={1312} sizes="(max-width: 760px) 75vw, 39vw" loading="eager" className="portrait-image" />
      </div>
      <footer className="hero-footer"><span className="scroll-cue">SCROLL TO EXPLORE <span aria-hidden="true">&#8595;</span></span></footer>
    </section>
  );
}
