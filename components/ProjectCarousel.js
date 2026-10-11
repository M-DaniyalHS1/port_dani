'use client';

import { Children, useEffect, useRef, useState } from 'react';
import { getMotionSnapshot, subscribeMotion } from '../lib/motion';

export default function ProjectCarousel({ children, header, names }) {
  const track = useRef(null);
  const stage = useRef(null);
  const [active, setActive] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const step = useRef(1);
  const panels = Children.toArray(children);

  useEffect(() => {
    const element = track.current;
    const viewport = window.matchMedia('(min-width: 761px) and (min-height: 680px)');
    let frame;
    let previous = -1;
    function update() {
      frame = undefined;
      if (element.dataset.carousel !== 'true') return;
      const progress = Math.max(0, Math.min(panels.length - 1, (130 - element.getBoundingClientRect().top) / step.current));
      const index = Math.round(progress);
      element.querySelectorAll('.matrix-panel').forEach((panel, panelIndex) => {
        const distance = panelIndex - progress;
        panel.style.setProperty('--matrix-x', `${distance * 90}%`);
        panel.style.setProperty('--matrix-scale', String(1 - Math.min(Math.abs(distance), 1) * .08));
        panel.style.setProperty('--matrix-opacity', String(Math.max(0, 1 - Math.abs(distance))));
      });
      if (previous !== index) {
        previous = index;
        setActive(index);
        element.querySelectorAll('.matrix-panel').forEach((panel, panelIndex) => {
          if (panelIndex !== index) panel.querySelectorAll('video').forEach((video) => video.pause());
        });
      }
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    function configure() {
      const on = viewport.matches && !getMotionSnapshot() && panels.length > 1;
      element.dataset.carousel = String(on);
      setEnabled(on);
      step.current = window.innerHeight * .85;
      element.style.setProperty('--matrix-travel', `${(panels.length - 1) * step.current}px`);
      element.style.setProperty('--matrix-stage-height', `${stage.current.getBoundingClientRect().height}px`);
      if (on) schedule();
    }
    const resize = new ResizeObserver(configure);
    resize.observe(stage.current);
    const unsubscribe = subscribeMotion(configure);
    viewport.addEventListener('change', configure);
    window.addEventListener('resize', configure);
    window.addEventListener('scroll', schedule, { passive: true });
    configure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      unsubscribe();
      viewport.removeEventListener('change', configure);
      window.removeEventListener('resize', configure);
      window.removeEventListener('scroll', schedule);
      delete element.dataset.carousel;
    };
  }, [panels.length]);

  function advance(index) {
    if (index < 0 || index >= panels.length) return;
    const top = window.scrollY + track.current.getBoundingClientRect().top - 130 + index * step.current;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <div ref={track} className="matrix-track">
      <div ref={stage} className="matrix-stage">
        {header}
        <div className="matrix-toolbar">
          <p>{enabled ? 'SCROLL TO ADVANCE · CLICK TO INSPECT' : 'SELECTED PROJECTS · CLICK TO INSPECT'}</p>
          {enabled && <div className="matrix-controls"><button type="button" onClick={() => advance(active - 1)} disabled={active === 0} aria-label="Previous project">←</button><span aria-live="polite" aria-atomic="true">P/{String(active + 1).padStart(2, '0')} <span className="matrix-total">/ {String(panels.length).padStart(2, '0')}</span><span className="sr-only">: {names[active]}</span></span><button type="button" onClick={() => advance(active + 1)} disabled={active === panels.length - 1} aria-label="Next project">→</button></div>}
        </div>
        <div className="work-grid matrix-deck">
          {panels.map((panel, index) => <div key={names[index]} className="matrix-panel" inert={enabled && index !== active} aria-hidden={enabled && index !== active ? true : undefined}>{panel}</div>)}
        </div>
        {enabled && <div className="matrix-pagination" role="group" aria-label="Choose project">{names.map((name, index) => <button type="button" key={name} onClick={() => advance(index)} aria-label={`Show ${name}`} aria-pressed={active === index}><span />{String(index + 1).padStart(2, '0')}</button>)}</div>}
      </div>
    </div>
  );
}
