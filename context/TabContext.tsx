'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export interface Tab {
  id: string;
  title: string;
  path: string;
  closeable: boolean;
}

interface TabContextType {
  tabs: Tab[];
  activeTabId: string;
  openTab: (tab: Omit<Tab, 'id'>) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-tabs';
const MAX_TABS = 5;

const HOME_TAB: Tab = {
  id: 'home',
  title: 'Home',
  path: '/',
  closeable: false,
};

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([HOME_TAB]);
  const [activeTabId, setActiveTabId] = useState<string>('home');
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Load tabs from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedTabs: Tab[] = JSON.parse(stored);

        // Always ensure Home tab is first
        const filteredTabs = parsedTabs.filter((tab) => tab.id !== 'home');
        const validTabs = [HOME_TAB, ...filteredTabs.slice(0, MAX_TABS - 1)];

        setTabs(validTabs);

        // Set active tab based on current pathname
        const currentTab = validTabs.find((tab) => tab.path === pathname);
        if (currentTab) {
          setActiveTabId(currentTab.id);
        }
      }
    } catch (error) {
      console.error('Failed to load tabs from localStorage:', error);
      localStorage.removeItem(STORAGE_KEY);
    }

    setIsInitialized(true);
  }, [pathname]);

  // Save tabs to localStorage whenever they change
  useEffect(() => {
    if (!isInitialized || typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs));
    } catch (error) {
      console.error('Failed to save tabs to localStorage:', error);
    }
  }, [tabs, isInitialized]);

  const openTab = useCallback(
    (newTab: Omit<Tab, 'id'>) => {
      // Check if tab already exists
      const existingTab = tabs.find((tab) => tab.path === newTab.path);

      if (existingTab) {
        // Tab exists, just activate it
        setActiveTabId(existingTab.id);
        router.push(existingTab.path);
        return;
      }

      // Generate unique ID
      const id = `tab-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const tab: Tab = { ...newTab, id };

      setTabs((prevTabs) => {
        let newTabs = [...prevTabs, tab];

        // Enforce max tabs limit (keep Home + newest tabs)
        if (newTabs.length > MAX_TABS) {
          // Remove oldest closeable tab
          const closeableIndex = newTabs.findIndex((t) => t.closeable);
          if (closeableIndex !== -1) {
            newTabs.splice(closeableIndex, 1);
          }
        }

        return newTabs;
      });

      setActiveTabId(id);
      router.push(tab.path);
    },
    [tabs, router]
  );

  const closeTab = useCallback(
    (id: string) => {
      const tabToClose = tabs.find((tab) => tab.id === id);

      // Don't close Home tab
      if (!tabToClose || !tabToClose.closeable) return;

      setTabs((prevTabs) => {
        const newTabs = prevTabs.filter((tab) => tab.id !== id);

        // If closing active tab, switch to adjacent tab
        if (id === activeTabId) {
          const closedIndex = prevTabs.findIndex((tab) => tab.id === id);
          const nextTab =
            prevTabs[closedIndex + 1] || prevTabs[closedIndex - 1] || HOME_TAB;

          setActiveTabId(nextTab.id);
          router.push(nextTab.path);
        }

        return newTabs;
      });
    },
    [tabs, activeTabId, router]
  );

  const setActiveTabFn = useCallback(
    (id: string) => {
      const tab = tabs.find((t) => t.id === id);
      if (tab) {
        setActiveTabId(id);
        router.push(tab.path);
      }
    },
    [tabs, router]
  );

  return (
    <TabContext.Provider
      value={{
        tabs,
        activeTabId,
        openTab,
        closeTab,
        setActiveTab: setActiveTabFn,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
}
