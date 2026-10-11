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
        // Redesign palette (home page, header, footer)
        brand: {
          DEFAULT: '#0b6e74',
          dark: '#08575c',
          soft: '#e3f1f1',
          mist: '#d5e7e6',
          glow: '#7fd1cf',
        },
        ink: {
          DEFAULT: '#0f1b1d',
          soft: '#3e4b4c',
          muted: '#66706f',
        },
        sun: {
          DEFAULT: '#f5a524',
          soft: '#fff1d6',
          deep: '#945600',
        },
        coral: {
          DEFAULT: '#f2734f',
          soft: '#ffe6dc',
          deep: '#ab3f26',
        },
        sky: {
          DEFAULT: '#3b8fd9',
          soft: '#e2f0ff',
          deep: '#1d65a6',
        },
        whatsapp: '#0c7a53',
        canvas: '#f3f5f4',
        line: '#e2e7e6',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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

