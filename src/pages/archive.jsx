import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Archive from "../components/archive"

export default function ArchivePage() {
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
    <Layout id="page-wrap">
      <SEO title={siteMetadata.title} />
      <Archive />
    </Layout>
  )
}
