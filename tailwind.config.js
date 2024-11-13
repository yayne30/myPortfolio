import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./public/index.html",              
  ],
  theme: {
    extend: {
      animation: {
       
        pulseEffect: 'pulseEffect 1.5s ease-in-out infinite',        wiggle: "wiggle 2s ease-in-out infinite",
        ["infinite-slider"]: "infiniteSlider 10s linear infinite",

      },
      keyframes: {
          float: 'float 6s ease-in-out infinite',
        move: 'move 15s linear infinite',
        pulseEffect: {
          '0%, 100%': {
            transform: 'scale(1)',  // Normal size
          },
          '50%': {
            transform: 'scale(1.1)',  // Grow slightly
          },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-200px * 5))",
          },
        },

        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      
      
       
       
      },
    },
  },
  plugins: [],
}
