import type { SessionRole } from './session';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  bio?: string;
  company?: string;
  location?: string;
  website?: string;
  githubUsername?: string;
  twitterUsername?: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  editorFontSize: number;
  editorFontFamily: string;
  keyBindings: 'default' | 'vim' | 'emacs';
  autoSave: boolean;
  showLineNumbers: boolean;
  showMinimap: boolean;
  wordWrap: boolean;
  notifications: {
    email: boolean;
    push: boolean;
    mentions: boolean;
    collaboratorJoined: boolean;
    sessionInvites: boolean;
  };
}

export type UserRole = 'admin' | 'member' | 'guest';

export interface UserSession {
  userId: string;
  sessionId: string;
  role: SessionRole;
  joinedAt: Date;
  lastActiveAt: Date;
  cursor?: EditorCursor;
  selection?: EditorSelection;
}

export interface EditorCursor {
  line: number;
  column: number;
}

export interface EditorSelection {
  start: EditorCursor;
  end: EditorCursor;
} 