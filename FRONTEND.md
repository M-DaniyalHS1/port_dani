# Portfolio frontend

The Next.js App Router frontend shares the project root with the existing uv project. Python remains managed by uv; npm manages only the frontend.

```sh
npm install
npm run dev
npm run check
npm run build
```

Open http://localhost:3000 while the development server runs.

Section navigation uses native smooth scrolling. Work, Expertise, About, and Contact gently fade and rise into view once as they enter the viewport. Content remains visible without JavaScript; keyboard focus immediately reveals its section. Reduced-motion preferences disable scrolling and reveal animation, including preference changes while the page is open.

The root layout now provides two shared, fixed decorative layers: the charcoal/orange background and the neural SVG with orbital/glass details. All sections sit above those layers and retain a transparent section background, so the hero atmosphere continues across the full page. Cards keep their readable surfaces. Reduced motion remains supported; decorative motion pauses when the tab is hidden.

Contact uses Daniyal's supplied public email with an enabled mailto link. Let's talk and Get in touch scroll to the section. To update the address later, edit both fields in `config/profile.js`:

```js
contact: { label: 'YOUR_REAL_EMAIL', href: 'mailto:YOUR_REAL_EMAIL' },
```

Replace both values with your actual email (or use a real contact URL for `href`). No email is sent while `href` is null. Optional social links should also use real destinations.

Expertise uses only the technologies evidenced by the supplied projects. About is populated with a biography based on those projects. Contact is conditionally rendered from `config/profile.js`: set `profile.contact` to a real `{ label, href }` destination, such as a supplied `mailto:` URL. Optional `profile.socials` entries use the same shape. Contact navigation activates automatically when configured. No contact form or fictitious contact details are supplied.

The mobile menu closes after selecting a link or pressing Escape. Page styling remains in `app/globals.css`. The generated sharing image uses the inline style format required by Next.js `ImageResponse`. Metadata and the sitemap use the final origin configured through `NEXT_PUBLIC_SITE_URL` or Vercel’s production URL. See `DEPLOYMENT.md` for hosting setup and publication status.

Navigation, the hero, and Work are visible. Three projects supplied by Daniyal live in `config/projects.js`: Dani Blogs, Jarvis, and the Physical AI textbook. Work navigation, Explore my work, and the scroll cue point to this section. The section automatically hides if the project list becomes empty. Other destinations remain configured in `config/navigation.js`; null destinations render explicitly unavailable.

Each project in `config/projects.js` needs a unique `id` (letters, numbers, and hyphens), `name`, `category`, `description`, `role`, and `features` and `technologies` arrays. Optional fields are `deployment`, `liveUrl`, `repositoryUrl`, and `image` with `src` and descriptive `alt`. Use complete HTTPS URLs for project links. Put screenshots in `public/projects` and reference them as `/projects/filename.webp`. Missing screenshots or links are omitted. Dani Blogs uses the supplied direct URL; Jarvis and the textbook currently have no external links. Verify actual content and URLs before publication.

All styling is in `app/globals.css`, divided into tokens, base, navigation, hero, system visual, responsive, animations, and accessibility. Fonts use local sans-serif and monospace stacks without external font requests. The charcoal and orange hero uses the transparent portrait in `public/daniyal-portrait.png`, CSS ambient lighting and glass detail, and an animated neural SVG in `SystemVisual`. Reduced motion shows a static neural pattern; animation also pauses when the tab is hidden or the hero leaves the viewport. The portrait is the supplied original image; its generated mockup lighting is approximated with CSS rather than baked into the image.

