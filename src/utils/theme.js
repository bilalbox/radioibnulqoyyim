import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#7b1fa2',
    },
  }
}))

export const darkTheme = responsiveFontSizes(createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#7b1fa2',
      },
    },
  }))