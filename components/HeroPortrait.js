'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getMotionSnapshot } from '../lib/motion';

export default function HeroPortrait() {
  const [locked, setLocked] = useState(false);
  const [hovered, setHovered] = useState(false);
  function scan(event) {
    if (event.pointerType !== 'mouse' || getMotionSnapshot()) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(15, Math.min(80, (event.clientX - bounds.left) / bounds.width * 100));
    event.currentTarget.style.setProperty('--blueprint-edge', `${x}%`);
    setHovered(true);
  }
  function reset(event) {
    setHovered(false);
    event.currentTarget.style.setProperty('--blueprint-edge', '55%');
  }
  return (
    <div className="hero-portrait blueprint-portrait" data-blueprint={locked || hovered ? 'true' : 'false'}>
      <button type="button" className="portrait-trigger" aria-label="Toggle blueprint portrait" aria-pressed={locked} onPointerMove={scan} onPointerLeave={reset} onClick={() => setLocked(!locked)} onKeyDown={(event) => { if (event.key === 'Escape') { setLocked(false); setHovered(false); } }}>
        <Image src="/second_portrait.png" alt="Daniyal wearing glasses, a dark jacket, and a white shirt" width={1254} height={1254} sizes="(max-width: 760px) 90vw, 48vw" loading="eager" className="portrait-image" />
        <Image src="/portrait-blueprint.png" alt="" width={1254} height={1254} sizes="(max-width: 760px) 90vw, 48vw" className="portrait-blueprint" />
        <span className="blueprint-annotations" aria-hidden="true"><span>REASONING</span><span>TOOLS</span><span>MEMORY</span></span>
      </button>
      <span className="portrait-instruction">{locked ? 'BLUEPRINT LOCKED / CLICK TO RELEASE' : 'HOVER TO EXPLORE / CLICK TO LOCK'}</span>
    </div>
  );
}
