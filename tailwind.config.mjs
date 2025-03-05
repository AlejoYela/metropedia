/** @type {import('tailwindcss').Config} */
export default {
	content: [
		//
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fff0d0',
					100: '#ffe2a5',
					200: '#ffd780',
					300: '#ffcd5d',
					400: '#ffc23e',
					500: '#ffb81d',
					600: '#fcb316',
					700: '#e79e00',
					800: '#bc8000',
					900: '#956500',
				},
				secondary:"#252627"
			}
		},
	},
	plugins: [
		require('preline/plugin'),
		require('flowbite/plugin')
	],
}
