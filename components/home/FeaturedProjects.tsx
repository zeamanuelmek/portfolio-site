'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { getFeaturedProjects } from '@/lib/data/projects';

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-plus-jakarta-sans">
            Featured Work
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl">
            A selection of recent projects that showcase my approach to
            designing thoughtful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
