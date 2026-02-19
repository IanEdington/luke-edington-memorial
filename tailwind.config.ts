import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#2D1B4E',
        'magenta': '#C2185B',
        'electric-blue': '#1E88E5',
        'warm-orange': '#E65100',
        'teal': '#00897B',
        'gold': '#FFB300',
        'sunset-pink': '#E991B0',
        'cream': '#FFF8E1',
        'dark-bg': '#1A0A2E',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Nunito', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      animation: {
        'gradient-flow': 'gradient-flow 15s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
