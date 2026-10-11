'use client';

export default function ProjectCard({ children, headingId }) {
  function moveSpotlight(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'off') return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`);
  }

  return <article className="project-card" aria-labelledby={headingId} onPointerMove={moveSpotlight}>{children}</article>;
}
