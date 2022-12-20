/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				libyellow: "#F4D35E",
				libgrey: "#393E41",
				libsilver: "#C4CAD0",
				libwhite: "#f9f7f4",
			},
		},
	},

	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#000000",
					secondary: "#f6d860",
					accent: "#F4D35E",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
};
