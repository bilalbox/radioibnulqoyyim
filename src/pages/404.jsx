import React from "react"
import useMediaQuery from '@material-ui/core/useMediaQuery'

import AppContext from "../components/appContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cfg from "../utils/config"
import NotFound from "../components/404"

export default function NotFoundPage() {
  const [darkMode, setDarkMode ] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'))
  const [audioSource, setAudioSource] = React.useState("")
  const [trackName, setTrackName] = React.useState("")
  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, audioSource, setAudioSource, trackName, setTrackName }}>
      <Layout>
        <SEO title="404" />
        <NotFound />
      </Layout>
    </AppContext.Provider>
  )
}
