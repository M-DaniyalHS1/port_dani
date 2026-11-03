'use client';

import { useState } from 'react';

export default function ProjectDetails({ id, name, links, children }) {
  const [open, setOpen] = useState(false);
  const toggleId = `project-${id}-toggle`;
  const regionId = `project-${id}-details`;

  return (
    <div className="project-actions">
      <div className="project-actions-row">
        {links}
        <button id={toggleId} type="button" className="project-toggle" aria-expanded={open} aria-controls={regionId} onClick={() => setOpen((value) => !value)}>
          <span className="read-more-label">Read more</span>
          <span className="read-less-label">Read less</span>
          <span className="sr-only"> about {name}</span>
          <span className="project-details-symbol" aria-hidden="true">+</span>
        </button>
      </div>
      <div id={regionId} className="project-detail-content" role="region" aria-labelledby={toggleId} hidden={!open}>{children}</div>
    </div>
  );
}
