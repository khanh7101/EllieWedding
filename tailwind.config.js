/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fbf5ea',
        'ellie-gold': '#d18c28',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        whistling: ['TAN The Whistling', 'cursive', 'serif'],
        title: ['Crimson Text', 'Times New Roman', 'Georgia', 'serif'],
        elegant: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        refined: ['Lora', 'Georgia', 'serif'],
        soft: ['Crimson Text', 'Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}


