import React from 'react';
import { SessionRole, UserSession } from '@velonus/shared';
import { ZoomControls } from './ZoomControls';

interface EditorToolbarProps {
  sessionId: string;
  userRole: SessionRole;
  isConnected: boolean;
  language: string;
  participants: UserSession[];
  onUserRoleChange?: (userId: string, newRole: SessionRole) => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  sessionId,
  userRole,
  isConnected,
  language,
  participants,
  onUserRoleChange,
}) => {
  const canEdit = userRole !== 'observer';
  
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-editor-bg/95 backdrop-blur-sm border-b border-editor-border">
      {/* Left side - Session info with modern styling */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-editor-accent rounded-full animate-cursor-pulse"></div>
          <div className="text-editor-text font-medium font-mono">
            {sessionId.slice(0, 8)}
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-editor-bgSecondary/60">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-editor-textSecondary text-sm font-mono">{language}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${canEdit ? 'bg-editor-success' : 'bg-editor-textSecondary'}`}></div>
          <span className={`font-medium ${canEdit ? 'text-editor-success' : 'text-editor-textSecondary'}`}>
            {canEdit ? 'Can Edit' : 'Read Only'}
          </span>
        </div>
      </div>

      {/* Center - Participants with neon outlines */}
      <div className="flex items-center gap-3">
        {participants.slice(0, 5).map((participant) => (
          <div
            key={participant.userId}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-editor-bgSecondary border border-opacity-30 hover:border-opacity-60 transition-all"
            style={{ 
              borderColor: getRoleColor(participant.role) + '4d',
              backgroundColor: getRoleColor(participant.role) + '0d'
            }}
            title={`${participant.userId} - ${participant.role}`}
          >
            <div
              className="w-3 h-3 rounded-full shadow-lg animate-cursor-pulse"
              style={{ 
                backgroundColor: getRoleColor(participant.role),
                boxShadow: `0 0 8px ${getRoleColor(participant.role)}80`
              }}
            />
            <span className="text-xs text-editor-text font-mono">
              {participant.userId.slice(0, 6)}
            </span>
            <div className="text-xs font-medium" style={{ color: getRoleColor(participant.role) }}>
              {participant.role}
            </div>
          </div>
        ))}
        {participants.length > 5 && (
          <div className="text-xs text-editor-textSecondary font-mono">
            +{participants.length - 5} more
          </div>
        )}
      </div>

      {/* Right side - Action buttons with modern styling */}
      <div className="flex items-center gap-3">
        {/* Zoom Controls */}
        <ZoomControls />
        
        {/* Divider */}
        <div className="w-px h-6 bg-editor-border/50"></div>
        
        <button
          className="px-4 py-2 text-sm rounded-xl bg-editor-bgSecondary text-editor-text hover:bg-editor-border hover:scale-105 transition-all duration-200 border border-editor-border/50 hover:border-editor-accent/30 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={!isConnected}
        >
          💾 Save
        </button>
        
        <button
          className="px-4 py-2 text-sm rounded-xl bg-editor-accent/10 text-editor-accent hover:bg-editor-accent/20 hover:scale-105 transition-all duration-200 border border-editor-accent/30 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={!isConnected}
        >
          🌿 Branch
        </button>
      </div>
    </div>
  );
};

const getRoleColor = (role: SessionRole): string => {
  const colors = {
    driver: '#1f6feb',    // Electric blue
    navigator: '#10b981', // Soft green
    observer: '#6b7280',  // Gray
    ai: '#a78bfa',        // Soft purple
  };
  return colors[role];
}; 