'use client';

import { destinations } from '../config/navigation';
import Destination from './Destination';
import Link from 'next/link';

function Links() {
  return Object.entries(destinations).map(([key, destination]) => <Destination key={key} destination={destination} className={key === 'contact' ? 'nav-contact' : ''} />);
}

export default function Navbar() {
  return (
    <header id="top" className="navbar">
      <Link className="brand" href="/" aria-label="Daniyal home">D<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Links /></nav>
      <details className="mobile-nav" onClick={(event) => {
        if (event.target.closest('a')) event.currentTarget.open = false;
      }} onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.currentTarget.open = false;
          event.currentTarget.querySelector('summary').focus();
        }
      }}>
        <summary aria-label="Toggle navigation">Menu <span aria-hidden="true">＋</span></summary>
        <nav aria-label="Mobile navigation"><Links /></nav>
      </details>
    </header>
  );
}
