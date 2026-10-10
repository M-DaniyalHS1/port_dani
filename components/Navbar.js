import { destinations } from '../config/navigation';
import Destination from './Destination';
import Link from 'next/link';

function Links() {
  return Object.entries(destinations).map(([key, destination]) => <Destination key={key} destination={destination} className={key === 'contact' ? 'nav-contact' : ''} />);
}

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" href="/" aria-label="Daniyal home">D<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Links /></nav>
      <details className="mobile-nav">
        <summary aria-label="Toggle navigation">Menu <span aria-hidden="true">＋</span></summary>
        <nav aria-label="Mobile navigation"><Links /></nav>
      </details>
    </header>
  );
}
