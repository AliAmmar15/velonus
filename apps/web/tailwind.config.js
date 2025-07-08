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
        // Code editor theme colors (GitHub Dark + Custom)
        editor: {
          bg: '#0d1117',        // GitHub dark background
          bgSecondary: '#161b22',
          border: '#30363d',
          text: '#e5e7eb',      // Off-white text
          textSecondary: '#9ca3af', // Secondary text
          accent: '#1f6feb',    // Electric blue accent
          success: '#10b981',   // Soft green
          warning: '#f59e0b',
          error: '#f87171',
        },
        // Role-based colors (updated)
        roles: {
          driver: '#1f6feb',    // Electric blue
          navigator: '#10b981', // Soft green
          observer: '#6b7280',  // Gray
          ai: '#a78bfa',        // Soft purple
        },
        // UI component colors
        glass: {
          bg: 'rgba(13, 17, 23, 0.7)',     // Semi-transparent background
          border: 'rgba(48, 54, 61, 0.5)', // Subtle border
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hover-scale': 'hoverScale 0.15s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'cursor-pulse': 'cursorPulse 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #1f6feb' },
          '100%': { boxShadow: '0 0 20px #1f6feb, 0 0 30px #1f6feb' },
        },
        cursorPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}; 