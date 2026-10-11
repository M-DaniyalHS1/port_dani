'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { getMotionSnapshot, subscribeMotion, setMotionPaused } from '../lib/motion';

export default function MotionToggle() {
  const paused = useSyncExternalStore(subscribeMotion, getMotionSnapshot, () => false);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'off' : 'on';
  }, [paused]);

  return (
    <button className="motion-toggle" type="button" aria-pressed={paused} aria-label="Pause decorative animations" title="Respects your system’s reduced-motion setting" onClick={() => setMotionPaused(!paused)}>
      <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> Motion {paused ? 'off' : 'on'}
    </button>
  );
}
