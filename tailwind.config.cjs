/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      theme: {
        fontFamily: {
          'sans': ['Roboto Flex', 'monospace'],
          'roboto': ['Roboto Flex', 'Roboto', 'sans-serif'],
          'poppins': ['Poppins', 'Inter', 'Raleway', 'sans-serif'],
        },
        extend: {
          colors: {
            matty: {
              "50": "#fafafa",
              "100": "#ebebec",
              "200": "#d7d7d8",
              "300": "#a6acaf",
              "400": "#70797f",
              "500": "#5e696f",
              "600": "#444f56",
              "700": "#3d464c",
              "800": "#2e3539",
              "900": "#1e2326",
            }
          }
        }
      },
	plugins: [],
}
