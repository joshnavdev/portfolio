module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif'],
      },
      colors: {
        nord: {
          0: 'var(--color-bg-primary)', // Background Dark
          1: 'var(--color-text-contrast)', // Colapse should be text-primary
          3: 'var(--color-button-hover)', // Text Primary Light - Text Subtitle Light - Button Hover
          4: 'var(--color-text-subtitle)', // Text subtitle Dark
          6: 'var(--color-text-primary)', // Background Light - Text Primary Dark
          8: 'var(--color-text-secondary)', // Text Secondary Dark, Light
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
