'use client';

import { TabProvider } from '@/context/TabContext';
import Sidebar from './Sidebar';
import TabBar from './TabBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <TabProvider>
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Sidebar - Desktop only */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tab Bar */}
          <TabBar />

          {/* Page Content */}
          <main className="flex-1 overflow-auto bg-zinc-950">
            {children}
          </main>
        </div>
      </div>
    </TabProvider>
  );
}
