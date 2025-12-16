// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         cream: '#fdf6e3',
//         beige: '#e8d5c4',
//         'warm-brown': '#6b4226',
//         'warm-brown-dark': '#4a2c1a',
//         'warm-brown-light': '#8b6748',
//         'soft-gold': '#d4af37',
//       },
//       fontFamily: {
//         playfair: ['Playfair Display', 'serif'],
//         poppins: ['Poppins', 'sans-serif'],
//         dancing: ['Dancing Script', 'cursive'],
//       },
//       animation: {
//         'gentle-glow': 'gentle-glow 3s ease-in-out infinite alternate',
//         'shake': 'shake 0.5s ease-in-out',
//         'float-up': 'float-up linear forwards',
//         'fade-in': 'fade-in 1s ease-out',
//         'fade-in-up': 'fade-in-up 1s ease-out',
//         'slide-up': 'slide-up 1.5s ease-out',
//         'scale-in': 'scale-in 0.3s ease-out',
//         'heart-pop': 'heart-pop 0.6s ease-out',
//         'envelope-open': 'envelope-open 2s ease-in-out',
//         'floating-heart-bg': 'floating-heart-bg 4s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        cream: '#FFF5F7',         // Very light pinkish-white (Primary BG)
        beige: '#FCE4EC',         // Soft mist pink (Secondary BG/Cards)

        // Main theme colors (replacing browns with pinks/burgundy)
        'warm-brown': '#BE185D',       // Deep Rose/Magenta (Main Buttons/Headings)
        'warm-brown-dark': '#831843',  // Dark Burgundy (Dark Text/Footer)
        'warm-brown-light': '#F472B6', // Bright Rose (Hover states/Accents)

        // Highlight
        'soft-gold': '#E4B6B4',        // Rose Gold (Subtle highlights)
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      animation: {
        'gentle-glow': 'gentle-glow 3s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out',
        'float-up': 'float-up linear forwards',
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'slide-up': 'slide-up 1.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'heart-pop': 'heart-pop 0.6s ease-out',
        'envelope-open': 'envelope-open 2s ease-in-out',
        'floating-heart-bg': 'floating-heart-bg 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};