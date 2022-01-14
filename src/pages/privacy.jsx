import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Privacy from '../components/privacy'

export default function AboutPage() {
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
    <Layout>
      <SEO title={siteMetadata.title} />
      <Privacy />
    </Layout>
  )
}
