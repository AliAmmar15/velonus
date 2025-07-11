/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Unique Glassmorphism Theme - Velonus Identity
        glass: {
          // Base backgrounds with transparency
          bg: '#0f0f14',              // Deep dark base
          bgSecondary: '#1a1a22',     // Secondary dark with slight purple
          bgTertiary: '#25252f',      // Elevated surfaces
          bgQuaternary: '#2f2f3a',    // Interactive surfaces
          
          // Glass effect backgrounds (with transparency)
          surface: 'rgba(26, 26, 34, 0.8)',      // Glass surface
          surfaceHover: 'rgba(47, 47, 58, 0.9)', // Glass surface hover
          overlay: 'rgba(15, 15, 20, 0.95)',     // Modal overlay
          
          // Borders with glow effects
          border: 'rgba(139, 92, 246, 0.15)',    // Subtle purple border
          borderActive: 'rgba(139, 92, 246, 0.3)', // Active border
          borderGlow: 'rgba(139, 92, 246, 0.5)',   // Glow border
          
          // Text colors with warmth
          text: '#e5e5f0',            // Primary text (slightly warm)
          textSecondary: '#b8b8cc',   // Secondary text
          textMuted: '#8888a3',       // Muted text
          textActive: '#ffffff',      // Active/highlighted text
          
          // Gradient accents
          accent: {
            primary: '#8b5cf6',       // Purple primary
            secondary: '#06b6d4',     // Cyan secondary
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            glow: '0 0 20px rgba(139, 92, 246, 0.4)',
          },
          
          // Semantic colors with glass effect
          success: '#10d9c4',         // Teal success
          warning: '#f59e0b',         // Amber warning  
          error: '#ef4444',           // Red error
          info: '#3b82f6',            // Blue info
          
          // Activity bar with glass
          activityBar: {
            bg: 'rgba(15, 15, 20, 0.9)',         // Semi-transparent
            border: 'rgba(139, 92, 246, 0.1)',   // Subtle glow border
            text: '#8888a3',                      // Inactive icon
            textActive: '#8b5cf6',                // Active with accent
            textHover: '#b8b8cc',                 // Hover state
            badge: '#06b6d4',                     // Cyan badge
            active: 'rgba(139, 92, 246, 0.15)',  // Active background
            glow: '0 0 15px rgba(139, 92, 246, 0.3)', // Active glow
          },
          
          // Status bar with gradient
          statusBar: {
            bg: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 100%)', // Gradient
            text: '#ffffff',          // White text on gradient
            textHover: '#e5e5f0',     // Hover text
            shadow: '0 -2px 10px rgba(139, 92, 246, 0.2)', // Top shadow
          },
          
          // Tabs with frosted glass
          tab: {
            active: 'rgba(139, 92, 246, 0.1)',   // Active with accent tint
            inactive: 'rgba(26, 26, 34, 0.6)',   // Semi-transparent
            hover: 'rgba(47, 47, 58, 0.8)',      // Hover glass
            border: 'rgba(139, 92, 246, 0.15)',  // Border glow
            text: '#b8b8cc',          // Inactive text
            textActive: '#ffffff',    // Active text
            closeHover: '#ef4444',    // Red close
            modified: '#f59e0b',      // Amber modified
            glow: '0 2px 8px rgba(139, 92, 246, 0.2)', // Tab glow
          },
          
          // Panel with glass
          panel: {
            bg: 'rgba(15, 15, 20, 0.95)',        // Dark glass
            border: 'rgba(139, 92, 246, 0.2)',   // Purple border
            text: '#e5e5f0',          // Panel text
            tab: 'rgba(26, 26, 34, 0.8)',        // Tab glass
            tabActive: 'rgba(139, 92, 246, 0.15)', // Active tab
            shadow: '0 -4px 20px rgba(0, 0, 0, 0.3)', // Panel shadow
          },
          
          // Editor with subtle effects
          editor: {
            selection: 'rgba(139, 92, 246, 0.3)', // Purple selection
            lineHighlight: 'rgba(139, 92, 246, 0.05)', // Subtle line highlight
            cursor: '#8b5cf6',        // Purple cursor
            gutter: '#8888a3',        // Line numbers
            gutterActive: '#b8b8cc',  // Active line number
            findMatch: 'rgba(6, 182, 212, 0.2)', // Cyan find matches
            bg: 'rgba(15, 15, 20, 0.98)', // Semi-transparent editor
          },
          
          // Syntax highlighting with modern colors
          syntax: {
            keyword: '#8b5cf6',       // Purple keywords
            string: '#10d9c4',        // Teal strings
            comment: '#6b7280',       // Gray comments
            function: '#06b6d4',      // Cyan functions
            variable: '#e5e5f0',      // Light variables
            type: '#f59e0b',          // Amber types
            number: '#10d9c4',        // Teal numbers
            operator: '#b8b8cc',      // Gray operators
            tag: '#8b5cf6',           // Purple tags
            attribute: '#06b6d4',     // Cyan attributes
          },
          
          // Menu with glass effect
          menu: {
            bg: 'rgba(26, 26, 34, 0.95)',        // Glass background
            hover: 'rgba(139, 92, 246, 0.1)',    // Purple hover
            border: 'rgba(139, 92, 246, 0.2)',   // Purple border
            text: '#e5e5f0',          // Menu text
            separator: 'rgba(139, 92, 246, 0.1)', // Separator
            shadow: '0 8px 32px rgba(0, 0, 0, 0.4)', // Drop shadow
          },
          
          // Input with glass styling
          input: {
            bg: 'rgba(47, 47, 58, 0.8)',         // Glass input
            border: 'rgba(139, 92, 246, 0.2)',   // Purple border
            focus: 'rgba(139, 92, 246, 0.5)',    // Focus glow
            text: '#e5e5f0',          // Input text
            placeholder: '#8888a3',   // Placeholder
            shadow: '0 2px 8px rgba(139, 92, 246, 0.1)', // Input shadow
          },
          
          // Scrollbar with glass effect
          scrollbar: {
            track: 'rgba(26, 26, 34, 0.3)',      // Transparent track
            thumb: 'rgba(139, 92, 246, 0.4)',    // Purple thumb
            thumbHover: 'rgba(139, 92, 246, 0.6)', // Hover thumb
          },
          
          // List items with glass
          list: {
            hover: 'rgba(139, 92, 246, 0.1)',    // Purple hover
            active: 'rgba(139, 92, 246, 0.2)',   // Purple active
            focus: 'rgba(6, 182, 212, 0.15)',    // Cyan focus
            selection: 'rgba(139, 92, 246, 0.25)', // Purple selection
          },
        },
        // Role-based colors with glassmorphism
        roles: {
          driver: '#8b5cf6',        // Purple
          navigator: '#10d9c4',     // Teal
          observer: '#8888a3',      // Muted gray
          ai: '#06b6d4',            // Cyan
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: [
          'SF Mono',
          'Monaco', 
          'Inconsolata',
          'Roboto Mono',
          'Source Code Pro',
          'Menlo', 
          'Consolas', 
          'DejaVu Sans Mono',
          'monospace'
        ],
      },
      fontSize: {
        'xs': ['11px', '16px'],     
        'sm': ['13px', '18px'],     
        'base': ['14px', '20px'],   
        'lg': ['16px', '22px'],     
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '0.5': '2px',               
        '1.5': '6px',               
        '2.5': '10px',              
        '3.5': '14px',              
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',                // Slightly larger for modern feel
        'md': '8px',                
        'lg': '12px',               
        'xl': '16px',               
        '2xl': '20px',              
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hover-scale': 'hoverScale 0.2s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'cursor-pulse': 'cursorPulse 1s ease-in-out infinite',
        'tab-slide': 'tabSlide 0.3s ease-out',
        'glass-shimmer': 'glassShimmer 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)' },
        },
        cursorPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        tabSlide: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glassShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
        'glass-gradient-hover': 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
        'status-gradient': 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(139, 92, 246, 0.1)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(139, 92, 246, 0.2)',
        'glass-glow': '0 0 0 1px rgba(139, 92, 246, 0.1), 0 8px 32px rgba(139, 92, 246, 0.2)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(139, 92, 246, 0.15)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}; 