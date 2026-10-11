import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../lib/motion.js', import.meta.url), 'utf8');
const events = new EventTarget();
const preference = new EventTarget();
preference.matches = false;
globalThis.window = events;
window.matchMedia = () => preference;
globalThis.document = { documentElement: { dataset: {} } };
const storage = new Map();
globalThis.localStorage = {
  getItem: (key) => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value),
};
const { getMotionSnapshot, setMotionPaused, subscribeMotion } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
assert.equal(getMotionSnapshot(), false);
let notifications = 0;
const unsubscribe = subscribeMotion(() => notifications++);
setMotionPaused(true);
assert.equal(getMotionSnapshot(), true);
assert.equal(storage.get('portfolio-motion'), 'off');
assert.equal(document.documentElement.dataset.motion, 'off');
setMotionPaused(false);
assert.equal(getMotionSnapshot(), false);
preference.matches = true;
preference.dispatchEvent(new Event('change'));
assert.equal(getMotionSnapshot(), true, 'System reduced motion overrides manual animation preference');
preference.matches = false;
localStorage.setItem = () => { throw new Error('Storage unavailable'); };
setMotionPaused(true);
assert.equal(getMotionSnapshot(), true, 'Pause remains available when storage is blocked');
setMotionPaused(false);
assert.equal(getMotionSnapshot(), false);
const beforeUnsubscribe = notifications;
unsubscribe();
window.dispatchEvent(new Event('portfolio-motion-change'));
assert.equal(notifications, beforeUnsubscribe, 'Listeners are removed on cleanup');
console.log('Motion controls: persistence, system preference, blocked-storage fallback, and cleanup passed.');
