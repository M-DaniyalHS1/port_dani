# Portfolio task checklist

Work through these steps in order. Mark an item `[x]` only after it is successfully completed and verified. Update this file as we finish each step.

Current scope: keep the portfolio local, as requested. Implementation is complete; final interactive/visual checks remain blocked by browser-tool initialization. Deployment is deferred, and optional project assets are awaiting user content.

## Step 1 — Foundation and current hero

- [x] Inspect the existing project and repository instructions.
- [x] Preserve the uv project, Python configuration, and `.venv`.
- [x] Add Next.js App Router with JavaScript.
- [x] Organize Navbar, HeroSection, and SystemVisual components.
- [x] Keep all styling in one organized `app/globals.css`.
- [x] Centralize future destinations in `config/navigation.js`.
- [x] Implement the requested portfolio text and navigation.
- [x] Apply the charcoal, orange, white, and gray palette.
- [x] Use the supplied transparent portrait.
- [x] Implement animated neural branches and signal pulses.
- [x] Add reduced-motion support and pause background animation when hidden.
- [x] Implement compact mobile navigation.
- [x] Reduce the portrait size on desktop and mobile.
- [x] Add staggered reveal and shimmer to the supporting phrases.
- [x] Pass ESLint after the supporting-text update.
- [x] Pass the production build after the main portrait redesign.

## Step 2 — Finish and verify the hero

- [x] Convert the neural background to SVG with CSS signal animation.
- [x] Inspect the latest desktop layout and confirm portrait/text balance.
- [x] Inspect tablet and mobile layouts, including 320px width.
- [x] Confirm no clipping, overlapping text, or horizontal overflow.
- [x] Verify the compact menu using keyboard and touch-sized controls.
- [x] Verify text animation and neural motion in the browser.
- [x] Verify visible keyboard focus.
- [ ] Verify reduced-motion behavior with the browser preference enabled.
- [x] Apply any agreed final hero refinements.
- [x] Run build and lint on the final hero version.
- [x] Approve the hero before adding more sections (proceeding to Work requested).

## Step 3 - Work section

- [x] Prepare centralized project configuration without invented content.
- [x] Implement a conditional Work component and responsive card styling.
- [x] Wire Work navigation to activate only when project content exists.
- [x] Collect project names, descriptions, roles, and technologies for Dani Blogs, Jarvis, and the Physical AI textbook.
- [x] Build a responsive Work layout using the supplied content.
- [x] Verify desktop (1440px), tablet (820px), and mobile (320px) layout without horizontal overflow.
- [x] Verify the Dani Blogs direct URL responds successfully.
- [x] Activate Work navigation, Explore my work, and the scroll cue.
- [x] Pass ESLint and production build for the populated Work section.
- [ ] Add supplied project screenshots (optional; none supplied yet).
- [ ] Add Jarvis/textbook live or repository links when available.
- [ ] Review the Work layout with Daniyal.

## Step 4 - Expertise section

- [x] Derive the technology stack from Daniyal’s supplied projects.
- [x] Implement Backend, Full-stack, and AI/Voice expertise rows with project evidence.
- [x] Activate Expertise navigation.
- [ ] Verify the new section in desktop and mobile browsers.

## Step 5 - About section

- [x] Prepare a responsive About component and project-based biography draft in `config/profile.js`.
- [x] Populate About from the supplied project descriptions after the request to finish remaining tasks.
- [x] Implement the About layout and verify its production markup.
- [x] Activate About navigation.
- [ ] Visually verify the About layout in desktop and mobile browsers.

## Step 6 - Contact

- [x] Prepare a conditional Contact component with direct links and optional social profiles.
- [x] Add user-requested filler contact details with an explicitly disabled email action.
- [x] Activate Let's talk and Get in touch as links to the visible Contact section.
- [x] Remove the hero coming-soon notice now that Contact exists.
- [x] Pass build, ESLint, and Contact markup checks (valid section links, visible filler, disabled action, no fake mailto URL).
- [x] Configure Daniyal's supplied public email. Optional social links remain omitted.
- [x] Use a direct email link that opens the visitor's mail application.
- [x] Verify the rendered contact action and remove the filler notice.
- [x] Replace the filler email and enable its real destination.

## Step 7 - Final validation

- [x] Add a footer and improve mobile menu dismissal after navigation and Escape.
- [x] Pass ESLint for the remaining section components.
- [x] Implement Open Graph/Twitter metadata, a generated sharing image, robots, and domain-aware sitemap.
- [x] Pass production build and validate generated markup for Work/Expertise links, section IDs, headings, and conditional sections.
- [x] Inspect the generated 1200×630 sharing image.
- [x] Verify HTTP 200 responses for the homepage, robots, sitemap, and sharing image.
- [x] Audit the current production markup: all 10 fragment links have targets, no duplicate IDs, and all images have alt attributes.
- [x] Check base text, heading, primary button, and accent-label contrast against their surfaces (at least 4.5:1).
- [x] Review responsive image loading, reduced-motion CSS, and animation pause on hidden/offscreen hero.
- [x] Review copy/assets and verify that no filler contact text is rendered.
- [x] Audit all 13 internal links and verify the real email action in production HTML.
- [ ] Complete interactive browser checks of enabled actions.
- [ ] Check desktop, tablet, and mobile layouts across supported browsers.
- [ ] Review accessibility, focus, contrast, and reduced motion.
- [ ] Verify animation performance in a working browser (source review complete).
- [x] Implement and verify metadata and social sharing image.
- [ ] Set the final hosting origin and verify canonical URLs and sitemap after deployment.
- [x] Pass production build and lint for the current implementation.
- [x] Recheck production build, ESLint, About content, and enabled navigation after biography configuration.
- [x] Pass production build, ESLint, and markup checks after real contact configuration.
- [ ] Get final design and content approval.

## Step 8 - Deployment

Deferred at Daniyal's request to keep the portfolio local. These items apply only when publication is requested later.

- [ ] Choose hosting and optional domain.
- [x] Prepare deployment settings and instructions in `DEPLOYMENT.md`.
- [ ] Approve publication.
- [ ] Deploy and verify the live portfolio.

## Scope notes

- [x] Add native smooth section scrolling and one-time section entrance effects with reduced-motion and keyboard-focus safeguards.
- [x] Pass production build and ESLint after the section transition update.
- [ ] Visually verify scroll timing and section entrance motion when browser tooling is restored.
- [x] Extend the hero atmosphere across the full site with a shared fixed background and neural/glass middle layer; keep foreground content above it.
- [x] Verify the shared layers render once and pass production build and ESLint.
- [ ] Visually verify the latest shared atmosphere while scrolling on desktop/mobile when browser tooling is restored.
- Visible implementation includes navigation, hero, Work, Expertise, About, Contact, and footer. Contact uses Daniyal's supplied email and an enabled mailto link; no filler contact text is rendered.
- Browser verification for newly added sections is pending: the browser tool currently fails to initialize its assets. Prior hero/Work layout checks remain valid for that earlier version.
- Desktop (1440px), tablet (820px), and mobile (320px) layouts verified. Reduced-motion rules reviewed; browser preference emulation remains pending.
- Do not invent project achievements, contact details, or résumé links.
- Keep unavailable destinations explicitly inactive until implemented.
- Deployment is intentionally deferred. Optional project screenshots and Jarvis/textbook links have not been supplied. Browser runtime initialization remains unavailable; visual and preference-enabled reduced-motion checks remain unchecked.
- Python remains managed by uv; frontend tooling remains managed by npm.

