import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';

import AppContext from "./appContext"
import { lightTheme, darkTheme } from '../utils/theme'
import Drawer from "./drawer"

export default function Layout({ children }) {
  const { darkMode } = React.useContext(AppContext)
  let theme = darkMode? darkTheme : lightTheme
  React.useEffect(() => { theme = darkMode? darkTheme : lightTheme }, [darkMode])

  return (
      <ThemeProvider theme={theme}>
        <Drawer />
        {children}
    </ThemeProvider>
  )
}
