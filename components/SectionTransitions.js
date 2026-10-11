'use client';

import { useEffect } from 'react';

export default function SectionTransitions() {
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section')];
    const targets = [...sections, ...document.querySelectorAll('.project-card, .expertise-row, .about-copy p')];
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (target.matches('section')) target.dataset.inView = String(isIntersecting);
        if (isIntersecting) target.dataset.revealed = 'true';
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0 });
    targets.forEach((target) => observer.observe(target));

    function revealFocusedTarget(event) {
      const target = event.target.closest?.('.project-card, .expertise-row, section');
      if (target) target.dataset.revealed = 'true';
    }
    document.addEventListener('focusin', revealFocusedTarget);
    return () => {
      observer.disconnect();
      document.removeEventListener('focusin', revealFocusedTarget);
      targets.forEach((target) => { delete target.dataset.inView; delete target.dataset.revealed; });
    };
  }, []);

  return null;
}
