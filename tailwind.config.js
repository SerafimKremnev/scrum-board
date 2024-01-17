/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        cText: '#1C1C1F',
        cTextGray: '#DEDEDE',
        cGray: '#818181',
        cGrayLight: '#AEAEAE',
        cWhite: '#fff',
        cBg: '#F0F0F0',
        cBgGray: '#F1F1F1',
        cRed: '#D7392E',
        cGrayBlack: '#2D2D30',
      },
      minHeight: {},
      boxShadow: {},
      scale: {
        90: '0.9',
        120: '1.2',
      },
      transitionDuration: {
        400: '400ms',
        1000: '1000ms',
        1100: '1100ms',
        1200: '1200ms',
        1300: '1300ms',
      },
      transitionDelay: {
        1000: '1000ms',
        1100: '1100ms',
        1200: '1200ms',
      },
      gridTemplateColumns: {
        '1-3': '1fr 3fr',
      },
    },
    screens: {
      // 'xl-max': { max: '1439px' },
      // xl: '1440px',

      'lg-max': { max: '1439px' },
      lg: '1440px',

      'md-max': { max: '1023px' },
      md: '1023px',

      'sm-max': { max: '767px' },
      sm: '768px',

      'xs-max': { max: '519px' },
      xs: '520px',
    },
    columns: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      auto: 'auto',
    },
    spacing: {
      '1/2': '5rem',
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      3: '0.3rem',
      4: '0.4rem',
      5: '0.5rem',
      6: '0.6rem',
      7: '0.7rem',
      8: '0.8rem',
      9: '0.9rem',
      10: '1rem',
      11: '1.1rem',
      12: '1.2rem',
      13: '1.3rem',
      14: '1.4rem',
      15: '1.5rem',
      16: '1.6rem',
      17: '1.7rem',
      18: '1.8rem',
      19: '1.9rem',
      20: '2rem',
      21: '2.1rem',
      22: '2.2rem',
      23: '2.3rem',
      24: '2.4rem',
      25: '2.5rem',
      26: '2.6rem',
      27: '2.7rem',
      28: '2.8rem',
      29: '2.9rem',
      30: '3rem',
      31: '3.1rem',
      32: '3.2rem',
      33: '3.3rem',
      34: '3.4rem',
      35: '3.5rem',
      36: '3.6rem',
      37: '3.7rem',
      38: '3.8rem',
      39: '3.9rem',
      40: '4rem',
      41: '4.1rem',
      42: '4.2rem',
      43: '4.3rem',
      44: '4.4rem',
      45: '4.5rem',
      46: '4.6rem',
      47: '4.7rem',
      48: '4.8rem',
      49: '4.9rem',
      50: '5rem',
      51: '5.1rem',
      52: '5.2rem',
      53: '5.3rem',
      54: '5.4rem',
      55: '5.5rem',
      56: '5.6rem',
      57: '5.7rem',
      58: '5.8rem',
      59: '5.9rem',
      60: '6rem',
      61: '6.1rem',
      62: '6.2rem',
      63: '6.3rem',
      64: '6.4rem',
      65: '6.5rem',
      66: '6.6rem',
      67: '6.7rem',
      68: '6.8rem',
      69: '6.9rem',
      70: '7rem',
      71: '7.1rem',
      72: '7.2rem',
      73: '7.3rem',
      74: '7.4rem',
      75: '7.5rem',
      76: '7.6rem',
      77: '7.7rem',
      78: '7.8rem',
      79: '7.9rem',
      80: '8rem',
      81: '8.1rem',
      82: '8.2rem',
      83: '8.3rem',
      84: '8.4rem',
      85: '8.5rem',
      86: '8.6rem',
      87: '8.7rem',
      88: '8.8rem',
      89: '8.9rem',
      90: '9rem',
      91: '9.1rem',
      92: '9.2rem',
      93: '9.3rem',
      94: '9.4rem',
      95: '9.5rem',
      96: '9.6rem',
      97: '9.7rem',
      98: '9.8rem',
      99: '9.9rem',
      100: '100rem',
      112: '11.2rem',
    },
    fontSize: {
      '4xl': [
        '12.8rem',
        {
          lineHeight: '90%',
        },
      ],
      '3xl': [
        '10.4rem',
        {
          lineHeight: '90%',
        },
      ],
      '2xl': [
        '6.4rem',
        {
          lineHeight: '90%',
        },
      ],
      xl: [
        '5.6rem',
        {
          'line-height': '120%',
        },
      ],
      lg: [
        '2.8rem',
        {
          lineHeight: '105%',
        },
      ],
      md: [
        '1.8rem',
        {
          lineHeight: '120%',
        },
      ],
      base: [
        '1.6rem',
        {
          lineHeight: '130%',
        },
      ],
      sm: [
        '1.4rem',
        {
          lineHeight: '120%',
        },
      ],
      0: [
        '0',
        {
          lineHeight: '0',
          letterSpacing: '0',
        },
      ],
    },
    lineHeight: {
      none: '1',
      normal: '1.5',
    },
    fontFamily: {
      base: 'var(--base-font)',
      secondary: 'var(--secondary-font)',
      bebas: 'var(--bebas-font)',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      expertPhoto: '0.75 / 1',
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      require('tailwindcss-aspect-ratio'),
        addVariant('inverted-colors', '@media (inverted-colors: inverted)');
      addVariant('not-last', '&:not(:last-child)');
      addVariant('not-first', '&:not(:first-child)'),
        addVariant('child-2', '&:nth-child(2)'),
        addVariant('child-3', '&:nth-child(3)'),
        addVariant('child-4', '&:nth-child(4)'),
        addVariant('child-5', '&:nth-child(5)'),
        addVariant('child-6', '&:nth-child(6)'),
        addVariant('child-7', '&:nth-child(7)'),
        addVariant('child-8', '&:nth-child(8)'),
        addVariant('child-9', '&:nth-child(9)');
    }),
  ],
};
