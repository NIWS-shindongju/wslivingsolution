/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: '#B87333',
        'copper-light': '#D4A574',
        'copper-dark': '#9A5F2A',
        sand: '#C4B49A',
        'dark-slate': '#1A1A1A',
        charcoal: '#333333',
        'warm-ivory': '#F8F6F1',
        'stone-gray': '#9E9E9E',
        cream: '#FDF8F0',
        deepgreen: '#2D5016',
        woodbrown: '#8B6914',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Noto Serif KR', 'serif'],
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
