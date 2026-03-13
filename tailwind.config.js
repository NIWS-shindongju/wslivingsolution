/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: '#B87333',
        'copper-light': '#D4A574',
        'copper-dark': '#9A5F2A',
        charcoal: '#1E1E1E',
        'charcoal-light': '#2A2A2A',
        dark: '#1A1A1A',
        'warm-gray': '#F0EDE8',
        'off-white': '#FAFAF7',
        'medium-gray': '#6B6B6B',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Noto Serif KR', 'serif'],
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
