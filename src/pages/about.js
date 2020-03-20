import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"

export const query = graphql`
  query AboutQuery {
    allPrismicAbout {
      edges {
        node {
          data {
            description {
              html
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  margin: 24px 48px;
  text-align: center;
  iframe {
    width: 100%;
  }
  img {
    max-width: 100%;
  }
`

const About = ({ data }) => {
  if (
    !data ||
    !data.allPrismicAbout ||
    !data.allPrismicAbout.edges[0] ||
    !data.allPrismicAbout.edges[0].node ||
    !data.allPrismicAbout.edges[0].node.data ||
    !data.allPrismicAbout.edges[0].node.data.description
  ) {
    return null
  }

  return (
    <Layout>
      <SEO title="About" />
      <ContentBox>
        <Container>
          {parse(data.allPrismicAbout.edges[0].node.data.description.html)}
        </Container>
      </ContentBox>
    </Layout>
  )
}

export default About
