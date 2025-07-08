import React from 'react';
import { SessionRole } from '@velonus/shared';

interface RoleIndicatorProps {
  role: SessionRole;
  isConnected: boolean;
  participantCount: number;
}

const roleColors = {
  driver: 'bg-roles-driver',
  navigator: 'bg-roles-navigator', 
  observer: 'bg-roles-observer',
  ai: 'bg-roles-ai',
};

const roleLabels = {
  driver: '🚗 Driver',
  navigator: '🧭 Navigator',
  observer: '👀 Observer', 
  ai: '🤖 AI Assistant',
};

export const RoleIndicator: React.FC<RoleIndicatorProps> = ({
  role,
  isConnected,
  participantCount,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-editor-bgSecondary/80 backdrop-blur-sm border-t border-editor-border text-sm">
      <div className="flex items-center gap-6">
        {/* Connection Status with neon indicator */}
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full animate-pulse ${
              isConnected 
                ? 'bg-editor-success shadow-lg shadow-editor-success/50' 
                : 'bg-editor-error shadow-lg shadow-editor-error/50'
            }`}
          />
          <span className="text-editor-textSecondary font-mono">
            {isConnected ? 'Real-time sync active' : 'Connection lost'}
          </span>
        </div>

        {/* Role Badge with modern styling */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${
          role === 'driver' ? 'bg-roles-driver/10 border-roles-driver/30' :
          role === 'navigator' ? 'bg-roles-navigator/10 border-roles-navigator/30' :
          role === 'observer' ? 'bg-roles-observer/10 border-roles-observer/30' :
          'bg-roles-ai/10 border-roles-ai/30'
        }`}>
          <div
            className={`w-3 h-3 rounded-full animate-cursor-pulse shadow-lg ${roleColors[role]} ${
              role === 'driver' ? 'shadow-roles-driver/50' :
              role === 'navigator' ? 'shadow-roles-navigator/50' :
              role === 'observer' ? 'shadow-roles-observer/50' :
              'shadow-roles-ai/50'
            }`}
          />
          <span className={`font-medium font-mono ${
            role === 'driver' ? 'text-roles-driver' :
            role === 'navigator' ? 'text-roles-navigator' :
            role === 'observer' ? 'text-roles-observer' :
            'text-roles-ai'
          }`}>
            {roleLabels[role]}
          </span>
        </div>
      </div>

      {/* Session Stats */}
      <div className="flex items-center gap-4">
        <div className="text-editor-textSecondary font-mono">
          {participantCount + 1} active • 0 observers
        </div>
        <div className="text-xs text-editor-textSecondary">
          Monaco v0.44.0 • Yjs CRDT
        </div>
      </div>
    </div>
  );
}; 