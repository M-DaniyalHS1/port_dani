'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getMotionSnapshot, subscribeMotion } from '../lib/motion';

export default function HeroPortrait() {
  const [locked, setLocked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const trigger = useRef(null);
  const pointer = useRef({ x: 0, y: 0, currentX: 0, currentY: 0, initialized: false });
  useEffect(() => {
    function escape(event) { if (event.key === 'Escape') { setLocked(false); setHovered(false); } }
    function pause() { setHovered(false); }
    const unsubscribe = subscribeMotion(() => setHovered(false));
    window.addEventListener('keydown', escape);
    window.addEventListener('blur', pause);
    document.addEventListener('visibilitychange', pause);
    return () => { unsubscribe(); window.removeEventListener('keydown', escape); window.removeEventListener('blur', pause); document.removeEventListener('visibilitychange', pause); };
  }, []);
  useEffect(() => {
    if (!hovered) return;
    let frame;
    let previous = performance.now();
    function render(now) {
      const position = pointer.current;
      const step = 1 - Math.exp(-18 * Math.min((now - previous) / 1000, .05));
      previous = now;
      position.currentX += (position.x - position.currentX) * step;
      position.currentY += (position.y - position.currentY) * step;
      trigger.current.style.setProperty('--reveal-x', `${position.currentX}px`);
      trigger.current.style.setProperty('--reveal-y', `${position.currentY}px`);
      frame = requestAnimationFrame(render);
    }
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, [hovered]);
  function scan(event) {
    if (event.pointerType !== 'mouse' || getMotionSnapshot()) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const position = pointer.current;
    position.x = event.clientX - bounds.left;
    position.y = event.clientY - bounds.top;
    if (!position.initialized) {
      position.currentX = position.x; position.currentY = position.y; position.initialized = true;
      event.currentTarget.style.setProperty('--reveal-x', `${position.x}px`);
      event.currentTarget.style.setProperty('--reveal-y', `${position.y}px`);
    }
    setHovered(true);
  }
  function reset() {
    setHovered(false);
    pointer.current.initialized = false;
  }
  return (
    <div className="hero-portrait blueprint-portrait" data-blueprint={locked || hovered ? 'true' : 'false'} data-locked={locked} data-hovered={hovered}>
      <button ref={trigger} type="button" className="portrait-trigger" aria-label="Toggle blueprint portrait" aria-pressed={locked} onPointerMove={scan} onPointerLeave={reset} onPointerCancel={reset} onBlur={reset} onClick={() => setLocked(!locked)}>
        <Image src="/second_portrait.png" alt="Daniyal wearing glasses, a dark jacket, and a white shirt" width={1254} height={1254} sizes="(max-width: 760px) 90vw, 48vw" loading="eager" className="portrait-image" />
        <Image src="/portrait-blueprint.png" alt="" width={1254} height={1254} sizes="(max-width: 760px) 90vw, 48vw" className="portrait-blueprint" />
        <span className="portrait-reveal-cursor" aria-hidden="true" />
        <span className="blueprint-annotations" aria-hidden="true"><span>REASONING</span><span>TOOLS</span><span>MEMORY</span></span>
      </button>
      <span className="portrait-instruction">{locked ? 'BLUEPRINT LOCKED / CLICK TO RELEASE' : 'HOVER TO EXPLORE / CLICK TO LOCK'}</span>
    </div>
  );
}
