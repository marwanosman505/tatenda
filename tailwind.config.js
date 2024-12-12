/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomInFade: {
          '0%': { transform: 'scale(1.1)', opacity:0 },
          '100%': { transform: 'scale(1)', opacity:1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1'},
          '100%': { transform: 'translateX(100%)', opacity:'0'},
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
        flicker: {
          '60%':   { opacity: '0.2' },   // Fully on
          '65%':   { opacity: '0.4' }, // Slight dim
          // '6%':   { opacity: '0.9' }, // Almost full again
          // '10%':  { opacity: '0.5' }, // Deeper flicker
          // '11%':  { opacity: '1' },   // Back on
          '90%':  { opacity: '0.3' }, // Subtle dip
          '95%':  { opacity: '0.5' }, // Soft glow
          // '22%':  { opacity: '1' },   // Recovered
          // '30%':  { opacity: '0.4' }, // More pronounced flicker
          // '31%':  { opacity: '0.9' }, // Quick regain
          // '33%':  { opacity: '1' },   // Steady again
          // '40%':  { opacity: '0.5' }, // Brief shimmer
          // '42%':  { opacity: '0.8' }, // On the way back
          // '44%':  { opacity: '1' },   // Stable
          // '50%':  { opacity: '0.4' }, // Minor flicker
          // '52%':  { opacity: '0.65' },
          // '53%':  { opacity: '1' },   // Almost no downtime
          // '60%':  { opacity: '0.7' },
          // '62%':  { opacity: '1' },   // Recover quickly
          // '70%':  { opacity: '0.5' }, // More pronounced again
          // '72%':  { opacity: '1' },   // Flick back on
          // '80%':  { opacity: '0.3' }, // Significant flicker
          // '82%':  { opacity: '0.9' }, // Almost stable
          // '83%':  { opacity: '1' },   // Back fully
          // '90%':  { opacity: '0.7' },
          // '92%':  { opacity: '1' },   // Quick adjustment
          // '100%': { opacity: '1' }    // Ends fully lit

        },        
      },
      animation: {
        zoomIn: 'zoomIn 1s ease-out forwards',
        zoomInFade: 'zoomInFade 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-out-right': 'slide-out-right 1s ease-out forwards',
        'fade-out': 'fade-out 1s ease-out backwards',
        'fade-in': 'fade-in 1s ease-in forwards',
        flicker: 'flicker 0.5s 1',
      },

      colors: {
        // red: "#E31C23", // You can still override specific colors
        // gray: "#7A7773",
        // blue: "#0000FF",
        // purple: "#514574",
        // "black" : "#000",
        // "dark-black": "#010203", // Fixed the typo (double `#`)
      },
      fontFamily: {
        primary: ["Barlow Condensed", "sans-serif"],
        secondary: ["Arsenal", "serif"],
        text: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
