'use client';

export default function ProjectCard({ children, headingId }) {
  function moveSpotlight(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'off') return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
    card.style.setProperty('--tilt-x', `${(.5 - y / bounds.height) * 12}deg`);
    card.style.setProperty('--tilt-y', `${(x / bounds.width - .5) * 12}deg`);
  }

  function resetTilt(event) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  }

  return <article className="project-card" aria-labelledby={headingId} onPointerMove={moveSpotlight} onPointerLeave={resetTilt}>{children}</article>;
}
