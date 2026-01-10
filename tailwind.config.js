/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(148, 163, 184, 0.16)',
        glow: '0 0 32px rgba(var(--color-accent) / 0.45)',
      },
    },
  },
  plugins: [],
};
