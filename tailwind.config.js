/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fraunces72ptsupersoft', 'serif'],
        Fraunces72ptsupersoft: ['Fraunces72ptsupersoft', 'serif'],
        Fraunces144ptsupersoft: ['Fraunces144ptsupersoft', 'serif'],
        Geomanist: ['Geomanist', 'serif'],
        Geomanist_ultra: ['Geomanist ultra','serif'],
      },
      backgroundImage: {
        navbar_bg: 'linear-gradient(270deg,#302f39,#223240 95%)',
        hero_bg: 'linear-gradient(90deg,#302f39,#223240)',
        noise: 'url("/assets/images/bg_noise.webp")',
      },
      fontSize: {
        '90p': '5.625rem',
      },
      maxWidth: {
        '675p': '42.188rem',
      },
      colors: {
        dark_green: '#26313c',
        dark_chocolate: '#2e313a',
        soft_white: '#e4ded5',
        dark_khaki: '#d4ac8e',
        light_gray: '#e4ded5',
      },
    },
  },
  plugins: [],
};
