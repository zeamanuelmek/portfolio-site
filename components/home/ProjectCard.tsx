'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useTab } from '@/context/TabContext';
import type { Project } from '@/lib/data/projects';

interface ProjectCardProps {
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

export function ProjectCard({ project }: ProjectCardProps) {
  const { openTab } = useTab();

  const handleClick = () => {
    openTab({
      title: project.title,
      path: `/projects/${project.slug}`,
      closeable: true,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group cursor-pointer bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
              colorClasses[project.color]
            }`}
          >
            {categoryLabels[project.category]}
          </span>
          <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors font-plus-jakarta-sans">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tags */}
        {project.tools && project.tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                +{project.tools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
