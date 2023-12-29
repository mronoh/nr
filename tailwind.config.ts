/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{html,js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#062817',
        light: '#fff',
        accent: '#007425',
        'accent-dark': 'rgb(145 227 169)',
        green: '#15B825',
        grayLight: '#BDBDBD',
        bglight: '#f7f7f7',
        bgdark: 'rgb(24 24 27)',
        warning: '#FF0000',
        gray: 'rgb(161 161 170)',
        'gray-dark': 'rgb(63 63 70)',
        'gray-light': 'rgb(228 228 231)'
      },
      fontFamily: {
        mont: ['var(--font-montserrat)']
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      screens: {
        xs: '425px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
