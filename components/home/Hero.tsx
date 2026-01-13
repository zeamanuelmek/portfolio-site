'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useTab } from '@/context/TabContext';

export function Hero() {
  const { openTab } = useTab();

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-plus-jakarta-sans">
            UX/UI Designer &{' '}
            <span className="text-teal-400">Product Thinker</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto"
          >
            Creating thoughtful digital experiences for users in Ethiopia and
            beyond
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => openTab({ title: 'OMOC', path: '/projects/omoc', closeable: true })}
              className="group px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105"
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => openTab({ title: 'About', path: '/about', closeable: true })}
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
