import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Index from "../components/audioPage"

export default function IndexPage() {
  const {
    site: { siteMetadata },
    file: { childImageSharp },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
      <Layout>
        <SEO title={siteMetadata.title} />
        <Index />
      </Layout>
  )
}
