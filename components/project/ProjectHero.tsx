'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbs } from '@/lib/utils';
import type { Project } from '@/lib/data/projects';

interface ProjectHeroProps {
  project: Project;
}

const colorClasses = {
  teal: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const categoryLabels = {
  dashboard: 'Dashboard',
  'mobile-app': 'Mobile App',
  'web-app': 'Web App',
  'design-system': 'Design System',
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const breadcrumbs = generateBreadcrumbs(`/projects/${project.slug}`);

  return (
    <section className="relative bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm mb-8"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              )}
              <span
                className={
                  index === breadcrumbs.length - 1
                    ? 'text-white font-medium'
                    : 'text-zinc-500 hover:text-zinc-400 transition-colors'
                }
              >
                {crumb.label}
              </span>
            </div>
          ))}
        </motion.nav>

        {/* Header Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Category Badge */}
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-6 ${
                colorClasses[project.color]
              }`}
            >
              {categoryLabels[project.category]}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-plus-jakarta-sans">
              {project.title}
            </h1>

            {/* Overview */}
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              {project.overview}
            </p>
          </motion.div>

          {/* Key Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8"
          >
            <div className="space-y-6">
              {/* Role */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Role
                </h3>
                <p className="text-white font-medium">{project.role}</p>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Timeline
                </h3>
                <p className="text-white font-medium">{project.timeline}</p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
