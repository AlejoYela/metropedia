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
		transitionProperty: {
			width: 'width',
		},
		textDecoration: ['active'],
		minWidth: {
			kanban: '28rem',
		},
	},
	safelist: [
		// In Markdown (README…)
		'justify-evenly',
		'overflow-hidden',
		'rounded-md',

		// From the Hugo Dashboard
		'w-64',
		'w-1/2',
		'rounded-l-lg',
		'rounded-r-lg',
		'bg-neutral-200',
		'grid-cols-4',
		'grid-cols-7',
		'h-6',
		'leading-6',
		'h-9',
		'leading-9',
		'shadow-lg',
		'bg-opacity-50',
		'dark:bg-opacity-80',

		// For Astro one
		'grid',
	],
	plugins: [
		require('preline/plugin'),
		require('flowbite/plugin')
	],
}
