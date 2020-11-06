import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import store from 'store/dist/store.modern'
import { isUndefined } from 'lodash'
import { lightTheme, darkTheme } from '../utils/theme'
import Drawer from './drawer'

export default function Layout({ children }) {
  const darkmode = store.get('darkmode')
  const [darkMode, setDarkMode] = React.useState(
    isUndefined(darkmode) ? false : darkmode
  )
  const toggleDarkMode = () => {
    store.set('darkmode', !darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Drawer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </ThemeProvider>
  )
}
