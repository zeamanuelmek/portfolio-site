'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, User, Briefcase, Mail } from 'lucide-react';
import { useTab } from '@/context/TabContext';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { activeTabId, openTab } = useTab();

  const handleNavClick = (item: typeof navigationItems[0]) => {
    openTab({
      title: item.label,
      path: item.id === 'home' ? '/' : item.id === 'about' ? '/about' : `/${item.id}`,
      closeable: item.id !== 'home',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-[280px] bg-zinc-950 border-r border-zinc-800 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTabId.includes(item.id);

                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-teal-500/10 text-teal-400'
                            : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-800">
              <p className="text-sm text-zinc-500">
                © 2026 Zeamanuel Anteneh
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
