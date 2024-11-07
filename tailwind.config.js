/** @type {import('tailwindcss').Config} */

export default {
  content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
  plugins: [],
  theme:
  {
    aspectRatio:
    {
      '1/1': '1 / 1',
      '2/3': '2 / 3',
      '3/2': '3 / 2',
      '3/4': '3 / 4',
      '4/3': '4 / 3',
      '9/16': '9 / 16',
      '16/9': '16 / 9'
    },
    borderRadius:
    {
      base: '2rem',
      full: '999rem',
      half: '50%',
      none: '0',
      sm: '1.2rem',
      xl: '3.2rem'
    },
    boxShadow:
    {
      'center-black-100': '0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.05)',
      'center-black-200': '0 0.1rem 0.2rem -0.1rem rgba(0, 0, 0, 0.1), 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1)',
      'center-black-300': '0 0.2rem 0.4rem -0.2rem rgba(0, 0, 0, 0.1), 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1)',
      'center-black-400': '0 0.4rem 0.6rem -0.4rem rgba(0, 0, 0, 0.1), 0 1.5rem 1rem -0.3rem rgba(0, 0, 0, 0.1)',
      'center-black-500': '0 1rem 0.8rem -0.6rem rgba(0, 0, 0, 0.1), 0 2.5rem 2rem -0.5rem rgba(0, 0, 0, 0.1)',
      'center-black-600': '0 2.5rem 5rem -1.2rem rgba(0, 0, 0, 0.25)',
      'down-black-100': '0 0.2rem 2rem 0 rgba(0, 0, 0, 0.05)',
      'down-black-200': '0 0.1rem 0.3rem rgba(0, 0, 0, 0.1), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1)',
      'down-black-300': '0 0.4rem 0.6rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1)',
      'down-black-400': '0 1.5rem 1rem rgba(0, 0, 0, 0.1), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1)',
      'down-black-500': '0 2.5rem 2rem rgba(0, 0, 0, 0.1), 0 1rem 0.8rem rgba(0, 0, 0, 0.1)',
      'down-black-600': '0 2.5rem 5rem rgba(0, 0, 0, 0.25)',
      'left-black-100': '-0.2rem 0 2rem 0 rgba(0, 0, 0, 0.05)',
      'left-black-200': '-0.1rem 0 0.3rem rgba(0, 0, 0, 0.1), -0.1rem 0 0.2rem rgba(0, 0, 0, 0.1)',
      'left-black-300': '-0.4rem 0 0.6rem rgba(0, 0, 0, 0.1), -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1)',
      'left-black-400': '-1.5rem 0 1rem rgba(0, 0, 0, 0.1), -0.4rem 0 0.6rem rgba(0, 0, 0, 0.1)',
      'left-black-500': '-2.5rem 0 2rem rgba(0, 0, 0, 0.1), -1rem 0 0.8rem rgba(0, 0, 0, 0.1)',
      'left-black-600': '-2.5rem 0 5rem rgba(0, 0, 0, 0.25)',
      'right-black-100': '0.2rem 0 2rem 0 rgba(0, 0, 0, 0.05)',
      'right-black-200': '0.1rem 0 0.3rem rgba(0, 0, 0, 0.1), 0.1rem 0 0.2rem rgba(0, 0, 0, 0.1)',
      'right-black-300': '0.4rem 0 0.6rem rgba(0, 0, 0, 0.1), 0.2rem 0 0.4rem rgba(0, 0, 0, 0.1)',
      'right-black-400': '1.5rem 0 1rem rgba(0, 0, 0, 0.1), 0.4rem 0 0.6rem rgba(0, 0, 0, 0.1)',
      'right-black-500': '2.5rem 0 2rem rgba(0, 0, 0, 0.1), 1rem 0 0.8rem rgba(0, 0, 0, 0.1)',
      'right-black-600': '2.5rem 0 5rem rgba(0, 0, 0, 0.25)',
      'up-black-100': '0 -0.2rem 2rem 0 rgba(0, 0, 0, 0.05)',
      'up-black-200': '0 -0.1rem 0.3rem rgba(0, 0, 0, 0.1), 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.1)',
      'up-black-300': '0 -0.4rem 0.6rem rgba(0, 0, 0, 0.1), 0 -0.2rem 0.4rem rgba(0, 0, 0, 0.1)',
      'up-black-400': '0 -1.5rem 1rem rgba(0, 0, 0, 0.1), 0 -0.4rem 0.6rem rgba(0, 0, 0, 0.1)',
      'up-black-500': '0 -2.5rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 0.8rem rgba(0, 0, 0, 0.1)',
      'up-black-600': '0 -2.5rem 5rem rgba(0, 0, 0, 0.25)'
    },
    extend:
    {
      animation:
      {
        'fade-in': 'fadeIn 1.2s ease-in both',
        'fade-in-down': 'fadeInDown 1.2s ease-in-out both',
        'fade-in-left': 'fadeInLeft 1.2s ease-in-out both',
        'fade-in-right': 'fadeInRight 1.2s ease-in-out both',
        'fade-in-stroke': 'fadeInStroke 2s ease-in forwards',
        'fade-in-up': 'fadeInUp 1.2s ease-in-out both',
        'fade-out': 'fadeOut 1.2s ease-in both',
        'flip-in-x': 'flipInX 0.6s ease-out both',
        'flip-in-y': 'flipInY 0.6s ease-out both',
        float: 'float 1s ease-in-out both',
        'heart-beat': 'heartBeat 12 ease-in-out both',
        jiggle: 'jiggle 0.5s ease-in-out both',
        'pulse-fade-in': 'pulseFadeIn 1.2s ease-out both',
        sink: 'sink 1s ease-in-out both',
        'slide-in-down': 'slideInDown 1.2s ease-in-out both',
        'slide-in-left': 'slideInLeft 1.2s ease-in-out both',
        'slide-in-right': 'slideInRight 1.2s ease-in-out both',
        'slide-in-up': 'slideInUp 1.2s ease-in-out both',
        'slide-rotate-in': 'slideRotateIn 0.6s ease-out both',
        'slide-rotate-out': 'slideRotateOut 0.6s ease-out both',
        'swing-drop-in': 'swingDropIn 0.6s ease-out both',
        tada: 'tada 1s ease-in-out both',
        'twister-in-down': 'twisterInDown 1.2s ease-out both',
        'zoom-in': 'zoomIn 1.2s ease-out both',
        'zoom-out': 'zoomOut 1.2s ease-out both'
      },
      color:
      {
        modal: 'rgba(0, 0, 0, 0.5)',
        'primary-50': '#eff6ff',
        'primary-100': '#daebff',
        'primary-200': '#bedcff',
        'primary-300': '#91c7ff',
        'primary-400': '#5da8fd',
        'primary-500': '#3785fa',
        'primary-600': '#2165ef',
        'primary-700': '#1a53e3',
        'primary-800': '#1b41b2',
        'primary-900': '#1c3b8c',
        'primary-950': '#162555',
        skeleton: 'rgba(156, 163, 175, 0.5)'

      },
      fontFamily:
      {
        sans:
        [
          'Inter',
          'system-ui',
          'sans-serif'
        ]
      },
      keyframes:
      {
        fadeIn: { '100%': { opacity: 1 } },
        fadeInDown: {
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeInStroke: {
          '70%': { fillOpacity: 0 },
          '100%': {
            fillOpacity: 1,
            strokeDasharray: '0',
            strokeDashoffset: 0,
            strokeWidth: 1
          }
        },
        fadeInUp: {
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeOut: { '100%': { opacity: 0 } },
        flipInX: {
          '0%': {
            opacity: '0',
            transform: 'rotateY(90deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(0deg)'
          }
        },
        flipInY: {
          '0%': {
            opacity: '0',
            transform: 'rotateX(90deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'rotateX(0deg)'
          }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' }
        },
        heartBeat: {
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' }
        },
        jiggle: {
          '0%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(-3deg)' }
        },
        pulseFadeIn: {
          '50%': {
            opacity: 0.5,
            transform: 'scale(1.05)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        sink: {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' }
        },
        slideInDown: { '100%': { transform: 'translateY(0)' } },
        slideInLeft: { '100%': { transform: 'translateX(0)' } },
        slideInRight: { '100%': { transform: 'translateX(0)' } },
        slideInUp: { '100%': { transform: 'translateY(0)' } },
        slideRotateIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px) rotate(-90deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0deg)'
          }
        },
        slideRotateOut: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0deg)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(20px) rotate(90deg)'
          }
        },
        swingDropIn: {
          '0%': {
            opacity: '0',
            transform: 'rotate(-30deg) translateY(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'rotate(0deg) translateY(0)'
          }
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9) rotate(-3deg)' },
          '20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%': { transform: 'scale(1.1) rotate(-3deg)' },
          '50%': { transform: 'scale(1.1) rotate(3deg)' },
          '60%': { transform: 'scale(1.1) rotate(-3deg)' },
          '70%': { transform: 'scale(1.1) rotate(3deg)' },
          '80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '90%': { transform: 'scale(1.1) rotate(3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' }
        },
        twisterInDown: {
          '30%': {
            transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
            transformOrigin: '0 100%'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1, 1) rotate(0deg) translateY(0%)',
            transformOrigin: '100% 100%'
          }
        },
        zoomIn: {
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        zoomOut: {
          '100%': {
            opacity: 0,
            transform: 'scale(0.5)'
          }
        }
      },
      zIndex:
      {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100
      }
    },
    fontSize:
    {
      '2xl': '7.45rem',
      '3xl': '9.31rem',
      '4xl': '11.64rem',
      base: '1.56rem',
      h1: '4.76rem',
      h2: '3.81rem',
      h3: '3.04rem',
      h4: '2.44rem',
      h5: '1.95rem',
      sm: '1.25rem',
      ss: '1rem',
      xl: '5.96rem'
    },
    fontWeight:
    {
      bold: 700,
      'extra-bold': 800,
      light: 300,
      regular: 400,
      'semi-bold': 600
    },
    screens:
    {
      '2xl': '1280px',
      '3xl': '1440px',
      lg: '768px',
      md: '480px',
      sm: '320px',
      xl: '1024px'
    },
    spacing:
    {
      1: '0.1rem',
      2: '0.2rem',
      3: '0.3rem',
      4: '0.4rem',
      5: '0.5rem',
      6: '0.6rem',
      7: '0.7rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      34: '3.4rem',
      36: '3.6rem',
      40: '4rem',
      44: '4.4rem',
      48: '4.8rem',
      56: '5.6rem',
      64: '6.4rem',
      80: '8rem',
      96: '9.6rem',
      112: '11.2rem',
      128: '12.8rem',
      144: '14.4rem',
      160: '16rem',
      176: '17.6rem',
      196: '19.6rem',
      208: '20.8rem',
      224: '22.4rem',
      240: '24rem',
      256: '25.6rem',
      288: '28.8rem',
      320: '32rem',
      384: '38.4rem'
    }
  }
};