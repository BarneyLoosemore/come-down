import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-decoration: none;
  color: black;
  width: 400px;
  margin: 32px auto;
  font-size: 24px;
  justify-content: space-between;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 640px) {
    width: 250px;
    font-size: 18px;
    img {
      width: 75px;
      height: 75px;
    }
  }
`

const ArchiveImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid black;
`

export const query = graphql`
  query ArchiveQuery {
    allPrismicPage {
      edges {
        node {
          data {
            pageTitle: page_title {
              text
            }
            pageContent: page_content {
              dimensions {
                height
                width
              }
              url
            }
          }
          uid
        }
      }
    }
  }
`

const Archive = ({ data }) => {
  if (!data || !data.allPrismicPage || !data.allPrismicPage.edges) {
    return null
  }

  const sortedPages = data.allPrismicPage.edges.sort(
    (a, b) => a.node.uid - b.node.uid
  )

  return (
    <Layout>
      <SEO title="Archive" />
      <ContentBox>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "40px 0" }}
        >
          {sortedPages.map(
            ({
              node: {
                uid,
                data: { pageTitle, pageContent },
              },
            }) => (
              <StyledLink key={uid} to={`/${uid}`}>
                {pageTitle.text}
                <ArchiveImage src={pageContent.url} />
              </StyledLink>
            )
          )}
        </div>
      </ContentBox>
    </Layout>
  )
}

export default Archive
