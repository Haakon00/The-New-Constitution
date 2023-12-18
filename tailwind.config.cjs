/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				meander_dark: "url('/meander_dark.svg')",
				meander_light: "url('/meander_light.svg')",
			},
			colors: {
				libyellow: "#EAAA3A",
			},
		},
	},

	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#fff0dd",

					secondary: "#0D1821",

					accent: "#FCA17D",

					neutral: "#393E41",

					"base-100": "#fff0dd",

					info: "#2fda95",

					success: "#fedbcd",

					warning: "#FFCC00",

					error: "#ef4444",

					"base-content": "#393E41",
				},
			},
		],
	},
};
