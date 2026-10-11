export default function SocialIcon({ name }) {
  if (!['email', 'linkedin', 'github'].includes(name)) return null;

  return (
    <span className={`social-icon social-icon-${name}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
        {name === 'email' ? (
          <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
            <path d="m3.5 6 8.5 7 8.5-7" />
          </g>
        ) : name === 'linkedin' ? (
          <>
            <circle cx="5" cy="5" r="2" />
            <path d="M3 9h4v12H3zm7 0h4v1.7c.8-1.3 2-2 3.6-2 3 0 4.4 1.8 4.4 5.1V21h-4v-6.5c0-1.7-.6-2.6-1.9-2.6-1.4 0-2.1 1-2.1 2.8V21h-4z" />
          </>
        ) : (
          <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.8-1.33-3.8-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.73 2.64 1.23 3.29.94.1-.73.39-1.23.71-1.51-2.5-.29-5.13-1.25-5.13-5.58 0-1.24.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .94-.3 3.08 1.15a10.72 10.72 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.56.23 2.71.11 3 .72.79 1.16 1.79 1.16 3.03 0 4.34-2.64 5.29-5.15 5.57.41.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8z" />
        )}
      </svg>
    </span>
  );
}
