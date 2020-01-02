import React, { useRef, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
// import { ContentBox } from "../components/ContentBox"
// import { PageNavigation } from "../components/PageNavigation"

export const query = graphql`
  query PageQuery($uid: String!) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            pageTitle: page_title
            pageContent: page_content
            chapterNumber: chapter_number
            pageNumber: page_number
          }
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TitleContainer = styled(Container)`
  font-size: 18px;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`

export const Page = ({ pageTitle, pageContent, _meta: { uid } }) => (
  <>
    <TitleContainer>
      <RichText render={pageTitle} />
    </TitleContainer>

    {/* <PageNavigation
      pageContent={pageContent}
      pageTitle={pageTitle}
      currentUid={Number(uid)}
    /> */}
  </>
)

export const PageContainer = ({ data }) => {
  if (
    !data ||
    !data.prismic ||
    !data.prismic.allPages ||
    !data.prismic.allPages.edges[0]
  ) {
    return null
  }

  return (
    <Layout>
      <SEO />
      {/* <ContentBox> */}
      <Page {...data.prismic.allPages.edges[0].node} />
      {/* </ContentBox> */}
    </Layout>
  )
}

export default PageContainer
