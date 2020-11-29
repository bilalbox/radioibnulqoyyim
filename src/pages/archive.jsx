import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Archive from '../components/archivePage'

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
    <Layout>
      <SEO title={siteMetadata.title} />
      <Archive />
    </Layout>
  )
}