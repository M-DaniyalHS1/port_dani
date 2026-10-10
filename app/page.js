import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><HeroSection /></main></>;
}
