// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         primary:'#06a2c2',
//       }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Main theme
        background: "#0F172A",   // Deep Slate
        surface: "#1E293B",      // Cards
        primary: "#6366F1",      // Indigo
        secondary: "#8B5CF6",    // Violet
        accent: "#A78BFA",       // Light Violet

        // Text
        text: "#F8FAFC",
        muted: "#CBD5E1",

        // Borders
        border: "#334155",
      },

      boxShadow: {
        glow: "0 0 20px rgba(99,102,241,0.35)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};