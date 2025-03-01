/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        elementary: {
          light: '#f5f5f5',
          dark: '#0a0a16',
          accent: '#64ffda',
          secondary: '#7f5af0',
          success: '#68b723',
          warning: '#f9c440',
          danger: '#c6262e',
          gray: {
            100: '#fafafa',
            200: '#f5f5f5',
            300: '#e6e6e6',
            400: '#94a1b2',
            500: '#919191',
            600: '#6a6a6a',
            700: '#242629',
            800: '#16161a',
            900: '#0a0a16',
          }
        },
        space: {
          nebula: '#7f5af0',
          star: '#fffffe',
          comet: '#64ffda',
          void: '#0a0a16',
          meteor: '#ff8906',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'twinkle': 'twinkle 1s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at center, #16161a 0%, #0a0a16 100%)',
        'nebula-pattern': 'radial-gradient(circle at center, rgba(127, 90, 240, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};