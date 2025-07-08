'use client';

import { useState } from 'react';

export default function DemoPage() {
  const [userRole, setUserRole] = useState<string>('driver');
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="h-screen bg-editor-bg">
      {/* Header - Glass morphism */}
      <div className="backdrop-blur-md bg-glass-bg border-b border-glass-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-editor-text">Velonus Editor Demo</h1>
          <div className="text-sm text-editor-textSecondary font-mono">
            Session: demo-session
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-editor-textSecondary font-mono">
            User: demo-user
          </div>
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="text-sm border border-editor-border rounded-lg px-3 py-1.5 bg-editor-bgSecondary text-editor-text focus:outline-none focus:ring-2 focus:ring-editor-accent focus:ring-opacity-50 transition-all"
          >
            <option value="driver">🚗 Driver</option>
            <option value="navigator">🧭 Navigator</option>
            <option value="observer">👀 Observer</option>
            <option value="ai">🤖 AI Assistant</option>
          </select>
          <button
            onClick={() => setIsConnected(!isConnected)}
            className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-all hover:scale-105 ${
              isConnected 
                ? 'bg-editor-success/20 text-editor-success border border-editor-success/30' 
                : 'bg-editor-error/20 text-editor-error border border-editor-error/30'
            }`}
          >
            <span className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-editor-success animate-pulse' : 'bg-editor-error'}`}></div>
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </button>
        </div>
      </div>

      {/* Editor Mock */}
      <div className="h-[calc(100vh-64px)] bg-editor-bg">
                 {/* Toolbar - Sticky Action Bar */}
         <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-editor-bg/95 backdrop-blur-sm border-b border-editor-border">
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-editor-accent rounded-full animate-cursor-pulse"></div>
               <div className="text-editor-text font-medium font-mono">
                 demo-session
               </div>
             </div>
             <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-editor-bgSecondary/60">
               <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
               <span className="text-editor-textSecondary text-sm font-mono">typescript</span>
             </div>
             <div className="flex items-center gap-2 text-sm">
               <div className="w-2 h-2 bg-editor-success rounded-full"></div>
               <span className="text-editor-success font-medium">Can Edit</span>
             </div>
           </div>

           {/* Participants with neon outlines */}
           <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-editor-bgSecondary border border-roles-driver/30 hover:border-roles-driver/60 transition-all">
               <div className="w-3 h-3 rounded-full bg-roles-driver shadow-lg shadow-roles-driver/50"></div>
               <span className="text-xs text-editor-text font-mono">demo-user</span>
               <div className="text-xs text-roles-driver font-medium">Driver</div>
             </div>
           </div>

           {/* Action buttons with modern styling */}
           <div className="flex items-center gap-3">
             <button className="px-4 py-2 text-sm rounded-xl bg-editor-bgSecondary text-editor-text hover:bg-editor-border hover:scale-105 transition-all duration-200 border border-editor-border/50 hover:border-editor-accent/30 font-medium">
               💾 Save
             </button>
             <button className="px-4 py-2 text-sm rounded-xl bg-editor-accent/10 text-editor-accent hover:bg-editor-accent/20 hover:scale-105 transition-all duration-200 border border-editor-accent/30 font-medium">
               🌿 Branch
             </button>
           </div>
         </div>

        {/* Monaco Editor Placeholder */}
        <div className="flex-1 bg-editor-bg text-editor-text p-4 font-mono text-sm">
          <div className="mb-4">
            <span className="text-editor-textSecondary">// Welcome to Velonus Collaborative Editor!</span>
          </div>
          <div className="mb-2">
            <span className="text-purple-400">import</span>{' '}
            <span className="text-orange-400">{`{ CollaborativeEditor }`}</span>{' '}
            <span className="text-purple-400">from</span>{' '}
            <span className="text-green-400">'@velonus/editor'</span>;
          </div>
          <div className="mb-4">
            <span className="text-purple-400">import</span>{' '}
            <span className="text-orange-400">{`{ SessionRole }`}</span>{' '}
            <span className="text-purple-400">from</span>{' '}
            <span className="text-green-400">'@velonus/shared'</span>;
          </div>
                     <div className="mb-2">
             <span className="text-purple-400">function</span>{' '}
             <span className="text-blue-400">EditorPage</span>() {'{'}
           </div>
           <div className="ml-4 mb-2">
             <span className="text-purple-400">return</span> (
           </div>
                                <div className="ml-8 mb-2">
             &lt;<span className="text-red-400">CollaborativeEditor</span>
           </div>
           <div className="ml-12 text-editor-textSecondary">
             sessionId=<span className="text-green-400">&quot;session-123&quot;</span>
           </div>
           <div className="ml-12 text-editor-textSecondary">
             userId=<span className="text-green-400">&quot;user-456&quot;</span>
           </div>
           <div className="ml-12 text-editor-textSecondary">
             userRole=<span className="text-green-400">&quot;{userRole}&quot;</span>
           </div>
           <div className="ml-12 text-editor-textSecondary">
             language=<span className="text-green-400">&quot;typescript&quot;</span>
           </div>
           <div className="ml-8 mb-2">/&gt;</div>
                     <div className="ml-4 mb-2">);</div>
           <div>{'}'}</div>
          
          <div className="mt-8 text-editor-textSecondary">
            <div>// Real-time collaboration features:</div>
            <div>// ✅ CRDT-based conflict resolution</div>
            <div>// ✅ Live cursor tracking</div>
            <div>// ✅ Role-based permissions</div>
            <div>// ✅ WebSocket synchronization</div>
            <div>// ✅ Monaco Editor integration</div>
          </div>
        </div>

                 {/* Status Bar - GitHub Issues Style */}
         <div className="flex items-center justify-between px-4 py-3 bg-editor-bgSecondary/80 backdrop-blur-sm border-t border-editor-border text-sm">
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <div className={`w-2 h-2 rounded-full animate-pulse ${isConnected ? 'bg-editor-success shadow-lg shadow-editor-success/50' : 'bg-editor-error shadow-lg shadow-editor-error/50'}`}></div>
               <span className="text-editor-textSecondary font-mono">
                 {isConnected ? 'Real-time sync active' : 'Disconnected from session'}
               </span>
             </div>

             <div className="flex items-center gap-3">
               <div className={`flex items-center gap-2 px-2 py-1 rounded-lg border ${
                 userRole === 'driver' ? 'bg-roles-driver/10 border-roles-driver/30 text-roles-driver' :
                 userRole === 'navigator' ? 'bg-roles-navigator/10 border-roles-navigator/30 text-roles-navigator' :
                 userRole === 'observer' ? 'bg-roles-observer/10 border-roles-observer/30 text-roles-observer' : 
                 'bg-roles-ai/10 border-roles-ai/30 text-roles-ai'
               }`}>
                 <div className={`w-3 h-3 rounded-full animate-cursor-pulse ${
                   userRole === 'driver' ? 'bg-roles-driver shadow-lg shadow-roles-driver/50' :
                   userRole === 'navigator' ? 'bg-roles-navigator shadow-lg shadow-roles-navigator/50' :
                   userRole === 'observer' ? 'bg-roles-observer shadow-lg shadow-roles-observer/50' : 
                   'bg-roles-ai shadow-lg shadow-roles-ai/50'
                 }`}></div>
                 <span className="font-medium font-mono">
                   {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                 </span>
               </div>
             </div>
           </div>

           <div className="flex items-center gap-4">
             <div className="text-editor-textSecondary font-mono">
               1 active session • 0 observers
             </div>
             <div className="text-xs text-editor-textSecondary">
               Monaco v0.44.0 • Yjs CRDT
             </div>
           </div>
         </div>
      </div>
    </div>
  );
} 