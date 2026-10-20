/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffafd',
          100: '#fff1f5',
          200: '#ffe1ea',
          300: '#f9c5d5',
          400: '#ef9fb8',
          500: '#df6f96',
          600: '#c9567d',
          700: '#a83f65',
          800: '#7d2c4d',
          900: '#5a2038',
        },
        crust: {
          50: '#fff7fa',
          100: '#ffe8ef',
          200: '#f8c4d4',
          300: '#ef9ab5',
          400: '#df6d94',
          500: '#c84e79',
          600: '#a83c64',
          700: '#832b50',
          800: '#63203b',
          900: '#431526',
        },
        espresso: {
          50: '#fff8fb',
          100: '#f9e5ec',
          200: '#efbdcc',
          300: '#d991aa',
          400: '#c46d8b',
          500: '#a94c70',
          600: '#8e385b',
          700: '#702642',
          800: '#4b1a31',
          900: '#2d0f1c',
        },
        sage: {
          400: '#8aa47b',
          500: '#6c8a5e',
          600: '#527048',
        },
        berry: {
          400: '#b8505a',
          500: '#9a3a44',
          600: '#7c2a32',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        soft: '0 4px 20px -8px rgba(168, 63, 101, 0.15)',
        warm: '0 12px 40px -12px rgba(168, 63, 101, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'soft-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'soft-zoom': 'soft-zoom 12s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
