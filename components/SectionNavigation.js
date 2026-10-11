'use client';

import { useEffect } from 'react';
import { getMotionSnapshot } from '../lib/motion';

export default function SectionNavigation() {
  useEffect(() => {
    let pending = null, frame = 0, timer;
    const temporaryFocus = new Set();
    function stop() {
      pending = null;
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      frame = 0;
    }
    function destination(hash) {
      try { return document.getElementById(decodeURIComponent(hash.slice(1))); }
      catch { return null; }
    }
    function topFor(element) {
      const margin = parseFloat(getComputedStyle(element).scrollMarginTop) || document.querySelector('.navbar')?.getBoundingClientRect().height + 24 || 0;
      return Math.max(0, scrollY + element.getBoundingClientRect().top - margin);
    }
    function focus(element) {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '-1');
        temporaryFocus.add(element);
        element.addEventListener('blur', () => {
          element.removeAttribute('tabindex');
          temporaryFocus.delete(element);
        }, { once: true });
      }
      element.focus({ preventScroll: true });
    }
    function start(element, smooth, moveFocus) {
      stop();
      const top = topFor(element);
      pending = { element, top };
      window.scrollTo({ top, behavior: smooth && !getMotionSnapshot() ? 'smooth' : 'instant' });
      if (moveFocus) focus(element);
      timer = setTimeout(stop, 4000);
    }
    function align() {
      frame = 0;
      if (!pending) return;
      const top = topFor(pending.element);
      if (Math.abs(top - pending.top) > 1) {
        pending.top = top;
        window.scrollTo({ top, behavior: 'instant' });
      }
    }
    function schedule() { if (pending && !frame) frame = requestAnimationFrame(align); }
    function restoreHash() {
      const element = destination(location.hash);
      if (element) start(element, false, false);
      else stop();
    }
    function click(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest('a[href]');
      if (!anchor || anchor.download || (anchor.target && anchor.target !== '_self')) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      const element = destination(url.hash);
      if (!element) return;
      event.preventDefault();
      if (url.hash !== location.hash) history.pushState(null, '', url.hash);
      start(element, true, true);
    }
    function key(event) {
      if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) stop();
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(document.querySelector('.site-content'));
    document.addEventListener('click', click);
    window.addEventListener('hashchange', restoreHash);
    window.addEventListener('popstate', restoreHash);
    window.addEventListener('resize', schedule);
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('pointerdown', stop, { passive: true });
    window.addEventListener('keydown', key);
    restoreHash();
    document.fonts.ready.then(schedule);
    return () => {
      stop(); observer.disconnect();
      temporaryFocus.forEach(element => element.removeAttribute('tabindex'));
      document.removeEventListener('click', click);
      window.removeEventListener('hashchange', restoreHash);
      window.removeEventListener('popstate', restoreHash);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('pointerdown', stop);
      window.removeEventListener('keydown', key);
    };
  }, []);
  return null;
}
