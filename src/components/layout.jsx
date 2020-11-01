import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import store from 'store/dist/store.modern'
import { isUndefined } from 'lodash'

import { AudioProvider } from '../contexts/audioContext'
import { lightTheme, darkTheme } from '../utils/theme'
import cfg from '../utils/config'
import Drawer from './drawer'

export default function Layout({ children }) {
  const darkmode = store.get('darkmode')
  const [radioMode, setRadioMode] = React.useState(true)
  const [audioSource, setAudioSource] = React.useState(cfg.urls.radio[0].audio)
  const [audioInfo, setAudioInfo] = React.useState(cfg.urls.radio[0].audioInfo)
  const [audioTitle, setAudioTitle] = React.useState('Silahkan Pilih Saluran')
  const [darkMode, setDarkMode] = React.useState(
    isUndefined(darkmode) ? false : darkmode
  )
  const [audioImage, setAudioImage] = React.useState(
    cfg.urls.logo[darkMode * 1]
  )
  let theme = darkMode ? darkTheme : lightTheme
  const toggleDarkMode = () => {
    store.set('darkmode', !darkMode)
    setDarkMode(!darkMode)
  }
  React.useEffect(() => {
    theme = darkMode ? darkTheme : lightTheme
  }, [darkMode])

  return (
    <AudioProvider
      value={{
        audioSource,
        setAudioSource,
        audioTitle,
        setAudioTitle,
        audioImage,
        setAudioImage,
        radioMode,
        setRadioMode,
        audioInfo,
        setAudioInfo,
        darkMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <Drawer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {children}
      </ThemeProvider>
    </AudioProvider>
  )
}
