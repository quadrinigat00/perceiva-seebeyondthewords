/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cinematic: {
          black: '#050506',
          'black-soft': '#0a0a0c',
          'black-deep': '#030304',
        },
        accent: {
          white: '#f5f5f7',
          'white-dim': '#a1a1aa',
          'white-faint': '#52525b',
          glow: 'rgba(255,255,255,0.08)',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.10)',
          hover: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-tight': '-0.04em',
        'ultra-wide': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,255,255,0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(255,255,255,0.12)' },
        },
      },
    },
  },
  plugins: [],
};
