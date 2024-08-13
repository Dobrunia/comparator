/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        Prosto: ['Prosto One'],
        Roboto: ['Roboto'],
      },
      colors: {
        'root-bg': '#F5F5F5',
        'text': '#42A5F5',
        'border': '#3686C7'
      },
      backgroundImage: {},
      borderRadius: {
        'main': '4px',
      },
      padding: {
      },
      boxShadow: {
      },
      screens: {},
    },
  },
  plugins: [],
};
