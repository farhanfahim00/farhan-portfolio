# Farhan Fahim Taimoor — Portfolio

An interactive, hand-drawn portfolio built as a scroll-driven journey. Instead of a traditional list of projects and experience, a walking character travels along a sketchbook-style path, stopping at milestones that open into project cards, work history, and skills.

**Live site:** https://farhanfahim00.github.io/farhan-portfolio/

## Concept

The site is built around three journeys, switchable from the top nav:

- **Projects** — a walk through personal and academic projects, most recent first, each with a description, tech stack, and GitHub link
- **Work Experience** — a walk through jobs and freelance work
- **Skills** — a static grid, since skills don't fit a chronological "journey" the way projects and jobs do

Scrolling moves the character forward along the path. Reaching a milestone pauses the walk and pops open a card with details. Reaching the end of any journey opens a closing card with resume download, email, and LinkedIn links.

Clicking the character opens a personal info panel with an About tab and a Contact tab.

## Tech stack

- **React + Vite** — app framework and build tool
- **Framer Motion** — scroll-linked animation, milestone reveal, page-load sequencing
- **Tailwind CSS v4** — styling, theme tokens for the color palette and fonts
- **Google Fonts** — Caveat and Patrick Hand for the handwritten look
- **gh-pages** — deployment to GitHub Pages

## Design system

- Warm off-white "paper" background with a hand-drawn, crayon/colored-pencil aesthetic throughout
- Custom-drawn walking character (5-frame sprite animation) tied to scroll position, not a timer
- Hand-drawn SVG flags, clouds, birds, and a Munich skyline background layer, all parallax-scrolled at different speeds for depth
- Custom hand-drawn cursor on interactive elements

## Project structure

```
src/
  components/       # UI components (JourneyPath, WalkingFigure, ProjectCard, etc.)
  data/             # Content: journeyData.js, workData.js, skillsData.js
  assets/           # Walk-cycle frames, milestone thumbnails, decorations
public/
  resume.pdf        # Downloadable resume
  favicon.png       # Browser tab icon
  og-image.png      # Social share preview image
```

## Running locally

```bash
npm install
npm run dev
```

## Deploying

```bash
npm run deploy
```

Builds the project and publishes the `dist` folder to the `gh-pages` branch, which GitHub Pages serves automatically.

## Notes

- Content (projects, work history, skills) lives in plain JS data files under `src/data/`, not hardcoded in components, so updating the site's content doesn't require touching component logic.
- Mobile responsiveness has not yet been implemented; the site is currently designed and tested for desktop viewports.
