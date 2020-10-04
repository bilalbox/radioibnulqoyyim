import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"

export default function IndexPage() {
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
      <Landing />
    </Layout>
  )
}
