/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				meander_dark: "url('/meander_dark.svg')",
				meander_light: "url('/meander_light.svg')",
			},
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
					primary: "#FCA17D",

					secondary: "#000000",

					accent: "#F7AEF8",

					neutral: "#393E41",

					"base-100": "#FFFFDD",

					info: "#3F84E5",

					success: "#00FFA3",

					warning: "#F7C326",

					error: "#ef4444",

					"base-content": "#393E41",
				},
			},
		],
	},
};
