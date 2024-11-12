/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','node_modules/preline/dist/*.js',],
	darkMode: 'selector',
	theme: {
		extend: {
			colors:{
				primary:"#fcb316",
				secondary:"#252627"
			}
		},
	},
	plugins: [require('preline/plugin'),],
}
