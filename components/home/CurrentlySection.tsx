'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Briefcase } from 'lucide-react';

const currentActivities = [
  {
    id: 'teaching',
    icon: GraduationCap,
    title: 'Teaching',
    description: 'Teaching UX/UI at Addis Ababa University',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'Building',
    description: 'Building with AI-augmented workflows',
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
  },
  {
    id: 'freelance',
    icon: Briefcase,
    title: 'Available',
    description: 'Available for freelance projects',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
];

export function CurrentlySection() {
  return (
    <section className="px-6 py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-plus-jakarta-sans">
            Currently
          </h2>
          <p className="text-xl text-zinc-400">
            What I&apos;m up to these days
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${activity.bgColor} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${activity.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
