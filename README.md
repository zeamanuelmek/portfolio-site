# Zeamanuel Ayele - Portfolio Website

A Notion-inspired portfolio website showcasing UX/UI design work with an innovative tab-based navigation system.

## Features

- **Tab System**: Navigate between pages with persistent tabs (max 5 tabs, stored in localStorage)
- **Sidebar Navigation**: Collapsible sidebar with project categorization
- **Mobile Responsive**: Drawer navigation for mobile devices
- **Dark Theme**: Custom dark theme with beautiful animations
- **Project Showcase**: Dynamic project pages with image galleries and lightbox
- **About Page**: Personal bio, skills, experience, and contact information

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd /home/zeamanuel/Portfolio/portfolio-site
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-site/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with MainLayout
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   └── projects/[slug]/     # Dynamic project pages
├── components/
│   ├── layout/              # Layout components (Sidebar, TabBar, MobileDrawer)
│   ├── home/                # Homepage components (Hero, ProjectCard, etc.)
│   ├── project/             # Project page components (Gallery, Lightbox, etc.)
│   └── ui/                  # Reusable UI components
├── context/
│   └── TabContext.tsx       # Tab management with localStorage
├── lib/
│   ├── utils.ts             # Utility functions
│   └── data/
│       └── projects.ts      # Project data and types
└── public/
    └── projects/omoc/       # OMOC project screenshots (6 images)
```

## Customization Guide

### 1. Add Your Project Content

Edit `/home/zeamanuel/Portfolio/portfolio-site/lib/data/projects.ts`:

- Update OMOC project with detailed case study content
- Add Hisab and DH App project details
- Add more projects as needed
- Upload images to `/public/projects/`

### 2. Update About Page

Edit `/home/zeamanuel/Portfolio/portfolio-site/app/about/page.tsx`:

- Update bio and introduction
- Add your real work experience
- Update skills and tools
- Add your email, LinkedIn, GitHub links
- Upload and link your resume PDF

### 3. Customize Homepage

Edit `/home/zeamanuel/Portfolio/portfolio-site/components/home/Hero.tsx` and `CurrentlySection.tsx`:

- Update hero text
- Change "Currently" section activities

## Deployment to Vercel

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create GitHub repo
gh repo create portfolio-site --public --source=. --remote=origin
git push -u origin main

# Deploy
npm i -g vercel
vercel --prod
```

## Key Features

### Tab System
- Home tab always open (cannot close)
- Max 5 tabs (auto-closes oldest)
- Persists in localStorage
- Click sidebar items to open in tabs

### Sidebar Navigation
- Collapsible sections (state saved)
- Color-coded projects
- Active state highlighting
- Smooth Framer Motion animations

### Mobile Responsive
- Breakpoint: 768px
- Drawer navigation
- Touch-friendly

## Commands

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - Lint code

## Next Steps

1. ✅ Test locally at http://localhost:3000
2. Add your real content (projects, bio, images)
3. Customize colors in `tailwind.config.ts`
4. Deploy to Vercel
5. Share your portfolio!

## Support

Built with Next.js 14, TypeScript, and Tailwind CSS
