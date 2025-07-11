'use client';

import { useState } from 'react';
import { X, FileText, File, Code, Database, Image, Settings, Plus } from 'lucide-react';

export interface FileTabInfo {
  name: string;
  path: string;
  modified?: boolean;
}

interface FileTabsProps {
  files: FileTabInfo[];
  activeFile: number;
  onFileSelect: (index: number) => void;
  onFileClose: (index: number) => void;
  className?: string;
}

// File icon mapping based on extension
const getFileIcon = (fileName: string): React.ComponentType<any> => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'ts':
    case 'tsx':
    case 'js':
    case 'jsx':
      return Code;
    case 'json':
    case 'sql':
      return Database;
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'svg':
      return Image;
    case 'md':
      return FileText;
    case 'config':
    case 'env':
      return Settings;
    default:
      return File;
  }
};

// File type color mapping with glass theme
const getFileTypeColor = (fileName: string): string => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'ts':
    case 'tsx':
      return 'text-glass-accent-secondary';
    case 'js':
    case 'jsx':
      return 'text-glass-warning';
    case 'json':
      return 'text-glass-success';
    case 'md':
      return 'text-glass-info';
    case 'css':
      return 'text-glass-accent-primary';
    case 'html':
      return 'text-glass-warning';
    default:
      return 'text-glass-textSecondary';
  }
};

export function FileTabs({ 
  files, 
  activeFile,
  onFileSelect, 
  onFileClose, 
  className = '' 
}: FileTabsProps) {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const handleTabClose = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    onFileClose(index);
  };

  return (
    <div className={`
      flex items-center glass-surface border-b border-glass-border backdrop-blur-lg
      h-10 overflow-x-auto ${className}
    `}>
      {files.map((file, index) => {
        const IconComponent = getFileIcon(file.name);
        const isActive = activeFile === index;
        const isHovered = hoveredTab === index;
        const fileTypeColor = getFileTypeColor(file.name);
        
        return (
          <div
            key={`${file.path}-${index}`}
            className={`
              group flex items-center px-4 h-full min-w-32 max-w-48 
              cursor-pointer transition-all duration-200 relative
              border-r border-glass-border/50
              ${isActive 
                ? 'tab-glass active bg-glass-tab-active text-glass-tab-textActive' 
                : 'tab-glass bg-glass-tab-inactive text-glass-tab-text hover:bg-glass-tab-hover'
              }
            `}
            onClick={() => onFileSelect(index)}
            onMouseEnter={() => setHoveredTab(index)}
            onMouseLeave={() => setHoveredTab(null)}
            title={file.path}
          >
            {/* Active indicator - top border with glow */}
            {isActive && (
              <div className="absolute top-0 left-2 right-2 h-0.5 bg-gradient-to-r from-glass-accent-primary to-glass-accent-secondary rounded-b-lg shadow-lg" />
            )}

            {/* Tab content */}
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              {/* File icon */}
              <IconComponent 
                size={14} 
                className={`flex-shrink-0 ${fileTypeColor} transition-colors duration-200`}
              />
              
              {/* File name */}
              <span className={`
                text-xs truncate font-mono
                ${isActive ? 'text-glass-tab-textActive' : 'text-glass-tab-text'}
                ${file.modified ? 'italic' : ''}
                transition-colors duration-200
              `}>
                {file.name}
              </span>
              
              {/* Modified indicator */}
              {file.modified && !isHovered && (
                <div className="w-2 h-2 rounded-full bg-glass-warning flex-shrink-0 shadow-sm animate-pulse" />
              )}
            </div>
            
            {/* Close button with glass effect */}
            <button
              className={`
                ml-2 p-1 rounded-md transition-all duration-200 flex-shrink-0
                backdrop-blur-sm border border-transparent
                ${isHovered || file.modified 
                  ? 'opacity-100 hover:bg-glass-surface border-glass-border hover:shadow-sm' 
                  : 'opacity-0 group-hover:opacity-100'
                }
              `}
              onClick={(e) => handleTabClose(e, index)}
              title="Close (⌘W)"
            >
              <X size={12} className="text-glass-textSecondary hover:text-glass-error transition-colors duration-200" />
            </button>
          </div>
        );
      })}
      
      {/* New tab button with glass effect */}
      <div className="flex items-center h-full">
        <button 
          className="
            w-10 h-full flex items-center justify-center
            glass-surface hover:bg-glass-surfaceHover transition-all duration-200
            text-glass-textSecondary hover:text-glass-accent-primary
            border-r border-glass-border/50 backdrop-blur-md
            rounded-none
          "
          title="New File (⌘N)"
        >
          <Plus size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
} 