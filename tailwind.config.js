/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        secondary: '#64748b',
        text: {
          dark: '#1e293b',
          light: '#64748b',
        },
        background: {
          DEFAULT: '#ffffff',
          light: '#f8fafc',
        },
        border: '#e2e8f0',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateX(-50%) translateY(0)',
          },
          '40%': {
            transform: 'translateX(-50%) translateY(-10px)',
          },
          '60%': {
            transform: 'translateX(-50%) translateY(-5px)',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 20s ease-in-out infinite alternate',
        fadeInUp: 'fadeInUp 1s ease-out',
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}

