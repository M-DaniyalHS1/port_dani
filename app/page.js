import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import ExpertiseSection from '../components/ExpertiseSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SectionTransitions from '../components/SectionTransitions';

export default function Home() {
  return <><SectionTransitions /><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><HeroSection /><WorkSection /><ExpertiseSection /><AboutSection /><ContactSection /></main><Footer /></>;
}
