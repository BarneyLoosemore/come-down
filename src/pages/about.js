import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"

export const query = graphql`
  query AboutQuery {
    allPrismicComicPost {
      edges {
        node {
          data {
            about {
              html
              text
              raw {
                type
                text
              }
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  margin: 24px;
  text-align: center;
`

const About = ({ data }) => {
  if (
    !data ||
    !data.allPrismicComicPost ||
    !data.allPrismicComicPost.edges[0] ||
    !data.allPrismicComicPost.edges[0].node ||
    !data.allPrismicComicPost.edges[0].node.data
  ) {
    return null
  }

  return (
    <Layout>
      <SEO title="About" />
      <ContentBox>
        <Container>
          {data.allPrismicComicPost.edges[0].node.data.about.text}
        </Container>
      </ContentBox>
    </Layout>
  )
}

export default About
