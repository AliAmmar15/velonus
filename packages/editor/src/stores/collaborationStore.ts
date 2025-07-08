import { create } from 'zustand';
import { UserSession, SessionRole } from '@velonus/shared';

interface CollaborationState {
  // Connection state
  isConnected: boolean;
  connectionStatus: 'connecting' | 'connected' | 'disconnected' | 'error';
  
  // Session participants
  participants: UserSession[];
  currentUserId: string | null;
  currentSessionId: string | null;
  
  // Actions
  setConnectionStatus: (connected: boolean) => void;
  setCurrentUser: (userId: string) => void;
  setCurrentSession: (sessionId: string) => void;
  addParticipant: (participant: UserSession) => void;
  updateParticipant: (participant: UserSession) => void;
  removeParticipant: (userId: string) => void;
  updateParticipantRole: (userId: string, role: SessionRole) => void;
  clearParticipants: () => void;
  reset: () => void;
}

const initialState = {
  isConnected: false,
  connectionStatus: 'disconnected' as const,
  participants: [],
  currentUserId: null,
  currentSessionId: null,
};

export const useCollaborationStore = create<CollaborationState>((set, get) => ({
  ...initialState,
  
  setConnectionStatus: (connected: boolean) => set({
    isConnected: connected,
    connectionStatus: connected ? 'connected' : 'disconnected'
  }),
  
  setCurrentUser: (userId: string) => set({ currentUserId: userId }),
  
  setCurrentSession: (sessionId: string) => set({ currentSessionId: sessionId }),
  
  addParticipant: (participant: UserSession) => set((state) => {
    const existingIndex = state.participants.findIndex(p => p.userId === participant.userId);
    if (existingIndex >= 0) {
      // Update existing participant
      const newParticipants = [...state.participants];
      newParticipants[existingIndex] = participant;
      return { participants: newParticipants };
    } else {
      // Add new participant
      return { participants: [...state.participants, participant] };
    }
  }),
  
  updateParticipant: (participant: UserSession) => set((state) => {
    const existingIndex = state.participants.findIndex(p => p.userId === participant.userId);
    if (existingIndex >= 0) {
      const newParticipants = [...state.participants];
      newParticipants[existingIndex] = {
        ...newParticipants[existingIndex],
        ...participant,
        lastActiveAt: new Date(),
      };
      return { participants: newParticipants };
    } else {
      // Add if not exists
      return { participants: [...state.participants, participant] };
    }
  }),
  
  removeParticipant: (userId: string) => set((state) => ({
    participants: state.participants.filter(p => p.userId !== userId)
  })),
  
  updateParticipantRole: (userId: string, role: SessionRole) => set((state) => {
    const newParticipants = state.participants.map(p =>
      p.userId === userId ? { ...p, role } : p
    );
    return { participants: newParticipants };
  }),
  
  clearParticipants: () => set({ participants: [] }),
  
  reset: () => set(initialState),
})); 