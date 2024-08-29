/*
 * @description: Tailwindcss configuration file
 * @author: Yoke
 * @Date: 2024-08-14 23:07:21
 */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    screens: {
      'xs': { 'min': '0px', 'max': '479px' },
      // => @media (min-width: 0px and max-width: 479px) { ... }
      'sm': { 'min': '0px', 'max': '767px' },
      // => @media (min-width: 0px and max-width: 767px) { ... }
      'md': { 'min': '0px', 'max': '991px' },
      // => @media (min-width: 0px and max-width: 990px) { ... }
    }
  }
};
