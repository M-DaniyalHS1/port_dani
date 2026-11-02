import MotionToggle from './MotionToggle';
import TechIcon from './TechIcon';

export default function Footer() {
  return <footer className="site-footer"><MotionToggle /><a href="#top">Back to top <span aria-hidden="true"><TechIcon name="arrow-up" /></span></a></footer>;
}
