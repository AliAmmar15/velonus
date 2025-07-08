'use client';

import { useState } from 'react';
import { CollaborativeEditor } from '@velonus/editor';
import type { SessionRole } from '@velonus/shared/src/types/session';

export default function EditorPage() {
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const [userId] = useState(() => `user-${Math.random().toString(36).substr(2, 9)}`);
  const [userRole, setUserRole] = useState<SessionRole>('driver');

  const handleContentChange = (content: string) => {
    console.log('Content changed:', content.length, 'characters');
  };

  const handleUserRoleChange = (userId: string, newRole: SessionRole) => {
    console.log('Role change request:', userId, '->', newRole);
    // In a real app, this would send to the backend
    setUserRole(newRole);
  };

  const handleSelectionChange = (selection: any) => {
    console.log('Selection changed:', selection);
  };

  return (
    <div className="h-screen bg-editor-bg flex flex-col">
      {/* Professional Header */}
      <div className="backdrop-blur-md bg-editor-bg/95 border-b border-editor-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-editor-accent to-roles-ai rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <h1 className="text-xl font-bold text-editor-text">Velonus Editor</h1>
          </div>
          
          {/* Session Info */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-editor-bgSecondary/60 border border-editor-border/50">
            <div className="w-2 h-2 bg-editor-accent rounded-full animate-pulse"></div>
            <span className="text-editor-textSecondary text-sm font-mono">
              Session: {sessionId.slice(-8)}
            </span>
          </div>

          {/* Connection Status */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-editor-success/10 border border-editor-success/20">
            <div className="w-2 h-2 bg-editor-success rounded-full animate-pulse"></div>
            <span className="text-editor-success text-sm font-medium">Live</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="text-editor-textSecondary text-sm font-mono">
              User: {userId.slice(-6)}
            </div>
            
            {/* Role Selector */}
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as SessionRole)}
              className="text-sm border border-editor-border rounded-lg px-3 py-2 bg-editor-bgSecondary text-editor-text focus:outline-none focus:ring-2 focus:ring-editor-accent focus:ring-opacity-50 transition-all font-medium"
            >
              <option value="driver">🚗 Driver</option>
              <option value="navigator">🧭 Navigator</option>
              <option value="observer">👀 Observer</option>
              <option value="ai">🤖 AI Assistant</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm rounded-lg bg-editor-bgSecondary text-editor-text hover:bg-editor-border hover:scale-105 transition-all duration-200 border border-editor-border/50 hover:border-editor-accent/30 font-medium">
              💾 Save
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-editor-accent/10 text-editor-accent hover:bg-editor-accent/20 hover:scale-105 transition-all duration-200 border border-editor-accent/30 font-medium">
              👥 Invite
            </button>
          </div>
        </div>
      </div>

      {/* Professional Editor Container */}
      <div className="flex-1 flex">
        {/* Sidebar for future features */}
        <div className="w-64 bg-editor-bgSecondary/30 backdrop-blur-sm border-r border-editor-border/50 p-4">
          <div className="mb-6">
            <h3 className="text-editor-text font-semibold mb-3">Session Participants</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-editor-bgSecondary/50 border border-editor-border/30">
                <div className="w-3 h-3 rounded-full bg-editor-accent shadow-lg shadow-editor-accent/50"></div>
                <span className="text-editor-text text-sm font-mono">{userId.slice(-6)}</span>
                <span className="text-xs text-editor-accent font-medium">{userRole}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-editor-text font-semibold mb-3">File Explorer</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-editor-bgSecondary/50 transition-colors">
                <span className="text-blue-400">📄</span>
                <span className="text-editor-text font-mono">index.ts</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-editor-bgSecondary/50 transition-colors">
                <span className="text-green-400">📄</span>
                <span className="text-editor-textSecondary font-mono">utils.ts</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-editor-text font-semibold mb-3">AI Assistant</h3>
            <div className="p-3 rounded-lg bg-roles-ai/5 border border-roles-ai/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-roles-ai rounded-full"></div>
                <span className="text-roles-ai text-sm font-medium">Ready to help</span>
              </div>
              <p className="text-editor-textSecondary text-xs">
                Ask me to explain code, suggest improvements, or help with debugging.
              </p>
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1">
          <CollaborativeEditor
            sessionId={sessionId}
            userId={userId}
            userRole={userRole}
            language="typescript"
            theme="dark"
            onContentChange={handleContentChange}
            onUserRoleChange={handleUserRoleChange}
            onSelectionChange={handleSelectionChange}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
} 