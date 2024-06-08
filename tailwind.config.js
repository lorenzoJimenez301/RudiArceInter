/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackCustom': '#1d1d1d',
        'azulCustom': '#10ABF5',
      },
      fontFamily: {
        'flatline': ['var(--flatline)']
      },
    },
  },
  plugins: [],
};
