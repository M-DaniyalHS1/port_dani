'use client';

import { useEffect } from 'react';

export default function SectionTransitions() {
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section[id]')];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;

    function sync() {
      observer?.disconnect();
      sections.forEach((section) => section.classList.remove('section-reveal', 'section-visible'));
      if (preference.matches || !('IntersectionObserver' in window)) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

      sections.forEach((section) => {
        // Keep current and previously viewed sections visible, including anchor targets.
        if (section.getBoundingClientRect().top < window.innerHeight) return;
        section.classList.add('section-reveal');
        observer.observe(section);
      });
    }

    function revealFocusedSection(event) {
      const section = event.target.closest?.('.section-reveal');
      if (section) {
        section.classList.add('section-visible');
        observer?.unobserve(section);
      }
    }

    sync();
    preference.addEventListener('change', sync);
    document.addEventListener('focusin', revealFocusedSection);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', sync);
      document.removeEventListener('focusin', revealFocusedSection);
      sections.forEach((section) => section.classList.remove('section-reveal', 'section-visible'));
    };
  }, []);

  return null;
}
