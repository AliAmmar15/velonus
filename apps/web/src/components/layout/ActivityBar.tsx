'use client';

import { useState } from 'react';
import { 
  FileText, 
  Search, 
  GitBranch, 
  Package, 
  Play, 
  Settings,
  PanelBottomOpen
} from 'lucide-react';

export type ActivityView = 'explorer' | 'search' | 'git' | 'debug' | 'extensions';

interface ActivityBarProps {
  activeView: ActivityView;
  onViewChange: (view: ActivityView) => void;
  onToggleSidebar?: () => void;
  sidebarVisible?: boolean;
  className?: string;
}

interface ActivityItem {
  id: ActivityView;
  icon: React.ComponentType<any>;
  title: string;
  badge?: number;
  disabled?: boolean;
}

const activityItems: ActivityItem[] = [
  {
    id: 'explorer',
    icon: FileText,
    title: 'Explorer (⌘⇧E)',
  },
  {
    id: 'search',
    icon: Search,
    title: 'Search (⌘⇧F)',
  },
  {
    id: 'git',
    icon: GitBranch,
    title: 'Source Control (⌃⇧G)',
    badge: 2,
  },
  {
    id: 'debug',
    icon: Play,
    title: 'Run and Debug (⌘⇧D)',
  },
  {
    id: 'extensions',
    icon: Package,
    title: 'Extensions (⌘⇧X)',
  },
];

const bottomItems = [
  {
    id: 'settings',
    icon: Settings,
    title: 'Settings',
  },
];

export function ActivityBar({ 
  activeView, 
  onViewChange, 
  onToggleSidebar,
  sidebarVisible = true,
  className = '' 
}: ActivityBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderActivityItem = (item: ActivityItem) => {
    const isActive = activeView === item.id;
    const isHovered = hoveredItem === item.id;

    return (
      <div
        key={item.id}
        className={`
          relative group w-12 h-12 flex items-center justify-center cursor-pointer
          transition-all duration-200 ease-out rounded-lg mx-1
          ${isActive 
            ? 'text-glass-accent-primary bg-glass-activityBar-active shadow-glass-activityBar-glow' 
            : 'text-glass-activityBar-text hover:text-glass-activityBar-textHover hover:bg-glass-surfaceHover'
          }
          ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        onClick={() => !item.disabled && onViewChange(item.id)}
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
        title={item.title}
      >
        {/* Active indicator - left border with glow */}
        {isActive && (
          <div className="absolute left-0 top-2 bottom-2 w-1 bg-glass-accent-primary rounded-r-lg shadow-lg animate-glow" />
        )}
        
        {/* Icon */}
        <div className="relative">
          <item.icon 
            size={20} 
            strokeWidth={1.5}
            className="transition-all duration-200"
          />
          
          {/* Badge with glass effect */}
          {item.badge && item.badge > 0 && (
            <div className="
              absolute -top-1 -right-1 
              min-w-[16px] h-4 px-1
              bg-glass-accent-secondary text-white 
              rounded-full flex items-center justify-center
              text-xs font-medium leading-none
              backdrop-blur-sm shadow-lg
              border border-glass-borderActive
            ">
              {item.badge > 99 ? '99+' : item.badge}
            </div>
          )}
        </div>

        {/* Tooltip with glass effect */}
        {isHovered && (
          <div className="
            absolute left-14 top-1/2 transform -translate-y-1/2 
            glass-menu px-3 py-2 rounded-lg
            text-xs whitespace-nowrap z-50
            animate-fade-in ml-1
          ">
            {item.title}
            {/* Tooltip arrow */}
            <div className="
              absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full
              w-0 h-0 border-t-4 border-b-4 border-r-4
              border-transparent border-r-glass-border
            "></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`
      w-14 h-full glass-panel flex flex-col items-center z-50 py-2 ${className}
    `}>
      {/* Menu button area with glass effect */}
      <div className="w-12 h-12 flex items-center justify-center mb-4 glass-surface rounded-lg">
        <div className="w-6 h-6 flex">
          {/* Modern menu icon dots with gradient */}
          <div className="grid grid-cols-3 gap-1 w-full h-full">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-1 bg-gradient-to-br from-glass-accent-primary to-glass-accent-secondary rounded-full opacity-70" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main activity items */}
      <div className="flex-1 flex flex-col space-y-1">
        {activityItems.map(item => renderActivityItem(item))}
      </div>

      {/* Bottom items */}
      <div className="flex flex-col space-y-1 mt-4">
        {bottomItems.map(item => (
          <div
            key={item.id}
            className="
              w-12 h-12 flex items-center justify-center cursor-pointer
              transition-all duration-200 ease-out rounded-lg
              text-glass-activityBar-text hover:text-glass-activityBar-textHover hover:bg-glass-surfaceHover
            "
            title={item.title}
          >
            <item.icon size={20} strokeWidth={1.5} />
          </div>
        ))}
      </div>

      {/* Account area with glassmorphism */}
      <div className="w-12 h-12 flex items-center justify-center mt-4">
        <div className="w-8 h-8 bg-gradient-to-br from-glass-accent-primary to-glass-accent-secondary rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">A</span>
        </div>
      </div>
    </div>
  );
} 