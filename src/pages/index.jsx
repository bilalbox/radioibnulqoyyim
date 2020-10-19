import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from '@material-ui/core/useMediaQuery'

import AppContext from "../components/appContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cfg from "../utils/config"
import Index from "../components/landing"

export default function IndexPage() {
  const [darkMode, setDarkMode ] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'))
  const [audioSource, setAudioSource] = React.useState("")
  const [trackName, setTrackName] = React.useState("")
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, audioSource, setAudioSource, trackName, setTrackName }}>
      <Layout>
        <SEO title={siteMetadata.title} />
        <Index />
      </Layout>
    </AppContext.Provider>
  )
}
