/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}','./src/**/**/*.{html,js,svelte,ts}','./src/**/**/**/*.{html,js,svelte,ts}', './data/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: []
}
