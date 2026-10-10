<div align="center">

# Abdulrahman Emad

**QA & Automation Engineer** — Manual, API, SQL, Selenium/Java

Portfolio website · Cairo, Egypt

[**Live site**](https://abdoemad-portofolio.lovable.app) · [Download CV](public/CV_Abdulrahman_Emad.pdf) · [LinkedIn](https://www.linkedin.com/in/abdulrahmanemadfathy) · [Email](mailto:abdoemadfathy1@gmail.com)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-animation-0055FF?logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)

![Portfolio hero in dark mode](docs/screenshots/hero-dark.png)

</div>

## About

A personal portfolio that presents my software quality assurance work: projects, experience, skills, and a way to get in touch. The site is built to be fast, accessible, and easy to maintain, with all content kept in one data file.

The hero shows a short animated test run that passes line by line, a small nod to the work behind the site.

## Highlights

- **Light and dark themes.** Follows the system preference by default, with a toggle in the header.
- **Considered motion.** One orchestrated hero sequence, spring-based hover and press feedback, and an expanding project list. Motion tokens live in one file, and the `prefers-reduced-motion` setting is respected.
- **Content separated from UI.** Profile, projects, skills, and experience live in `src/data/portfolioData.ts` with matching types, so updating the site never means editing components.
- **Responsive and accessible.** Works from 360 px phones to wide desktops, with visible keyboard focus, semantic landmarks, and accessible names on icon buttons.
- **Working contact form** through EmailJS, plus a copy-email shortcut and a WhatsApp link.
- **Search and share ready.** Metadata in `index.html` and React Helmet, a generated sitemap, and a share-sized portrait for social previews.

<table>
  <tr>
    <td><img src="docs/screenshots/hero-light.png" alt="Hero in light mode" /></td>
    <td><img src="docs/screenshots/projects-dark.png" alt="Projects section in dark mode" /></td>
  </tr>
  <tr>
    <td align="center">Light theme</td>
    <td align="center">Projects, expandable rows</td>
  </tr>
</table>

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui primitives, CSS variable design tokens |
| Motion | Framer Motion |
| Theming | next-themes |
| Typography | Bricolage Grotesque, Hanken Grotesk, JetBrains Mono (self-hosted via Fontsource) |
| Forms | EmailJS |
| SEO | React Helmet Async, generated `sitemap.xml` |

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer and npm.

```bash
git clone https://github.com/abdoemadfathy/abdoemad-portofolio.git
cd abdoemad-portofolio
npm install
npm run dev
```

The dev server runs at <http://localhost:8080>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the sitemap and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── components/
│   ├── common/          Shared building blocks: Section, Reveal, icons
│   ├── projects/        Expandable project row
│   ├── ui/              shadcn/ui primitives
│   ├── Hero.tsx         Headline and animated test-run panel
│   ├── About.tsx        Intro, numbers, and what I offer
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/
│   └── portfolioData.ts All site content (profile, projects, skills, ...)
├── types/
│   └── portfolio.ts     Types for the content above
├── lib/
│   └── motion.ts        Motion tokens, variants, and gesture presets
├── styles/
│   └── theme.css        Light and dark design tokens
└── pages/
    └── Index.tsx        Page composition and page metadata
```

## Updating the content

Almost everything you read on the site comes from [`src/data/portfolioData.ts`](src/data/portfolioData.ts).

- **Add a project:** add an object to the `projects` array. `category` controls the label, and `repoUrl` is optional.
- **Change contact details or links:** edit the `profile` object.
- **Change skills, services, or experience:** edit `skillGroups`, `services`, or `experience`.
- **Replace the CV:** overwrite `public/CV_Abdulrahman_Emad.pdf`.

## Design and motion

- **Colors** are HSL tokens in [`src/styles/theme.css`](src/styles/theme.css), defined for both light and dark. Change a token once and the whole site follows.
- **Motion** is defined in [`src/lib/motion.ts`](src/lib/motion.ts): a soft ease-out for entrances, springs for interaction, a 0.08 s stagger between siblings, and a 15 px reveal distance. Animations run once and never loop.
- **Reduced motion** is honored globally through Framer Motion's `MotionConfig`.

## Deployment

The site is a static Vite build, so it can be hosted anywhere that serves static files.

1. Run `npm run build`.
2. Publish the `dist/` folder, or connect the repository to a host such as Vercel, Netlify, or Cloudflare Pages with `npm run build` as the build command and `dist` as the output directory.

The current live site is published through [Lovable](https://lovable.dev), which stays in sync with the `main` branch of this repository.

## Contact

**Abdulrahman Emad**, QA & Automation Engineer, Cairo, Egypt

- Email: [abdoemadfathy1@gmail.com](mailto:abdoemadfathy1@gmail.com)
- Phone and WhatsApp: [+20 112 699 8251](https://wa.me/201126998251)
- LinkedIn: [abdulrahmanemadfathy](https://www.linkedin.com/in/abdulrahmanemadfathy)
- GitHub: [abdoemadfathy](https://github.com/abdoemadfathy)
