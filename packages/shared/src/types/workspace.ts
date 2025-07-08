export interface Workspace {
  id: string;
  name: string;
  description?: string;
  slug: string;
  ownerId: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  members: WorkspaceMember[];
  projects: Project[];
  settings: WorkspaceSettings;
}

export interface WorkspaceMember {
  userId: string;
  role: WorkspaceRole;
  joinedAt: Date;
  permissions: WorkspacePermissions;
}

export type WorkspaceRole = 'owner' | 'admin' | 'member' | 'guest';

export interface WorkspacePermissions {
  canCreateProjects: boolean;
  canManageMembers: boolean;
  canDeleteWorkspace: boolean;
  canModifySettings: boolean;
  canCreateSessions: boolean;
  canInviteMembers: boolean;
}

export interface WorkspaceSettings {
  defaultProjectVisibility: 'public' | 'private';
  allowGuestAccess: boolean;
  requireApprovalForJoining: boolean;
  maxMembersPerWorkspace: number;
  maxProjectsPerWorkspace: number;
  allowedDomains: string[];
  integrations: {
    github: boolean;
    slack: boolean;
    discord: boolean;
  };
}

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  description?: string;
  language: string;
  framework?: string;
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  files: ProjectFile[];
  branches: ProjectBranch[];
  activeSessions: string[]; // session IDs
  collaborators: ProjectCollaborator[];
  settings: ProjectSettings;
}

export interface ProjectFile {
  id: string;
  projectId: string;
  path: string;
  name: string;
  content: string;
  language: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  lastModifiedBy: string;
  checksum: string;
}

export interface ProjectBranch {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  isMain: boolean;
  createdBy: string;
  createdAt: Date;
  parentBranch?: string;
  files: ProjectFile[];
  mergedAt?: Date;
  mergedBy?: string;
}

export interface ProjectCollaborator {
  userId: string;
  role: ProjectRole;
  permissions: ProjectPermissions;
  joinedAt: Date;
}

export type ProjectRole = 'owner' | 'maintainer' | 'contributor' | 'viewer';

export interface ProjectPermissions {
  canEditCode: boolean;
  canCreateBranches: boolean;
  canMergeBranches: boolean;
  canDeleteBranches: boolean;
  canManageCollaborators: boolean;
  canModifySettings: boolean;
  canCreateSessions: boolean;
}

export interface ProjectSettings {
  autoSave: boolean;
  saveInterval: number;
  allowForking: boolean;
  requireApprovalForMerge: boolean;
  enableAIAssistant: boolean;
  defaultSessionRole: 'driver' | 'navigator' | 'observer';
  maxConcurrentSessions: number;
} 