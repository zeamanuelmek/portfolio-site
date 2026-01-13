'use client';

import { useRef, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTab } from '@/context/TabContext';
import { cn } from '@/lib/utils';

interface TabBarProps {
  onMenuClick?: () => void;
}

export default function TabBar({ onMenuClick }: TabBarProps) {
  const { tabs, activeTabId, setActiveTab, closeTab } = useTab();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active tab
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.querySelector(`[data-tab-id="${activeTabId}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTabId]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleCloseClick = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    closeTab(tabId);
  };

  return (
    <div className="h-12 bg-zinc-900 border-b border-zinc-800 flex items-center">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="md:hidden flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Tabs Container */}
      <div
        ref={scrollRef}
        className="flex-1 flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <motion.button
              key={tab.id}
              data-tab-id={tab.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                'relative flex items-center gap-2 px-4 h-12 text-sm whitespace-nowrap transition-colors flex-shrink-0',
                isActive
                  ? 'text-zinc-100 bg-zinc-950'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
              )}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
            >
              <span className="max-w-[150px] truncate">{tab.title}</span>

              {tab.closeable && (
                <button
                  onClick={(e) => handleCloseClick(e, tab.id)}
                  className="flex items-center justify-center w-5 h-5 rounded hover:bg-zinc-700 transition-colors"
                  aria-label={`Close ${tab.title} tab`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-teal"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
