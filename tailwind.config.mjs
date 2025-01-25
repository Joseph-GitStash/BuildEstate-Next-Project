//  @type {import('tailwindcss').Config}
import tailwindScrollbar from 'tailwind-scrollbar'

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: "true",
		padding: "15px",
	},
	fontFamily: {
		primary: "var(--font-poppins)",
		secondary: "var(--font-palanquin)",
	},
  	extend: {
  		colors: {
  			primary: "#9fa9ff",
			secondary: "#4058d6",
			accent: {
				DEFAULT: "#fafafa1a",
				hover: "#fafafa0d",
			},
			tertiary: {
				DEFAULT: "#18181b"
			},
			background: "#000"
  		},
		keyframes: {
			"infinite-scroll": {
				"0%": {transform: "translateX(0)"},
				"100%": {transform: "translateX(calc(-50% - 20px))"}
			}
		},
		animation: {
			"infinite-scroll": "infinite-scroll 10s linear infinite",
		}
  	}
  },
  plugins: [require("tailwindcss-animate"), tailwindScrollbar ],
};
