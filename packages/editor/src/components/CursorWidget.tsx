import React, { useEffect, useRef } from 'react';
import { UserSession } from '@velonus/shared';

interface CursorWidgetProps {
  editor: any; // monaco.editor.IStandaloneCodeEditor
  participants: UserSession[];
  currentUserId: string;
}

export const CursorWidget: React.FC<CursorWidgetProps> = ({
  editor,
  participants,
  currentUserId,
}) => {
  const cursorsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (!editor) return;

    const updateCursors = () => {
      participants.forEach((participant) => {
        if (participant.userId === currentUserId || !participant.cursor) {
          return;
        }

        const position = {
          lineNumber: participant.cursor.line,
          column: participant.cursor.column,
        };

        // Get the pixel position of the cursor
        const pixelPosition = editor.getScrolledVisiblePosition(position);
        if (!pixelPosition) return;

        // Get or create cursor element with neon outline
        let cursorEl = cursorsRef.current.get(participant.userId);
        if (!cursorEl) {
          cursorEl = document.createElement('div');
          cursorEl.className = 'absolute w-0.5 h-5 pointer-events-none z-10 animate-cursor-pulse';
          const roleColor = getRoleColor(participant.role);
          cursorEl.style.backgroundColor = roleColor;
          cursorEl.style.boxShadow = `0 0 8px ${roleColor}, 0 0 16px ${roleColor}40`;
          cursorEl.style.borderRadius = '2px';
          
          // Add user name label with neon glow
          const labelEl = document.createElement('div');
          labelEl.className = 'absolute -top-7 left-0 px-2 py-1 text-xs text-white rounded-lg whitespace-nowrap font-mono font-medium backdrop-blur-sm';
          labelEl.style.backgroundColor = `${roleColor}dd`;
          labelEl.style.border = `1px solid ${roleColor}60`;
          labelEl.style.boxShadow = `0 0 12px ${roleColor}40`;
          labelEl.textContent = `${participant.userId.slice(0, 8)} • ${participant.role}`;
          cursorEl.appendChild(labelEl);
          
          editor.getDomNode()?.appendChild(cursorEl);
          cursorsRef.current.set(participant.userId, cursorEl);
        }

        // Update position
        cursorEl.style.left = `${pixelPosition.left}px`;
        cursorEl.style.top = `${pixelPosition.top}px`;
      });

      // Remove cursors for participants who left
      const participantIds = new Set(participants.map(p => p.userId));
      cursorsRef.current.forEach((cursorEl, userId) => {
        if (!participantIds.has(userId)) {
          cursorEl.remove();
          cursorsRef.current.delete(userId);
        }
      });
    };

    updateCursors();

    // Update cursors when editor scrolls or content changes
    const disposables = [
      editor.onDidScrollChange(updateCursors),
      editor.onDidChangeModelContent(updateCursors),
    ];

    return () => {
      disposables.forEach(d => d.dispose());
      // Clean up all cursor elements
      cursorsRef.current.forEach(cursorEl => cursorEl.remove());
      cursorsRef.current.clear();
    };
  }, [editor, participants, currentUserId]);

  return null;
};

const getRoleColor = (role: string): string => {
  const colors = {
    driver: '#1f6feb',    // Electric blue
    navigator: '#10b981', // Soft green
    observer: '#6b7280',  // Gray
    ai: '#a78bfa',        // Soft purple
  };
  return colors[role as keyof typeof colors] || '#6b7280';
}; 