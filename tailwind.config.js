/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#023337',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0, transform: 'translateY(10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: 0, transform: 'scale(0.95)' },
          'to': { opacity: 1, transform: 'scale(1)' },
        },
        fadeInFast: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        'stagger-in': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 50%': { transform: 'rotate(-10deg)' },
          '30%, 70%': { transform: 'rotate(10deg)' },
          '90%': { transform: 'rotate(-5deg)' },
        },
        progress: {
          'from': { width: '100%' },
          'to': { width: '0%' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.3s ease-out forwards',
        fadeInFast: 'fadeInFast 0.3s ease-out forwards',
        'stagger-in': 'stagger-in 0.4s ease-out both',
        shake: 'shake 0.6s cubic-bezier(.36,.07,.19,.97) both',
        progress: 'progress 4s linear forwards',
      }
    },
  },
  plugins: [],
}