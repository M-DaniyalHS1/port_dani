'use client';

import { destinations } from '../config/navigation';
import Destination from './Destination';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Links({ active }) {
  return Object.entries(destinations).map(([key, destination]) => <Destination key={key} destination={destination} ariaCurrent={active === key ? 'location' : undefined} className={key === 'contact' ? 'nav-contact' : ''} />);
}

export default function Navbar() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const sections = Object.keys(destinations).map((id) => document.getElementById(id)).filter(Boolean);
    let frame;
    function update() {
      frame = undefined;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= window.innerHeight * .35).at(-1);
      setActive(current?.id || null);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  return (
    <header className="navbar">
      <Link className="brand" href="/" aria-label="Daniyal home">D<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Links active={active} /></nav>
      <details className="mobile-nav" onClick={(event) => {
        if (event.target.closest('a')) event.currentTarget.open = false;
      }} onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.currentTarget.open = false;
          event.currentTarget.querySelector('summary').focus();
        }
      }}>
        <summary aria-label="Toggle navigation">Menu <span aria-hidden="true">＋</span></summary>
        <nav aria-label="Mobile navigation"><Links active={active} /></nav>
      </details>
    </header>
  );
}
