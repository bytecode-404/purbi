# PURBI International – Vite + React + Tailwind v4.1

This app scaffolds the PURBI website wireframe with clean React components and Tailwind CSS v4.1 (no `tailwind.config.js`). Sections are modular and ready for real content and assets.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Tailwind v4.1 setup

- Uses `@tailwindcss/vite` plugin in `vite.config.js`.
- Entry stylesheet: `src/index.css` imports Tailwind via `@import "tailwindcss";` and defines a small `@theme` block for CSS variables.
- No `tailwind.config.js` is required in v4.1.

## Structure

- React section components live in `src/components/`.
- Shared UI helpers are in `src/components/ui/`.
- The app composes all sections in `src/App.jsx` following the wireframe order.

## Next steps

- Replace placeholder text and boxes (`wire-box`) with real copy, icons, and images.
- Wire navigation items to routes or scroll behavior as desired.
- Add accessibility alt text for real images and links.
