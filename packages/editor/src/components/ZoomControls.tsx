import React from 'react';
import { useEditorStore } from '../stores/editorStore';

interface ZoomControlsProps {
  className?: string;
}

export const ZoomControls: React.FC<ZoomControlsProps> = ({ className = '' }) => {
  const { zoomLevel, zoomIn, zoomOut, resetZoom } = useEditorStore();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Zoom Out Button */}
      <button
        onClick={zoomOut}
        disabled={zoomLevel <= 50}
        className="w-8 h-8 rounded-lg bg-editor-bgSecondary text-editor-text hover:bg-editor-border hover:scale-105 transition-all duration-200 border border-editor-border/50 hover:border-editor-accent/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        title="Zoom Out (Ctrl + -)"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>

      {/* Zoom Level Display */}
      <button
        onClick={resetZoom}
        className="px-3 py-1 rounded-lg bg-editor-bgSecondary text-editor-textSecondary hover:text-editor-text hover:bg-editor-border transition-all duration-200 border border-editor-border/50 hover:border-editor-accent/30 text-xs font-mono font-medium min-w-[50px]"
        title="Reset Zoom (Ctrl + 0)"
      >
        {zoomLevel}%
      </button>

      {/* Zoom In Button */}
      <button
        onClick={zoomIn}
        disabled={zoomLevel >= 300}
        className="w-8 h-8 rounded-lg bg-editor-bgSecondary text-editor-text hover:bg-editor-border hover:scale-105 transition-all duration-200 border border-editor-border/50 hover:border-editor-accent/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        title="Zoom In (Ctrl + +)"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}; 