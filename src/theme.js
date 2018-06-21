import { css } from 'styled-components'

const sizes = {
  large: 1280,
  desktop: 992,
  tablet: 768,
  phone: 450
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export default {
  colors: {
    light: 'rgb(255, 255, 255)',
    dark: 'rgb(25, 25, 25)',
    dark2: 'rgb(40, 40, 40)',
    semiDark: 'rgba(25, 25, 25, 0.5)',
    lightGray: 'rgba(25, 25, 25, 0.2)',
    alphaLight: 'rgba(234, 234, 234, 0.2)',
    semiLight: 'rgba(255, 255, 255, 0.5)'
  },
  globals: {
    transition: 'all ease 0.25s',
    radius: '5px'
  },
  fonts: {
    families: {
      sourceSans: "'Source Sans Pro', sans-serif"
    },
    sizes: {
      small: '0.875em',
      regular: '1rem',
      medium: '1.125rem',
      large: '1.250em',
      xlarge: '1.875em'
    }
  },
  sizes: {
    tiny: '0.313rem',
    small: '0.5rem',
    regular: '1rem',
    large: '1.875rem',
    xlarge: '3.75rem',
    huge: '5.625rem',
    enormous: '7.5em'
  }
}
