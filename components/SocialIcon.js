import TechIcon, { iconStyle } from './TechIcon';

export default function SocialIcon({ name }) {
  if (!['email', 'linkedin', 'github'].includes(name)) return null;

  return (
    <span className={`social-icon social-icon-${name}`} style={iconStyle(name)} aria-hidden="true">
      <TechIcon name={name} />
    </span>
  );
}
