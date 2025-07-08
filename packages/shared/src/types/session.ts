export type SessionRole = 'driver' | 'navigator' | 'observer' | 'ai';

export interface Session {
  id: string;
  workspaceId: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  endedAt?: Date;
  participants: SessionParticipant[];
  currentBranch: string;
  language: ProgrammingLanguage;
  framework?: string;
  settings: SessionSettings;
}

export interface SessionParticipant {
  userId: string;
  role: SessionRole;
  joinedAt: Date;
  lastActiveAt: Date;
  isOnline: boolean;
  cursor?: {
    line: number;
    column: number;
  };
  selection?: {
    start: { line: number; column: number };
    end: { line: number; column: number };
  };
}

export interface SessionSettings {
  maxParticipants: number;
  allowObservers: boolean;
  requireApproval: boolean;
  autoSave: boolean;
  saveInterval: number; // in seconds
  enableAIAssistant: boolean;
  aiModel: 'gpt-4' | 'gpt-4-turbo' | 'gpt-3.5-turbo';
  permissions: {
    canEditCode: SessionRole[];
    canCreateBranches: SessionRole[];
    canMerge: SessionRole[];
    canInviteUsers: SessionRole[];
    canModifySettings: SessionRole[];
  };
}

export interface SessionInvite {
  id: string;
  sessionId: string;
  invitedBy: string;
  invitedUser: string;
  role: SessionRole;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  createdAt: Date;
  expiresAt: Date;
  acceptedAt?: Date;
}

export interface SessionEvent {
  id: string;
  sessionId: string;
  type: SessionEventType;
  userId: string;
  timestamp: Date;
  data: Record<string, any>;
}

export type SessionEventType =
  | 'user_joined'
  | 'user_left'
  | 'role_changed'
  | 'code_changed'
  | 'branch_created'
  | 'branch_merged'
  | 'comment_added'
  | 'ai_suggestion'
  | 'checkpoint_created'
  | 'session_ended';

export type ProgrammingLanguage =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'cpp'
  | 'csharp'
  | 'go'
  | 'rust'
  | 'php'
  | 'ruby'
  | 'swift'
  | 'kotlin'
  | 'scala'
  | 'html'
  | 'css'
  | 'scss'
  | 'json'
  | 'yaml'
  | 'xml'
  | 'markdown'
  | 'sql'
  | 'shell'
  | 'dockerfile'
  | 'plaintext'; 