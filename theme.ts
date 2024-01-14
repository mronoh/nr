import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': 'rgb(24, 24, 27)',
  '--my-brand': 'rgb(145, 227, 169)',
  '--my-red': 'rgb(239, 68, 68)',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58'
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  // Brand
  '--brand-primary': props['--my-brand'],

  // Default buttons
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-danger-color': props['--my-red'],
  '--default-button-warning-color': props['--my-yellow'],

  // State
  '--state-info-color': props['--my-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  // Navigation
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-brand']
})
