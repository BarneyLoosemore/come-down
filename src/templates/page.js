import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"
import { PageNavigation } from "../components/PageNavigation"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TitleContainer = styled(Container)`
  margin-top: 30px;
  font-size: 28px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`

export const Page = ({ uid, data: { pageTitle, pageContent } }) => (
  <>
    <TitleContainer>{pageTitle.text}</TitleContainer>
    <PageNavigation
      pageContent={pageContent}
      pageTitle={pageTitle}
      currentUid={Number(uid)}
    />
  </>
)

export const PageContainer = ({ data }) => {
  if (
    !data ||
    !data.allPrismicPage ||
    !data.allPrismicPage.edges[0] ||
    !data.allPrismicPage.edges[0].node
  ) {
    return null
  }

  return (
    <Layout>
      <SEO />
      <ContentBox>
        <Page {...data.allPrismicPage.edges[0].node} />
      </ContentBox>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            pageTitle: page_title {
              text
            }
            pageContent: page_content {
              alt
              url
            }
          }
        }
      }
    }
  }
`

export default PageContainer
