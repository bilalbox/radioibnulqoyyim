import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#da241c',
      },
      secondary: {
        main: '#2c3d4e'
      },
      background: {
        default: '#fafafa',
        paper: '#fcfcfc'
      },
    },
  })
)

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#ddf8e8'
      },
      background: {
        default: '#1a1a1a',
        paper: '#2a2a2a',
      },
    },
  })
)
