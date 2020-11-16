import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme } from '../utils/theme'
import Drawer from './drawer'

export default function Layout({ children }) {
  const darkmode = JSON.parse(localStorage.darkmode || false)
  const [darkMode, setDarkMode] = React.useState(
    darkmode === 'undefined' ? false : darkmode
  )
  const toggleDarkMode = () => {
    localStorage.darkmode = JSON.stringify(!darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Drawer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </ThemeProvider>
  )
}
