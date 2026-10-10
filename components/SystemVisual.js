'use client';
import { useEffect, useRef } from 'react';

export default function SystemVisual() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, time = 0, previous = 0, visible = true;
    const points = Array.from({ length: 18 }, (_, i) => ({ x: .49 + ((i * 37) % 53) / 100, y: .10 + ((i * 29) % 82) / 100, phase: i * 1.7 }));
    const edges = points.flatMap((p, i) => points.slice(i + 1).map((q, j) => ({ a: i, b: i + j + 1, distance: Math.hypot(p.x - q.x, p.y - q.y) })).filter(e => e.distance < .31));
    function glow(x, y, radius, opacity) {
      ctx.beginPath(); ctx.fillStyle = `rgba(255,116,38,${opacity})`;
      ctx.shadowColor = '#ff5500'; ctx.shadowBlur = 10;
      ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      const positions = points.map(p => ({ x: p.x * width + Math.sin(time * .16 + p.phase) * 7, y: p.y * height + Math.cos(time * .12 + p.phase) * 6 }));
      edges.forEach((e, i) => {
        const a = positions[e.a], b = positions[e.b], bend = Math.sin(i * 2) * 32;
        const cx = (a.x + b.x) / 2 + bend, cy = (a.y + b.y) / 2 - bend;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.strokeStyle = 'rgba(255,136,0,.12)'; ctx.lineWidth = .7; ctx.stroke();
        const mx = .25 * a.x + .5 * cx + .25 * b.x, my = .25 * a.y + .5 * cy + .25 * b.y;
        ctx.beginPath(); ctx.moveTo(mx, my); ctx.quadraticCurveTo(mx + bend * .4, my - 15, mx + bend, my - 30);
        ctx.strokeStyle = 'rgba(255,136,0,.07)'; ctx.stroke();
        if (i % 3 === 0) {
          const t = (time * .10 + i * .173) % 1, v = 1 - t;
          glow(v * v * a.x + 2 * v * t * cx + t * t * b.x, v * v * a.y + 2 * v * t * cy + t * t * b.y, 1.7, .8);
        }
      });
      positions.forEach((p, i) => glow(p.x, p.y, 1.4 + (Math.sin(time + i) + 1) * .5, .55));
    }
    function animate(now) {
      time += previous ? Math.min((now - previous) / 1000, .05) : 0; previous = now;
      draw(); frame = requestAnimationFrame(animate);
    }
    function syncMotion() {
      cancelAnimationFrame(frame); previous = 0; draw();
      if (!motion.matches && visible && !document.hidden) frame = requestAnimationFrame(animate);
    }
    function resize() {
      const bounds = canvas.getBoundingClientRect(); width = bounds.width; height = bounds.height;
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0); syncMotion();
    }
    const observer = new ResizeObserver(resize); observer.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncMotion(); }); intersection.observe(canvas);
    motion.addEventListener('change', syncMotion); document.addEventListener('visibilitychange', syncMotion); resize();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
      motion.removeEventListener('change', syncMotion); document.removeEventListener('visibilitychange', syncMotion);
    };
  }, []);
  return <div className="system-visual" aria-hidden="true"><canvas ref={canvasRef} className="neural-canvas" /><div className="orbital-ring" /><div className="glass-shard" /></div>;
}
