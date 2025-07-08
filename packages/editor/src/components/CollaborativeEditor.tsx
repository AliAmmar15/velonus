import React, { useEffect, useRef, useState, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { MonacoBinding } from 'y-monaco';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { useEditorStore } from '../stores/editorStore';
import { useCollaborationStore } from '../stores/collaborationStore';
import { SessionRole, UserSession } from '@velonus/shared';
import { CursorWidget } from './CursorWidget';
import { RoleIndicator } from './RoleIndicator';
import { EditorToolbar } from './EditorToolbar';

export interface CollaborativeEditorProps {
  sessionId: string;
  userId: string;
  userRole: SessionRole;
  language?: string;
  theme?: 'light' | 'dark';
  readOnly?: boolean;
  onUserRoleChange?: (userId: string, newRole: SessionRole) => void;
  onContentChange?: (content: string) => void;
  onSelectionChange?: (selection: monaco.Selection) => void;
  className?: string;
}

export const CollaborativeEditor: React.FC<CollaborativeEditorProps> = ({
  sessionId,
  userId,
  userRole,
  language = 'typescript',
  theme = 'dark',
  readOnly = false,
  onUserRoleChange,
  onContentChange,
  onSelectionChange,
  className = '',
}) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const bindingRef = useRef<MonacoBinding | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);
  const ydocRef = useRef<Y.Doc | null>(null);
  
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  
  const { 
    setEditor, 
    setContent, 
    content,
    cursors,
    selections 
  } = useEditorStore();
  
  const { 
    participants, 
    updateParticipant,
    setConnectionStatus 
  } = useCollaborationStore();

  // Initialize Yjs document and WebSocket provider
  const initializeCollaboration = useCallback(() => {
    if (!editorRef.current || !sessionId) return;

    // Create Yjs document
    const ydoc = new Y.Doc();
    ydocRef.current = ydoc;
    
    // Create WebSocket provider
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001';
    const provider = new WebsocketProvider(
      wsUrl,
      `session-${sessionId}`,
      ydoc,
      {
        connect: true,
        params: {
          userId,
          userRole,
        }
      }
    );
    providerRef.current = provider;

    // Get shared text type
    const sharedText = ydoc.getText('monaco');
    
    // Create Monaco binding
    const binding = new MonacoBinding(
      sharedText,
      editorRef.current.getModel()!,
      new Set([editorRef.current]),
      provider.awareness
    );
    bindingRef.current = binding;

    // Set up awareness (user presence)
    provider.awareness.setLocalStateField('user', {
      id: userId,
      role: userRole,
      name: `User ${userId}`,
      color: getRoleColor(userRole),
    });

    // Listen for connection status changes
    provider.on('status', ({ status }: { status: string }) => {
      const connected = status === 'connected';
      setIsConnected(connected);
      setConnectionStatus(connected);
    });

    // Listen for awareness changes (cursors, selections)
    provider.awareness.on('change', () => {
      const states = Array.from(provider.awareness.getStates().values());
      const participants: UserSession[] = states
        .filter((state: any) => state.user && state.user.id !== userId)
        .map((state: any) => ({
          userId: state.user.id,
          sessionId,
          role: state.user.role,
          joinedAt: new Date(),
          lastActiveAt: new Date(),
          cursor: state.cursor,
          selection: state.selection,
        }));
      
      // Update collaboration store with participant data
      participants.forEach(participant => {
        updateParticipant(participant);
      });
    });

    // Set up content change listener
    sharedText.observe(() => {
      const newContent = sharedText.toString();
      setContent(newContent);
      onContentChange?.(newContent);
    });

  }, [sessionId, userId, userRole, onContentChange, setContent, setConnectionStatus, updateParticipant]);

  // Get role-specific color
  const getRoleColor = (role: SessionRole): string => {
    const colors = {
      driver: '#3b82f6',
      navigator: '#10b981', 
      observer: '#6b7280',
      ai: '#8b5cf6',
    };
    return colors[role];
  };

  // Handle editor mount
  const handleEditorDidMount = useCallback((editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    setEditor(editor);
    setIsEditorReady(true);

    // Configure editor based on role
    const isReadOnlyMode = readOnly || userRole === 'observer';
    editor.updateOptions({
      readOnly: isReadOnlyMode,
      minimap: { enabled: true },
      fontSize: 14,
      fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
      lineNumbers: 'on',
      renderWhitespace: 'selection',
      scrollBeyondLastLine: false,
      automaticLayout: true,
    });

    // Set up cursor and selection tracking
    editor.onDidChangeCursorPosition((e) => {
      if (providerRef.current?.awareness) {
        providerRef.current.awareness.setLocalStateField('cursor', {
          line: e.position.lineNumber,
          column: e.position.column,
        });
      }
    });

    editor.onDidChangeCursorSelection((e) => {
      if (providerRef.current?.awareness) {
        providerRef.current.awareness.setLocalStateField('selection', {
          start: {
            line: e.selection.startLineNumber,
            column: e.selection.startColumn,
          },
          end: {
            line: e.selection.endLineNumber,
            column: e.selection.endColumn,
          },
        });
      }
      onSelectionChange?.(e.selection);
    });

    // Initialize collaboration after editor is ready
    setTimeout(initializeCollaboration, 100);
  }, [readOnly, userRole, onSelectionChange, initializeCollaboration, setEditor]);

  // Handle role changes
  useEffect(() => {
    if (providerRef.current?.awareness) {
      providerRef.current.awareness.setLocalStateField('user', {
        id: userId,
        role: userRole,
        name: `User ${userId}`,
        color: getRoleColor(userRole),
      });
      
      // Update editor readonly state based on role
      if (editorRef.current) {
        const isReadOnlyMode = readOnly || userRole === 'observer';
        editorRef.current.updateOptions({ readOnly: isReadOnlyMode });
      }
    }
  }, [userRole, readOnly, userId]);

  // Keyboard shortcuts for zoom
  useEffect(() => {
    const { zoomIn, zoomOut, resetZoom } = useEditorStore.getState();
    
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle if Ctrl/Cmd is pressed and not in an input/textarea
      if (!(event.ctrlKey || event.metaKey)) return;
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      
      switch (event.key) {
        case '=':
        case '+':
          event.preventDefault();
          zoomIn();
          break;
        case '-':
          event.preventDefault();
          zoomOut();
          break;
        case '0':
          event.preventDefault();
          resetZoom();
          break;
      }
    };

    // Add global event listener
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      bindingRef.current?.destroy();
      providerRef.current?.destroy();
      ydocRef.current?.destroy();
    };
  }, []);

  return (
    <div className={`collaborative-editor ${className}`}>
      {/* Editor Toolbar */}
      <EditorToolbar
        sessionId={sessionId}
        userRole={userRole}
        isConnected={isConnected}
        language={language}
        participants={participants}
        onUserRoleChange={onUserRoleChange}
      />

      {/* Monaco Editor */}
      <div className="editor-container relative">
        <Editor
          height="100%"
          language={language}
          theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
          onMount={handleEditorDidMount}
          options={{
            padding: { top: 16, bottom: 16 },
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto',
              useShadows: true,
            },
            overviewRulerBorder: false,
            hideCursorInOverviewRuler: true,
          }}
        />
        
        {/* Render other users' cursors */}
        {isEditorReady && (
          <CursorWidget
            editor={editorRef.current}
            participants={participants}
            currentUserId={userId}
          />
        )}
      </div>

      {/* Role Indicator */}
      <RoleIndicator 
        role={userRole}
        isConnected={isConnected}
        participantCount={participants.length}
      />
    </div>
  );
}; 