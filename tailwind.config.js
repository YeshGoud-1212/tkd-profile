/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#111827', 800: '#1a2335', 700: '#243049' },
        energy: { DEFAULT: '#F97316', dark: '#EA580C', soft: '#FFEDD5' },
        slate: { brand: '#64748B' },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(17,24,39,0.18)',
        glow: '0 12px 40px -8px rgba(249,115,22,0.55)',
      },
    },
  },
  plugins: [],
}
