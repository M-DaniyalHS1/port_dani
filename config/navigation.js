import { projects } from './projects';
import { expertise, profile } from './profile';

// Work is available only when real projects are configured.
// Set other URLs when their sections or real contact destination exist.
export const destinations = {
  work: { label: 'Work', href: projects.length ? '#work' : null },
  expertise: { label: 'Expertise', href: expertise.length ? '#expertise' : null },
  about: { label: 'About', href: profile.about?.length ? '#about' : null },
  contact: { label: 'Let’s talk', href: profile.contact ? '#contact' : null },
};
