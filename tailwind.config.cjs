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
				libyellow: "#EAAA3A",
			},
		},
	},

	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#fff7dd",

					secondary: "#0D1821",

					accent: "#FCA17D",

					neutral: "#393E41",

					"base-100": "#fff7dd",

					info: "#03E1FF",

					success: "#00FFA3",

					warning: "#FFCC00",

					error: "#ef4444",

					"base-content": "#393E41",
				},
			},
		],
	},
};
