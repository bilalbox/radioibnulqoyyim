import React from 'react'
import store from 'store'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme } from '../utils/theme'
import Drawer from './drawer'

export default function Layout({ children }) {
  const darkmode = JSON.parse(store.get('darkmode') || false)
  const [darkMode, setDarkMode] = React.useState(
    darkmode === 'undefined' ? false : darkmode
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
