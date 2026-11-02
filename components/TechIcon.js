import { getIcon } from '../lib/icons';

export function iconStyle(name) {
  const icon = getIcon(name);
  return icon ? { '--icon-color': icon.color } : undefined;
}

export default function TechIcon({ name, className = '' }) {
  const icon = getIcon(name);
  if (!icon) return null;

  return (
    <span className={`tech-icon ${className}`.trim()} style={{ '--icon-color': icon.color }} aria-hidden="true">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {icon.stroke
          ? <path d={icon.path} fill="none" stroke={icon.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          : <path d={icon.path} fill={icon.color} />}
      </svg>
    </span>
  );
}

export function TechTag({ name }) {
  return <li className="tech-tag" style={iconStyle(name)}><TechIcon name={name} />{name}</li>;
}
