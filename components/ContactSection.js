import { profile } from '../config/profile';

export default function ContactSection() {
  if (!profile.contact) return null;
  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
      <p className="eyebrow">LET’S TALK</p>
      <h2 id="contact-heading">Have something<br />in mind<span className="name-accent">?</span></h2>
      {profile.contact.href ? (
        <a className="button button-primary contact-action" href={profile.contact.href}>{profile.contact.label} <span aria-hidden="true">&#8599;</span></a>
      ) : (
        <>
          <button className="button button-primary contact-action" type="button" disabled aria-describedby="contact-status">{profile.contact.label}</button>
          <p id="contact-status" className="contact-status">Placeholder contact details · Email will be added soon.</p>
        </>
      )}
      {profile.socials.length > 0 && <nav className="social-links" aria-label="Social profiles">{profile.socials.map((social) => <a key={social.href} href={social.href}>{social.label} <span aria-hidden="true">↗</span></a>)}</nav>}
    </section>
  );
}
