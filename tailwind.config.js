/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        iocGreen : '#00FF84',
        iocBlue : '#00FFEA',
        iocYellow : '#8CFF05',
        iocPurpil : '#730094',
        iocPurpilLight : '#D131FF',
        iocPurpilDark : '#39004A',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0' },
          '50%': { width: '100%' },
        },
        cursor: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 1.6s steps(4) infinite alternate',
        cursor: 'cursor .4s step-end infinite alternate',
      },
      screens: {
        'md': '960px',
      },
    },
  },
  variants: {},
  plugins: [],
}

