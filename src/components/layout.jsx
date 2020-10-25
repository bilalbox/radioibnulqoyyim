import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import store from 'store/dist/store.modern'
import { isUndefined } from 'lodash'

import AudioContext from '../contexts/audioContext'
import { lightTheme, darkTheme } from '../utils/theme'
import cfg from '../utils/config'
import Drawer from './drawer'

export default function Layout({ children }) {
  const darkmode = store.get('darkmode')
  const [radioMode, setRadioMode] = React.useState(true)
  const [audioSource, setAudioSource] = React.useState(cfg.urls.radio1.audio)
  const [audioTitle, setAudioTitle] = React.useState('RADIO - SALURAN 1')
  const [audioImage, setAudioImage] = React.useState(cfg.urls.radio1.imageUrl)
  const [darkMode, setDarkMode] = React.useState(
    isUndefined(darkmode) ? false : darkmode
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
    <AudioContext.Provider
      value={{
        audioSource,
        setAudioSource,
        audioTitle,
        setAudioTitle,
        audioImage,
        setAudioImage,
        radioMode,
        setRadioMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <Drawer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {children}
      </ThemeProvider>
    </AudioContext.Provider>
  )
}
