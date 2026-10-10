# Portfolio frontend

The Next.js App Router frontend shares the project root with the existing uv project. Python remains managed by uv; npm manages only the frontend.

```sh
npm install
npm run dev
npm run check
npm run build
```

Open http://localhost:3000 while the development server runs.

Only navigation and the hero are implemented. Edit `config/navigation.js` when real sections or contact destinations are available. Null destinations render explicitly unavailable, without broken anchors or invented contact details.

All styling is in `app/globals.css`, divided into tokens, base, navigation, hero, system visual, responsive, animations, and accessibility. Fonts use local sans-serif and monospace stacks without external font requests. The charcoal and orange hero uses the transparent portrait in `public/daniyal-portrait.png`, CSS ambient lighting and glass detail, and an animated neural canvas in `SystemVisual`. Reduced motion shows a static neural pattern; animation also pauses when the tab is hidden or the hero leaves the viewport. The portrait is the supplied original image; its generated mockup lighting is approximated with CSS rather than baked into the image.
