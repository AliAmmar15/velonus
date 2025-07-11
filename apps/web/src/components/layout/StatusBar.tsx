'use client';

import { useState, useEffect } from 'react';
import { 
  GitBranch, 
  AlertTriangle, 
  XCircle, 
  Info,
  Wifi,
  WifiOff,
  Users,
  Clock,
  Database,
  PanelBottomOpen,
  ChevronUp
} from 'lucide-react';

interface StatusBarProps {
  onTogglePanel?: () => void;
  panelVisible?: boolean;
  className?: string;
}

export function StatusBar({ 
  onTogglePanel,
  panelVisible = false,
  className = '' 
}: StatusBarProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isConnected] = useState(true);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className={`
      h-7 glass-panel backdrop-blur-xl
      bg-status-gradient
      flex items-center justify-between px-4 text-xs
      text-white shadow-glass-statusBar-shadow
      ${className}
    `}>
      {/* Left section */}
      <div className="flex items-center space-x-6">
        {/* Git branch */}
        <div className="flex items-center space-x-1.5 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
          <GitBranch size={12} strokeWidth={1.5} />
          <span className="font-medium">main</span>
          <span className="text-white/70">↑2 ↓0</span>
        </div>

        {/* File info */}
        <div className="flex items-center space-x-4 text-white/80">
          <div className="flex items-center space-x-1">
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Ln 42, Col 15</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>UTF-8</span>
          </div>
        </div>
      </div>

      {/* Center section */}
      <div className="flex items-center space-x-4">
        {/* Collaboration status */}
        <div className="flex items-center space-x-2 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
          <Users size={12} strokeWidth={1.5} />
          <span className="text-white/90 font-medium">2 active</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-roles-driver rounded-full shadow-sm animate-pulse"></div>
            <div className="w-2 h-2 bg-roles-navigator rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Connection status */}
        <div className={`
          flex items-center space-x-1.5 px-2 py-1 rounded-md transition-all duration-200
          ${isConnected 
            ? 'text-glass-success hover:bg-white/10' 
            : 'text-glass-error hover:bg-white/10'
          }
        `}>
          {isConnected ? (
            <>
              <Wifi size={12} strokeWidth={1.5} />
              <span className="font-medium">Connected</span>
            </>
          ) : (
            <>
              <WifiOff size={12} strokeWidth={1.5} />
              <span className="font-medium">Disconnected</span>
            </>
          )}
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Problems */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
            <XCircle size={12} strokeWidth={1.5} className="text-glass-error" />
            <span className="text-white/90">0</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
            <AlertTriangle size={12} strokeWidth={1.5} className="text-glass-warning" />
            <span className="text-white/90">2</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
            <Info size={12} strokeWidth={1.5} className="text-glass-info" />
            <span className="text-white/90">5</span>
          </div>
        </div>

        {/* Database connection */}
        <div className="flex items-center space-x-1.5 text-glass-success hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
          <Database size={12} strokeWidth={1.5} />
          <span className="font-medium">DB</span>
        </div>

        {/* Current time */}
        <div className="flex items-center space-x-1.5 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer">
          <Clock size={12} strokeWidth={1.5} />
          <span className="font-mono font-medium text-white/90">{formatTime(currentTime)}</span>
        </div>

        {/* Panel toggle */}
        {onTogglePanel && (
          <button
            onClick={onTogglePanel}
            className={`
              flex items-center space-x-1 px-2 py-1 rounded-md
              transition-all duration-200 hover:bg-white/10
              ${panelVisible ? 'text-white' : 'text-white/70'}
            `}
            title={panelVisible ? 'Hide Panel' : 'Show Panel'}
          >
            {panelVisible ? (
              <ChevronUp size={12} strokeWidth={1.5} />
            ) : (
              <PanelBottomOpen size={12} strokeWidth={1.5} />
            )}
            <span className="font-medium">Panel</span>
          </button>
        )}
      </div>
    </div>
  );
} 