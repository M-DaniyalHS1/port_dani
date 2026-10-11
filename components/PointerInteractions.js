'use client';

import { useEffect } from 'react';
import { getMotionSnapshot, subscribeMotion } from '../lib/motion';

export default function PointerInteractions() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'interaction-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    const shape = document.createElement('i');
    const label = document.createElement('span');
    label.textContent = 'Inspect ↗';
    cursor.append(shape, label);
    document.body.append(cursor);
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const modified = new Set();
    let magnet = null, card = null, frame = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0, initialized = false, previous = 0;
    const selector = 'a[href],button:not(:disabled),summary,[role="button"]';
    function release(element) {
      if (!element) return;
      element.style.removeProperty('--magnet-x');
      element.style.removeProperty('--magnet-y');
      element.removeAttribute('data-magnetic');
      modified.delete(element);
    }
    function reset() {
      cancelAnimationFrame(frame); frame = 0; initialized = false;
      cursor.dataset.visible = 'false';
      delete document.documentElement.dataset.pointerInteractions;
      card?.removeAttribute('data-targeting'); card = null;
      modified.forEach(release); magnet = null;
    }
    function render(now) {
      frame = 0;
      const step = 1 - Math.exp(-20 * Math.min((now - previous) / 1000, .05));
      previous = now;
      x += (targetX - x) * step; y += (targetY - y) * step;
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (Math.hypot(targetX - x, targetY - y) > .1) frame = requestAnimationFrame(render);
    }
    function move(event) {
      if (event.pointerType !== 'mouse' || !finePointer.matches || getMotionSnapshot() || document.hidden || window.matchMedia('(forced-colors:active)').matches) return reset();
      if (event.target.closest('input,textarea,select,[contenteditable="true"],video')) return reset();
      const nextCard = event.target.closest('.project-card');
      const interactive = event.target.closest(selector);
      const nextMagnet = interactive?.matches('.portrait-trigger,[aria-disabled="true"]') ? null : interactive;
      if (card !== nextCard) { card?.removeAttribute('data-targeting'); card = nextCard; }
      if (magnet !== nextMagnet) { release(magnet); magnet = nextMagnet; }
      card?.setAttribute('data-targeting', 'true');
      document.documentElement.dataset.pointerInteractions = 'true';
      cursor.dataset.mode = 'target';
      cursor.dataset.inspect = String(!!card && !interactive);
      cursor.dataset.visible = 'true';
      targetX = event.clientX; targetY = event.clientY;
      if (!initialized) { x = targetX; y = targetY; initialized = true; }
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const offsetX = Number.parseFloat(magnet.style.getPropertyValue('--magnet-x')) || 0;
        const offsetY = Number.parseFloat(magnet.style.getPropertyValue('--magnet-y')) || 0;
        const dx = Math.max(-7, Math.min(7, (targetX - (rect.left - offsetX + rect.width / 2)) * .09));
        const dy = Math.max(-5, Math.min(5, (targetY - (rect.top - offsetY + rect.height / 2)) * .12));
        magnet.style.setProperty('--magnet-x', `${dx}px`);
        magnet.style.setProperty('--magnet-y', `${dy}px`);
        magnet.dataset.magnetic = 'true'; modified.add(magnet);
      }
      if (!frame) { previous = performance.now() - 16; frame = requestAnimationFrame(render); }
    }
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('blur', reset);
    window.addEventListener('scroll', reset, { passive: true });
    document.addEventListener('pointerleave', reset);
    document.addEventListener('visibilitychange', reset);
    finePointer.addEventListener('change', reset);
    const unsubscribe = subscribeMotion(reset);
    return () => {
      reset(); cursor.remove(); unsubscribe();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', reset);
      window.removeEventListener('scroll', reset);
      document.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', reset);
      finePointer.removeEventListener('change', reset);
    };
  }, []);
  return null;
}
