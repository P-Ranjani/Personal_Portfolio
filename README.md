# Personal Portfolio

A modern, professional, fully responsive portfolio web application built with React.js, featuring dark/light mode, smooth animations, and a clean component architecture.

## Tech Stack

- **React 19** — Functional components with hooks
- **Vite** — Fast build tool and dev server
- **React Router** — Client-side routing
- **Framer Motion** — Scroll reveal and UI animations
- **React Icons** — Icon library
- **CSS Modules** — Scoped, maintainable styling

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI (Navbar, Footer, ThemeToggle, etc.)
│   └── sections/        # Page sections (Hero, About, Skills, etc.)
├── context/             # React Context (Theme)
├── data/                # JSON data files (easy to customize)
├── hooks/               # Custom hooks (scroll spy)
├── styles/              # Global CSS and design tokens
├── utils/               # Form validation utilities
├── App.jsx              # Main application component
└── main.jsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone or navigate to the project
cd Personal_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

All portfolio content lives in `src/data/` JSON files:

| File | Content |
|------|---------|
| `personal.json` | Name, bio, social links, navigation |
| `skills.json` | Skill categories and proficiency levels |
| `projects.json` | Project cards with images and links |
| `experience.json` | Work experience timeline |
| `certifications.json` | Certificates and credentials |
| `education.json` | Academic background |
| `achievements.json` | Awards, hackathons, leadership |

Replace placeholder data with your own information. Update `index.html` meta tags for SEO.

Add your resume PDF to `public/resume.pdf` for the download button.

## Deployment

### Netlify

1. Push your code to GitHub.
2. Log in to [Netlify](https://netlify.com) and click **Add new site → Import an existing project**.
3. Connect your repository.
4. Build settings (auto-detected for Vite):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**.

For client-side routing, a `public/_redirects` file is included:

```
/*    /index.html   200
```

### Vercel

1. Push your code to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Framework preset: **Vite** (auto-detected).
5. Click **Deploy**.

Vercel handles SPA routing automatically for Vite projects.

## Features

- Mobile-first responsive design
- Dark / light mode toggle with persistence
- Sticky navbar with active section highlighting
- Smooth scrolling navigation
- Scroll reveal animations
- Animated skill progress bars
- Project filtering by technology
- Timeline layouts for experience and education
- Contact form with validation and notifications
- Loading screen
- Back-to-top button
- SEO-friendly HTML structure
- Accessible focus states and skip link

## Best Practices

- **Data separation:** Keep content in JSON files, not hardcoded in components.
- **Component reuse:** Common UI lives in `components/common/`.
- **CSS Modules:** Each component has its own scoped styles.
- **Design tokens:** Colors and spacing are defined in `styles/variables.css`.
- **Performance:** Lazy-loaded images, passive scroll listeners, `viewport={{ once: true }}` on animations.
- **Accessibility:** Semantic HTML, ARIA labels, form validation, keyboard navigation.

## License

MIT
