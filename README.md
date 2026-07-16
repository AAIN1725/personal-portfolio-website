# Personal Portfolio Website

A responsive personal portfolio built with React, TypeScript, Tailwind CSS, and Vite.
Built as Project 1 of the Module 12 Mini Project Series — Vibe Coding with Claude + Cursor.

## Live Demo

<!-- Replace with your Vercel URL after deployment -->
_Deploy to Vercel and add the URL here._

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 3 |
| Build | Vite 8 |
| Testing | Vitest + React Testing Library |
| Deployment | Vercel |

## Project Structure

```
src/
├── components/
│   ├── Header/       # Sticky nav bar with section links
│   ├── Hero/         # Name, role, tagline, CTA buttons
│   ├── About/        # Bio, location, open-to-work badge
│   ├── Projects/     # Project cards grid (title, description, tech tags, links)
│   ├── Skills/       # Skills grid with Advanced / Intermediate badges
│   ├── Contact/      # Email CTA section
│   └── Footer/       # Copyright and tech stack credit
├── data/
│   └── portfolio.ts  # Single source of truth — edit this to personalise the site
└── test/
    └── setup.ts      # Vitest + jest-dom global setup
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Production build
npm run build
```

## Personalising the Site

All content is driven from a single file: [src/data/portfolio.ts](src/data/portfolio.ts)

Edit the exported `portfolio` object to update:
- Name, role, tagline, and bio
- Email and location
- Social links (GitHub, LinkedIn, etc.)
- Projects list (title, description, tech stack, live URL, repo URL)
- Skills list (name, category, proficiency 1–100)

No other files need to be changed for content updates.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub.
3. Vercel auto-detects Vite — click **Deploy**.
4. Your site is live at `https://your-project.vercel.app` in under 2 minutes.

## Tests

Tests live alongside each component (`*.test.tsx`) and the data file (`portfolio.test.ts`).

| Test file | What it covers |
|---|---|
| `Header.test.tsx` | Nav links, hrefs, accessible landmark |
| `Hero.test.tsx` | Heading, role, tagline, CTA links |
| `About.test.tsx` | Bio, location, open-to-work badge |
| `Projects.test.tsx` | Card rendering, tech tags, conditional live link |
| `Skills.test.tsx` | Skill names, Advanced/Intermediate badge logic |
| `Contact.test.tsx` | Mailto link correctness |
| `Footer.test.tsx` | Copyright year, owner name |
| `portfolio.test.ts` | Data integrity — email format, unique IDs, proficiency range |

## Module 12 Assignment

This project fulfils the **Project 1 (Personal Portfolio Website)** requirement from the
Vibe Coding with Claude + Cursor — Module 12 Mini Project Series.

- Stack: React · TypeScript · Tailwind CSS · Vite · Vercel
- Level: Beginner
- Time: ~45 minutes
