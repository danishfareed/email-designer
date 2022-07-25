/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      fontFamily: {
        'sans': ['ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  daisyui: {
    themes: [ "fantasy", "dracula"],
  },
  plugins: [require("daisyui")],
};