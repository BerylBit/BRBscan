import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    700: '#52abba',
    600: '#2e8bb0',
    550: '#7248c2',
    500: '#94d4f2',
    400: '#b9e3f0'
  },
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1100px',
  xl: '1400px',
  '2xl': '1536px',
})

const fonts = {
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
}

const config = {
    mode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme( {colors}, {config},{breakpoints}, fonts)

export default theme;