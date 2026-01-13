'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Home, User, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTab } from '@/context/TabContext';
import { cn } from '@/lib/utils';

interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

interface ProjectLink extends NavLink {
  color: string;
  subProjects?: NavLink[];
}

const STORAGE_KEY = 'sidebar-collapsed';

export default function Sidebar() {
  const { openTab } = useTab();
  const pathname = usePathname();
  const [featuredWorkExpanded, setFeaturedWorkExpanded] = useState(true);
  const [omocExpanded, setOmocExpanded] = useState(false);

  // Load collapsed state from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const state = JSON.parse(stored);
        setFeaturedWorkExpanded(state.featuredWork ?? true);
        setOmocExpanded(state.omoc ?? false);
      }
    } catch (error) {
      console.error('Failed to load sidebar state:', error);
    }
  }, []);

  // Save collapsed state to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ featuredWork: featuredWorkExpanded, omoc: omocExpanded })
      );
    } catch (error) {
      console.error('Failed to save sidebar state:', error);
    }
  }, [featuredWorkExpanded, omocExpanded]);

  const projects: ProjectLink[] = [
    {
      title: 'OMOC',
      path: '/projects/omoc',
      color: 'accent-teal',
      subProjects: [
        { title: 'Dashboard', path: '/projects/omoc/dashboard' },
        { title: 'Analytics', path: '/projects/omoc/analytics' },
        { title: 'Reports', path: '/projects/omoc/reports' },
        { title: 'Settings', path: '/projects/omoc/settings' },
        { title: 'User Management', path: '/projects/omoc/users' },
        { title: 'API Integration', path: '/projects/omoc/api' },
      ],
    },
    {
      title: 'Hisab',
      path: '/projects/hisab',
      color: 'accent-purple',
    },
    {
      title: 'DH App',
      path: '/projects/dh-app',
      color: 'accent-blue',
    },
  ];

  const socialLinks = [
    { title: 'LinkedIn', path: 'https://linkedin.com', icon: <Linkedin className="w-4 h-4" /> },
    { title: 'Dribbble', path: 'https://dribbble.com', icon: <div className="w-4 h-4 rounded-full bg-text-secondary" /> },
    { title: 'GitHub', path: 'https://github.com', icon: <Github className="w-4 h-4" /> },
  ];

  const handleNavClick = (path: string, title: string) => {
    openTab({ title, path, closeable: true });
  };

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="hidden md:flex w-[260px] bg-zinc-950 border-r border-zinc-800 flex-col">
      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-lg font-semibold text-zinc-100">Zeamanuel Ayele</h1>
        <p className="text-sm text-zinc-400 mt-1">UX/UI Designer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4" aria-label="Main navigation">
        {/* Home */}
        <button
          onClick={() => handleNavClick('/', 'Home')}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
            isActive('/')
              ? 'bg-zinc-800 text-zinc-100'
              : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
          )}
          aria-current={isActive('/') ? 'page' : undefined}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>

        {/* About */}
        <button
          onClick={() => handleNavClick('/about', 'About')}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors mt-1',
            isActive('/about')
              ? 'bg-zinc-800 text-zinc-100'
              : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
          )}
          aria-current={isActive('/about') ? 'page' : undefined}
        >
          <User className="w-4 h-4" />
          <span>About</span>
        </button>

        {/* Featured Work */}
        <div className="mt-6">
          <button
            onClick={() => setFeaturedWorkExpanded(!featuredWorkExpanded)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
            aria-expanded={featuredWorkExpanded}
            aria-label="Toggle Featured Work section"
          >
            <span>Featured Work</span>
            {featuredWorkExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {featuredWorkExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-1 space-y-1">
                  {projects.map((project) => (
                    <div key={project.path}>
                      <button
                        onClick={() => {
                          handleNavClick(project.path, project.title);
                          if (project.subProjects && project.title === 'OMOC') {
                            setOmocExpanded(!omocExpanded);
                          }
                        }}
                        className={cn(
                          'w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                          isActive(project.path)
                            ? 'bg-zinc-800 text-zinc-100'
                            : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
                        )}
                        aria-current={isActive(project.path) ? 'page' : undefined}
                      >
                        <div className="flex items-center gap-2">
                          <div className={cn('w-2 h-2 rounded-full', `bg-${project.color}`)} />
                          <span>{project.title}</span>
                        </div>
                        {project.subProjects && (
                          omocExpanded ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronRight className="w-3 h-3" />
                          )
                        )}
                      </button>

                      {/* Sub-projects for OMOC */}
                      {project.subProjects && project.title === 'OMOC' && (
                        <AnimatePresence initial={false}>
                          {omocExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-1"
                            >
                              {project.subProjects.map((subProject) => (
                                <button
                                  key={subProject.path}
                                  onClick={() => handleNavClick(subProject.path, subProject.title)}
                                  className={cn(
                                    'w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors',
                                    isActive(subProject.path)
                                      ? 'bg-zinc-800 text-zinc-100'
                                      : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-100'
                                  )}
                                  aria-current={isActive(subProject.path) ? 'page' : undefined}
                                >
                                  {subProject.title}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Links */}
        <div className="mt-6">
          <h3 className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Links
          </h3>
          <div className="mt-1 space-y-1">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
              >
                {link.icon}
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
