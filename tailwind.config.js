/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: '#3b82f6',
        secondary: '#f3f4f6',
        accent: '#ec4899',
      },
    },
  },
  plugins: [],
}
