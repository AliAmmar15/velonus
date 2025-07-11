'use client';

import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { ActivityBar, ActivityView } from './ActivityBar';
import { FileExplorer } from './FileExplorer';
import { FileTabs } from './FileTabs';
import { StatusBar } from './StatusBar';

interface VSCodeLayoutProps {
  children: React.ReactNode;
}

export function VSCodeLayout({ children }: VSCodeLayoutProps) {
  const [activeView, setActiveView] = useState<ActivityView>('explorer');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [panelVisible, setPanelVisible] = useState(false);
  const [openFiles, setOpenFiles] = useState<Array<{ name: string; path: string; modified?: boolean }>>([
    { name: 'index.tsx', path: 'src/index.tsx', modified: false },
    { name: 'App.tsx', path: 'src/App.tsx', modified: true },
    { name: 'utils.ts', path: 'src/utils.ts', modified: false }
  ]);
  const [activeFile, setActiveFile] = useState(0);

  const handleCloseFile = (index: number) => {
    setOpenFiles(prev => prev.filter((_, i) => i !== index));
    if (activeFile >= index && activeFile > 0) {
      setActiveFile(activeFile - 1);
    }
  };

  return (
    <div className="h-screen flex bg-glass-bg text-glass-text overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-glass-accent-primary/5 via-transparent to-glass-accent-secondary/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-glass-accent-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glass-accent-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Activity Bar */}
      <div className="relative z-10">
        <ActivityBar 
          activeView={activeView} 
          onViewChange={setActiveView}
          onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
          sidebarVisible={sidebarVisible}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex relative z-10">
        <PanelGroup direction="horizontal">
          {/* Sidebar */}
          {sidebarVisible && (
            <>
              <Panel defaultSize={20} minSize={15} maxSize={40}>
                <div className="h-full layout-sidebar">
                  <div className="h-8 flex items-center px-4 text-xs font-medium text-glass-textSecondary border-b border-glass-border backdrop-blur-md">
                    {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
                  </div>
                  <div className="flex-1 overflow-auto">
                    {activeView === 'explorer' && <FileExplorer />}
                    {activeView === 'search' && (
                      <div className="p-4">
                        <input 
                          type="text" 
                          placeholder="Search files..." 
                          className="glass-input w-full mb-4"
                        />
                        <div className="text-glass-textSecondary text-sm">No results</div>
                      </div>
                    )}
                    {activeView === 'git' && (
                      <div className="p-4">
                        <div className="text-glass-textSecondary text-sm mb-4">Source Control</div>
                        <div className="space-y-2">
                          <div className="glass-surface p-3 rounded-lg">
                            <div className="text-glass-success text-sm">✓ All changes committed</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeView === 'debug' && (
                      <div className="p-4">
                        <div className="text-glass-textSecondary text-sm mb-4">Run and Debug</div>
                        <div className="glass-button w-full text-center py-2">
                          Start Debugging
                        </div>
                      </div>
                    )}
                    {activeView === 'extensions' && (
                      <div className="p-4">
                        <div className="text-glass-textSecondary text-sm mb-4">Extensions</div>
                        <div className="space-y-3">
                          {['Prettier', 'ESLint', 'GitLens'].map((ext) => (
                            <div key={ext} className="glass-surface p-3 rounded-lg">
                              <div className="text-glass-text text-sm font-medium">{ext}</div>
                              <div className="text-glass-textMuted text-xs">Installed</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle className="w-0.5 bg-glass-border hover:bg-glass-borderActive transition-colors" />
            </>
          )}

          {/* Editor Area */}
          <Panel defaultSize={sidebarVisible ? 60 : 80}>
            <PanelGroup direction="vertical">
              {/* Editor */}
              <Panel defaultSize={panelVisible ? 70 : 100}>
                <div className="h-full flex flex-col layout-editor">
                  {/* File Tabs */}
                  <FileTabs 
                    files={openFiles}
                    activeFile={activeFile}
                    onFileSelect={setActiveFile}
                    onFileClose={handleCloseFile}
                  />
                  
                  {/* Editor Content */}
                  <div className="flex-1 min-h-0 relative">
                    <div className="absolute inset-0 backdrop-blur-md">
                      {children}
                    </div>
                  </div>
                </div>
              </Panel>

              {/* Bottom Panel */}
              {panelVisible && (
                <>
                  <PanelResizeHandle className="h-0.5 bg-glass-border hover:bg-glass-borderActive transition-colors" />
                  <Panel defaultSize={30} minSize={20} maxSize={60}>
                    <div className="h-full layout-panel">
                      <div className="h-8 flex items-center px-4 text-xs font-medium text-glass-textSecondary border-b border-glass-border">
                        <div className="flex space-x-4">
                          <button className="text-glass-accent-primary">Terminal</button>
                          <button className="text-glass-textSecondary hover:text-glass-text">Output</button>
                          <button className="text-glass-textSecondary hover:text-glass-text">Problems</button>
                        </div>
                      </div>
                      <div className="flex-1 p-4 overflow-auto">
                        <div className="font-mono text-sm">
                          <div className="text-glass-accent-secondary">$ npm run dev</div>
                          <div className="text-glass-success">✓ Ready in 2.3s</div>
                          <div className="text-glass-textSecondary">Local: http://localhost:3000</div>
                        </div>
                      </div>
                    </div>
                  </Panel>
                </>
              )}
            </PanelGroup>
          </Panel>

          {/* Right Panel (Optional) */}
          {false && (
            <>
              <PanelResizeHandle className="w-0.5 bg-glass-border hover:bg-glass-borderActive transition-colors" />
              <Panel defaultSize={20} minSize={15} maxSize={40}>
                <div className="h-full layout-sidebar">
                  <div className="p-4">
                    <div className="text-glass-textSecondary text-sm">Right Panel</div>
                  </div>
                </div>
              </Panel>
            </>
          )}
        </PanelGroup>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <StatusBar 
          onTogglePanel={() => setPanelVisible(!panelVisible)}
          panelVisible={panelVisible}
        />
      </div>
    </div>
  );
} 