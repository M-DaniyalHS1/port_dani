'use client';

import { useEffect, useRef } from 'react';

const nodes = Array.from({ length: 18 }, (_, i) => ({
  x: 588 + ((i * 37) % 53) * 12,
  y: 80 + ((i * 29) % 82) * 8,
}));
const branches = nodes.flatMap((a, i) => nodes.slice(i + 1).flatMap((b, j) => {
  if (Math.hypot((a.x - b.x) / 1200, (a.y - b.y) / 800) >= .31) return [];
  const bend = Math.sin(i * 2 + j) * 36;
  const cx = (a.x + b.x) / 2 + bend;
  const cy = (a.y + b.y) / 2 - bend;
  const mx = .25 * a.x + .5 * cx + .25 * b.x;
  const my = .25 * a.y + .5 * cy + .25 * b.y;
  return [{
    id: `${i}-${j}`,
    path: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`,
    fork: `M ${mx} ${my} Q ${mx + bend * .4} ${my - 15} ${mx + bend} ${my - 30}`,
  }];
}));

export default function SystemVisual() {
  const visualRef = useRef(null);
  useEffect(() => {
    const visual = visualRef.current;
    let visible = true;
    function syncMotion() {
      visual.dataset.paused = String(!visible || document.hidden);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncMotion();
    });
    observer.observe(visual);
    document.addEventListener('visibilitychange', syncMotion);
    syncMotion();
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncMotion);
    };
  }, []);

  return (
    <div ref={visualRef} className="system-visual" aria-hidden="true">
      <svg className="neural-svg" viewBox="0 0 1200 800" preserveAspectRatio="none" focusable="false">
        <g className="neural-field">
          {branches.map((branch, i) => (
            <g key={branch.id}>
              <path className="neural-branch" d={branch.path} />
              <path className="neural-fork" d={branch.fork} />
              {i % 3 === 0 && <path className="neural-signal" d={branch.path} pathLength="1" style={{ animationDelay: `${-i * .73}s` }} />}
            </g>
          ))}
          {nodes.map((node, i) => <circle key={i} className="neural-node" cx={node.x} cy={node.y} r="2.3" style={{ animationDelay: `${-i * .47}s` }} />)}
        </g>
      </svg>
      <div className="orbital-ring" />
      <div className="glass-shard" />
    </div>
  );
}
