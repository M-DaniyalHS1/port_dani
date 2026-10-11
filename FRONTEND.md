# Portfolio frontend

The Next.js App Router frontend shares the project root with the existing uv project. Python remains managed by uv; npm manages only the frontend.

```sh
npm install
npm run dev
npm run check
npm run build
```

Open http://localhost:3000 while the development server runs.

Selected Work cards use translucent charcoal glass with backdrop blur, subtle surface reflections, and illuminated edges on hover. Browsers without backdrop-filter support retain a darker readable surface. Reduced-transparency and forced-color preferences use opaque cards without blur.

Work, About, and Contact use matching heading highlights and viewport-triggered reveals. Work cards fade in with staggered timing and lift on hover; About paragraphs enter in sequence; Contact actions fade in after the heading. Link arrows, navigation, and footer links have restrained hover feedback. Heading shimmer pauses outside the viewport. These effects replay on section entry; reduced-motion preferences keep all content static and readable. Refresh the browser after a production rebuild to load new assets.

Expertise has staggered heading/row reveals on viewport entry, an orange/amber text shimmer on “intelligence,” expanding title underlines, and subtle technology-tag hover feedback. The shimmer pauses outside the viewport. Reduced-motion and forced-color preferences retain readable text without decorative animation.

Section navigation uses native smooth scrolling. Work, Expertise, About, and Contact gently fade and rise into view once as they enter the viewport. Content remains visible without JavaScript; keyboard focus immediately reveals its section. Reduced-motion preferences disable scrolling and reveal animation, including preference changes while the page is open.

The root layout now provides two shared, fixed decorative layers: the charcoal/orange background and the neural SVG with orbital/glass details. All sections sit above those layers and retain a transparent section background, so the hero atmosphere continues across the full page. Cards keep their readable surfaces. Reduced motion remains supported; decorative motion pauses when the tab is hidden.

Contact uses Daniyal's supplied public email with an enabled mailto link. Let's talk and Get in touch scroll to the section. To update the address later, edit both fields in `config/profile.js`:

```js
contact: { label: 'YOUR_REAL_EMAIL', href: 'mailto:YOUR_REAL_EMAIL' },
```

Replace both values with your actual email (or use a real contact URL for `href`). No email is sent while `href` is null. Optional social links should also use real destinations.

Expertise uses only the technologies evidenced by the supplied projects. About is populated with a biography based on those projects. Contact is conditionally rendered from `config/profile.js`: set `profile.contact` to a real `{ label, href }` destination, such as a supplied `mailto:` URL. Optional `profile.socials` entries use the same shape. Contact navigation activates automatically when configured. No contact form or fictitious contact details are supplied.

The mobile menu closes after selecting a link or pressing Escape. Page styling remains in `app/globals.css`. The generated sharing image uses the inline style format required by Next.js `ImageResponse`. Metadata and the sitemap use the final origin configured through `NEXT_PUBLIC_SITE_URL` or Vercel’s production URL. See `DEPLOYMENT.md` for hosting setup and publication status.

The portfolio includes navigation, hero, Work, Expertise, About, Contact, and footer. Three projects supplied by Daniyal live in `config/projects.js`: Dani Blogs, Jarvis, and the Physical AI textbook. Work navigation and Explore my work point to this section. The section automatically hides if the project list becomes empty. Destinations remain configured in `config/navigation.js`; null destinations render explicitly unavailable.

Each project in `config/projects.js` needs a unique `id` (letters, numbers, and hyphens), `name`, `category`, `description`, `role`, and `features` and `technologies` arrays. Optional fields are `deployment`, `liveUrl`, `repositoryUrl`, and `image` with `src` and descriptive `alt`. Use complete HTTPS URLs for project links. Put screenshots in `public/projects` and reference them as `/projects/filename.webp`. Missing screenshots or links are omitted. Dani Blogs uses the supplied direct URL; Jarvis and the textbook currently have no external links. Verify actual content and URLs before publication.

All styling is in `app/globals.css`, divided into tokens, base, navigation, hero, system visual, responsive, animations, and accessibility. Headings use locally hosted Space Grotesk in `app/fonts`, with its SIL Open Font License included. Body and technical labels use system font stacks. No browser requests to external font services are needed. The charcoal and orange atmosphere uses the transparent portrait in `public/daniyal-portrait.png`, CSS lighting and glass details, and a shared neural SVG. The neural animation pauses when the tab is hidden; hero shimmer pauses outside the viewport.

The supplied project previews live in `public/projects`. Jarvis is labelled as project artwork. Cards initially show a short `summary` from `config/projects.js`; native “Read more” disclosures reveal the full description, features, role, technologies, deployment information, and case study. The control changes to “Read less” when expanded and works without JavaScript. Each card expands independently. Missing external project URLs remain omitted. Project images are lazily loaded and optimized by Next.js. The cards have a restrained pointer spotlight on desktop, with a static keyboard-focus highlight.

Navigation stays visible while scrolling and marks the current section with `aria-current="location"`. Individual project cards, expertise rows, and About paragraphs reveal once when they enter the viewport. All text remains visible without JavaScript. Contact groups Email, LinkedIn, and GitHub together with matching SVG glass badges and hover/focus effects. Email opens the configured mailto destination. The copy-email control and footer identity tagline have been removed at Daniyal’s request.

The footer motion toggle stores its preference locally and honors system reduced motion. It also works for the current session if storage is unavailable. Verify this logic with `node scripts/check-motion.mjs`. Browser layout, clipboard, keyboard, and performance checks remain pending while browser tooling is unavailable; deployment remains deferred.

Jarvis uses the supplied MP4 in `public/projects/jarvis-demo.mp4`, configured through `project.video`. The player uses the existing Jarvis artwork as its poster, native controls, inline mobile playback, and `preload="none"`. Playback starts on user interaction. No caption file has been supplied. Live playback and fullscreen checks remain pending while browser tooling is unavailable.


Project Matrix uses native page scrolling and a sticky project deck on all viewport sizes, including shorter browser panels. The current card moves upward and fades out before the next enters from below; only the active panel is visible. ProjectCarousel advances through the real project count, exposes previous/next and direct project controls, removes inactive cards from keyboard navigation, and pauses hidden videos. Disabled motion and no JavaScript retain the normal project grid. Expanded details scroll inside the active card. Short viewports use a compact header and card layout. The existing background, glass materials, and spotlight are preserved. Desktop and mobile progression, one-card visibility, project inspection, and mobile overflow were verified in the browser.
