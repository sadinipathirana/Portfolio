# Sadini Pathirana — Portfolio

A modern, responsive portfolio website for Software Developer & AI/ML Engineer **Sadini Pathirana**.

## Features

- Professional navy & slate color theme with dark mode
- Dark mode & light mode toggle
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation and Framer Motion animations
- Sections: Hero, About, Skills, Projects, Experience, Education, Contact

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Two `index.html` files (both are kept on purpose)

| File | Purpose |
|------|---------|
| **`index.html`** (project root) | Source template for development. **Edit this one** for title, meta description, fonts, etc. |
| **`dist/index.html`** | Production build output. Created/updated when you run `npm run build`. Used for deployment. |

- `npm run dev` uses the **root** `index.html`.
- `npm run build` generates **`dist/index.html`** with bundled JS/CSS paths.
- Do not edit `dist/index.html` by hand — changes are overwritten on the next build.
- After updating the root `index.html`, run `npm run build` to refresh `dist/index.html`.

## Build for Production

```bash
npm run build
npm run preview
```

## Customize

Update your personal info, social links, and project URLs in `src/lib/data.ts`.

Add your resume PDF to `public/resume.pdf` for the download button.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
