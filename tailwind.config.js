/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#22A0BC',
        '01': '#161616',
        '02': '#595959',
        '03': '#9C9C9C',
        '04': '#DADADA',
        '05': '#F4F4F4',
        '06': '#FDFDFD',
      },
      fontSize: {
        24: '24px',
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
      },
    },
  },
  plugins: [],
};
