'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'alt';
}

export function ProjectSection({
  title,
  children,
  variant = 'default',
}: ProjectSectionProps) {
  const bgColor = variant === 'alt' ? 'bg-zinc-950' : 'bg-zinc-900';

  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-plus-jakarta-sans">
              {title}
            </h2>
          )}
          <div className="text-zinc-300 leading-relaxed">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
