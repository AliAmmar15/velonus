import { create } from 'zustand';
import * as monaco from 'monaco-editor';
import { EditorCursor, EditorSelection } from '@velonus/shared';

interface EditorState {
  // Editor instance
  editor: monaco.editor.IStandaloneCodeEditor | null;
  
  // Content state
  content: string;
  language: string;
  theme: 'light' | 'dark';
  
  // Cursor and selection state
  cursors: Map<string, EditorCursor>;
  selections: Map<string, EditorSelection>;
  
  // Editor preferences
  fontSize: number;
  fontFamily: string;
  showLineNumbers: boolean;
  showMinimap: boolean;
  wordWrap: boolean;
  zoomLevel: number; // 100 = normal, 150 = 150%, etc.
  
  // Actions
  setEditor: (editor: monaco.editor.IStandaloneCodeEditor | null) => void;
  setContent: (content: string) => void;
  setLanguage: (language: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setCursor: (userId: string, cursor: EditorCursor) => void;
  setSelection: (userId: string, selection: EditorSelection) => void;
  removeCursor: (userId: string) => void;
  removeSelection: (userId: string) => void;
  updatePreferences: (preferences: Partial<Pick<EditorState, 'fontSize' | 'fontFamily' | 'showLineNumbers' | 'showMinimap' | 'wordWrap' | 'zoomLevel'>>) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  setZoomLevel: (level: number) => void;
  reset: () => void;
}

// Helper function to load zoom level from localStorage
const loadZoomLevel = (): number => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('velonus-zoom-level');
    return saved ? parseInt(saved, 10) : 100;
  }
  return 100;
};

// Helper function to save zoom level to localStorage
const saveZoomLevel = (level: number): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('velonus-zoom-level', level.toString());
  }
};

// Helper function to calculate font size from zoom level
const calculateFontSize = (zoomLevel: number): number => {
  const baseFontSize = 14;
  return Math.round((baseFontSize * zoomLevel) / 100);
};

const initialState = {
  editor: null,
  content: '',
  language: 'typescript',
  theme: 'dark' as const,
  cursors: new Map(),
  selections: new Map(),
  fontSize: calculateFontSize(loadZoomLevel()),
  fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
  showLineNumbers: true,
  showMinimap: true,
  wordWrap: false,
  zoomLevel: loadZoomLevel(),
};

export const useEditorStore = create<EditorState>((set, get) => ({
  ...initialState,
  
  setEditor: (editor) => set({ editor }),
  
  setContent: (content) => set({ content }),
  
  setLanguage: (language) => {
    set({ language });
    const { editor } = get();
    if (editor) {
      const model = editor.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  },
  
  setTheme: (theme) => {
    set({ theme });
    const { editor } = get();
    if (editor) {
      monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs-light');
    }
  },
  
  setCursor: (userId, cursor) => set((state) => {
    const newCursors = new Map(state.cursors);
    newCursors.set(userId, cursor);
    return { cursors: newCursors };
  }),
  
  setSelection: (userId, selection) => set((state) => {
    const newSelections = new Map(state.selections);
    newSelections.set(userId, selection);
    return { selections: newSelections };
  }),
  
  removeCursor: (userId) => set((state) => {
    const newCursors = new Map(state.cursors);
    newCursors.delete(userId);
    return { cursors: newCursors };
  }),
  
  removeSelection: (userId) => set((state) => {
    const newSelections = new Map(state.selections);
    newSelections.delete(userId);
    return { selections: newSelections };
  }),
  
  updatePreferences: (preferences) => {
    set(preferences);
    const { editor } = get();
    if (editor) {
      editor.updateOptions({
        fontSize: preferences.fontSize,
        fontFamily: preferences.fontFamily,
        lineNumbers: preferences.showLineNumbers ? 'on' : 'off',
        minimap: { enabled: preferences.showMinimap },
        wordWrap: preferences.wordWrap ? 'on' : 'off',
      });
    }
  },

  zoomIn: () => {
    const { zoomLevel } = get();
    const newZoomLevel = Math.min(zoomLevel + 10, 300); // Max 300%
    get().setZoomLevel(newZoomLevel);
  },

  zoomOut: () => {
    const { zoomLevel } = get();
    const newZoomLevel = Math.max(zoomLevel - 10, 50); // Min 50%
    get().setZoomLevel(newZoomLevel);
  },

  resetZoom: () => {
    get().setZoomLevel(100);
  },

  setZoomLevel: (level) => {
    const clampedLevel = Math.max(50, Math.min(300, level)); // Clamp between 50% and 300%
    const newFontSize = calculateFontSize(clampedLevel);
    
    set({ 
      zoomLevel: clampedLevel,
      fontSize: newFontSize 
    });
    
    saveZoomLevel(clampedLevel);
    
    const { editor } = get();
    if (editor) {
      editor.updateOptions({
        fontSize: newFontSize,
      });
    }
  },
  
  reset: () => set(initialState),
})); 