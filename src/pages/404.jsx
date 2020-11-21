import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NotFound from '../components/404'

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" />
      <NotFound />
    </Layout>
  )
}
