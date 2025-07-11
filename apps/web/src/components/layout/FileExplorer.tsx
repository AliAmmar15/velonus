'use client';

import { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  File, 
  Folder, 
  FolderOpen,
  FileText,
  Code,
  Database,
  Image,
  Settings,
  Plus,
  FolderPlus,
  RefreshCw
} from 'lucide-react';

interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  isExpanded?: boolean;
  children?: FileNode[];
  language?: string;
}

interface FileExplorerProps {
  className?: string;
}

// Mock file tree data
const mockFiles: FileNode[] = [
  {
    id: 'src',
    name: 'src',
    type: 'folder',
    path: '/src',
    isExpanded: true,
    children: [
      {
        id: 'components',
        name: 'components',
        type: 'folder',
        path: '/src/components',
        isExpanded: true,
        children: [
          {
            id: 'editor-tsx',
            name: 'Editor.tsx',
            type: 'file',
            path: '/src/components/Editor.tsx',
            language: 'typescript',
          },
          {
            id: 'layout-tsx',
            name: 'Layout.tsx',
            type: 'file',
            path: '/src/components/Layout.tsx',
            language: 'typescript',
          },
        ],
      },
      {
        id: 'hooks',
        name: 'hooks',
        type: 'folder',
        path: '/src/hooks',
        isExpanded: false,
        children: [
          {
            id: 'use-editor-ts',
            name: 'useEditor.ts',
            type: 'file',
            path: '/src/hooks/useEditor.ts',
            language: 'typescript',
          },
        ],
      },
      {
        id: 'index-tsx',
        name: 'index.tsx',
        type: 'file',
        path: '/src/index.tsx',
        language: 'typescript',
      },
    ],
  },
  {
    id: 'package-json',
    name: 'package.json',
    type: 'file',
    path: '/package.json',
    language: 'json',
  },
  {
    id: 'readme-md',
    name: 'README.md',
    type: 'file',
    path: '/README.md',
    language: 'markdown',
  },
];

// File icon mapping
const getFileIcon = (fileName: string, isFolder: boolean = false, isExpanded: boolean = false): React.ComponentType<any> => {
  if (isFolder) {
    return isExpanded ? FolderOpen : Folder;
  }

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

// File type color mapping
const getFileTypeColor = (fileName: string, isFolder: boolean = false): string => {
  if (isFolder) {
    return 'text-glass-accent-primary';
  }

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

export function FileExplorer({ className = '' }: FileExplorerProps) {
  const [files, setFiles] = useState<FileNode[]>(mockFiles);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const toggleExpand = (nodeId: string) => {
    const updateNode = (nodes: FileNode[]): FileNode[] => {
      return nodes.map(node => {
        if (node.id === nodeId && node.type === 'folder') {
          return { ...node, isExpanded: !node.isExpanded };
        }
        if (node.children) {
          return { ...node, children: updateNode(node.children) };
        }
        return node;
      });
    };
    
    setFiles(updateNode(files));
  };

  const selectFile = (nodeId: string) => {
    setSelectedFile(nodeId);
  };

  const renderFileNode = (node: FileNode, depth: number = 0): React.ReactNode => {
    const IconComponent = getFileIcon(node.name, node.type === 'folder', node.isExpanded);
    const isSelected = selectedFile === node.id;
    const fileColor = getFileTypeColor(node.name, node.type === 'folder');
    
    return (
      <div key={node.id}>
        <div
          className={`
            file-tree-item flex items-center space-x-2 py-1 px-2 cursor-pointer
            transition-all duration-200 rounded-md
            ${isSelected ? 'active' : ''}
          `}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => {
            if (node.type === 'folder') {
              toggleExpand(node.id);
            } else {
              selectFile(node.id);
            }
          }}
        >
          {/* Expand/Collapse icon for folders */}
          {node.type === 'folder' && (
            <div className="w-4 h-4 flex items-center justify-center">
              {node.isExpanded ? (
                <ChevronDown size={12} className="text-glass-textSecondary" />
              ) : (
                <ChevronRight size={12} className="text-glass-textSecondary" />
              )}
            </div>
          )}
          
          {/* File/Folder icon */}
          <IconComponent 
            size={16} 
            className={`flex-shrink-0 ${fileColor} transition-colors duration-200`}
          />
          
          {/* File/Folder name */}
          <span className={`
            text-sm truncate font-mono transition-colors duration-200
            ${isSelected ? 'text-glass-textActive' : 'text-glass-text'}
          `}>
            {node.name}
          </span>
        </div>
        
        {/* Render children if folder is expanded */}
        {node.type === 'folder' && node.isExpanded && node.children && (
          <div>
            {node.children.map(child => renderFileNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`h-full flex flex-col ${className}`}>
      {/* Header with actions */}
      <div className="flex items-center justify-between p-3 border-b border-glass-border backdrop-blur-md">
        <span className="text-xs font-medium text-glass-textSecondary uppercase tracking-wide">
          Files
        </span>
        <div className="flex items-center space-x-1">
          <button 
            className="p-1.5 rounded-md hover:bg-glass-surfaceHover transition-all duration-200 text-glass-textSecondary hover:text-glass-accent-primary"
            title="New File"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
          <button 
            className="p-1.5 rounded-md hover:bg-glass-surfaceHover transition-all duration-200 text-glass-textSecondary hover:text-glass-accent-primary"
            title="New Folder"
          >
            <FolderPlus size={14} strokeWidth={1.5} />
          </button>
          <button 
            className="p-1.5 rounded-md hover:bg-glass-surfaceHover transition-all duration-200 text-glass-textSecondary hover:text-glass-accent-primary"
            title="Refresh"
          >
            <RefreshCw size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      
      {/* File tree */}
      <div className="flex-1 overflow-auto p-2">
        {files.map(file => renderFileNode(file))}
      </div>
    </div>
  );
} 