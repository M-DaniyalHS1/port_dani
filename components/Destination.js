export default function Destination({ destination, children, className = '' }) {
  return destination.href
    ? <a className={className} href={destination.href}>{children || destination.label}</a>
    : <span className={`${className} unavailable`} role="link" aria-disabled="true" title="Available when this section is added">{children || destination.label}<span className="sr-only"> — coming soon</span></span>;
}
