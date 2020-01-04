import React from "react"
import { navigate } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"

const IndexPage = () => {
  typeof window !== "undefined" && navigate("/1/")
  return (
    <Layout>
      <SEO title="Home" />
      <ContentBox />
    </Layout>
  )
}

export default IndexPage
