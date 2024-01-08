/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-green': '#11F4D1',
        'blue-4': '#AEB9D2',
        'blue-5': '#D6E1FA',
        'blue-6': '#4C5576',
        overlay: 'rgba(8, 21, 40, 0.60)',
        'code-input-bg': 'rgba(14, 28, 57, 0.70)',
        'code-output-header': 'rgba(0, 8, 37, 0.70)',
        'btn-outline-bg': 'rgba(34, 48, 77, 0.30)',
      },
    },
    screens: {
      md: { max: '767px' },
    },
  },
  plugins: [],
};
