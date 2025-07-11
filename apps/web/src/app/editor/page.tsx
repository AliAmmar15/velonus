'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { VSCodeLayout } from '../../components/layout/VSCodeLayout';
import type { SessionRole } from '@velonus/shared/src/types/session';

// Simple placeholder editor component with glass theme
const SimpleEditor = () => {
  return (
    <div className="h-full layout-editor text-glass-text font-mono text-sm p-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>
      
      <div className="relative z-10">
        <div className="mb-6 text-glass-textSecondary text-xs">
          // Welcome to Velonus - Modern Collaborative Editor
        </div>
        <div className="space-y-3">
          <div>
            <span className="text-glass-syntax-keyword">import</span>{' '}
            <span className="text-glass-syntax-type">React</span>{' '}
            <span className="text-glass-syntax-keyword">from</span>{' '}
            <span className="text-glass-syntax-string">'react'</span>;
          </div>
          <div>
            <span className="text-glass-syntax-keyword">import</span>{' '}
            <span className="text-glass-syntax-type">{`{ CollaborativeEditor }`}</span>{' '}
            <span className="text-glass-syntax-keyword">from</span>{' '}
            <span className="text-glass-syntax-string">'@velonus/editor'</span>;
          </div>
          <div></div>
          <div>
            <span className="text-glass-syntax-keyword">function</span>{' '}
            <span className="text-glass-syntax-function">App</span>() {'{'}
          </div>
          <div className="ml-4">
            <span className="text-glass-syntax-keyword">return</span> (
          </div>
          <div className="ml-8">
            {'<'}<span className="text-glass-syntax-tag">div</span>{' '}
            <span className="text-glass-syntax-attribute">className</span>=
            <span className="text-glass-syntax-string">"app"</span>{'>\n'}
          </div>
          <div className="ml-12">
            {'<'}<span className="text-glass-syntax-tag">h1</span>{'>'} 
            Welcome to Velonus{' '}
            {'</'}<span className="text-glass-syntax-tag">h1</span>{'>'}
          </div>
          <div className="ml-12">
            {'<'}<span className="text-glass-syntax-tag">p</span>{'>'} 
            Experience the future of collaborative coding{' '}
            {'</'}<span className="text-glass-syntax-tag">p</span>{'>'}
          </div>
          <div className="ml-8">
            {'</'}<span className="text-glass-syntax-tag">div</span>{'>'}
          </div>
          <div className="ml-4">);{'\n'}</div>
          <div>{'}'}</div>
          <div></div>
          <div>
            <span className="text-glass-syntax-keyword">export</span>{' '}
            <span className="text-glass-syntax-keyword">default</span>{' '}
            <span className="text-glass-syntax-function">App</span>;
          </div>
        </div>
        
        <div className="mt-12 p-6 glass-surface rounded-xl border border-glass-border backdrop-blur-lg">
          <div className="text-glass-accent-primary font-semibold mb-3">🎯 Glassmorphism Editor Experience</div>
          <div className="text-glass-textSecondary space-y-2 text-sm">
            <div>✨ Frosted glass effects with modern aesthetics</div>
            <div>🔮 Real-time collaboration with role-based permissions</div>
            <div>⚡ Lightning-fast CRDT-based conflict resolution</div>
            <div>🎨 Beautiful gradient accents and smooth animations</div>
            <div>🌊 Fluid glassmorphism UI that stands out from VSCode</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EditorPage() {
  const [userRole, setUserRole] = useState<SessionRole>('driver');

  return (
    <VSCodeLayout>
      <div className="h-full flex flex-col layout-editor">
        {/* Breadcrumb bar with glass effect */}
        <div className="h-7 glass-surface border-b border-glass-border flex items-center px-4 text-xs text-glass-textSecondary backdrop-blur-lg">
          <span>Velonus</span>
          <span className="mx-2 text-glass-accent-secondary">›</span>
          <span>src</span>
          <span className="mx-2 text-glass-accent-secondary">›</span>
          <span className="text-glass-text">index.tsx</span>
        </div>

        {/* Editor container */}
        <div className="flex-1 min-h-0 relative">
          <SimpleEditor />
        </div>

        {/* Role selector with glass styling */}
        <div className="absolute top-4 right-4 z-50">
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value as SessionRole)}
            className="glass-input text-xs px-3 py-2 rounded-lg backdrop-blur-lg border border-glass-border"
            style={{ fontSize: '11px' }}
          >
            <option value="driver">🚗 Driver</option>
            <option value="navigator">🧭 Navigator</option>
            <option value="observer">👀 Observer</option>
            <option value="ai">🤖 AI Assistant</option>
          </select>
        </div>
      </div>
    </VSCodeLayout>
  );
} 