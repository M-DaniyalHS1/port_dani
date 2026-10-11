const eventName = 'portfolio-motion-change';
let sessionPaused = null;

export function getMotionSnapshot() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sessionPaused !== null) return reduced || sessionPaused;
  try { return reduced || localStorage.getItem('portfolio-motion') === 'off'; }
  catch { return reduced; }
}

export function subscribeMotion(callback) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  window.addEventListener(eventName, callback);
  window.addEventListener('storage', callback);
  preference.addEventListener('change', callback);
  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener('storage', callback);
    preference.removeEventListener('change', callback);
  };
}

export function setMotionPaused(paused) {
  try { localStorage.setItem('portfolio-motion', paused ? 'off' : 'on'); sessionPaused = null; }
  catch { sessionPaused = paused; }
  document.documentElement.dataset.motion = paused ? 'off' : 'on';
  window.dispatchEvent(new Event(eventName));
}
