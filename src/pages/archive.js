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
  color: #303030;
  margin: 32px;

  font-size: 24px;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
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

  const sortedPages = data.allPrismicPage.edges.sort((a, b) =>
    a.node.uid > b.node.uid ? 1 : -1
  )

  return (
    <Layout>
      <SEO title="Archive" />
      <ContentBox>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginTop: "40px" }} />
          {sortedPages.map(
            ({
              node: {
                uid,
                data: { pageTitle, pageContent },
              },
            }) => (
              <StyledLink key={uid} to={`/${uid}`}>
                {pageTitle.text}
                <img
                  style={{
                    width: "10%",
                    height: "10%",
                    border: "2px solid black",
                    marginLeft: "30px",
                  }}
                  src={pageContent.url}
                />
              </StyledLink>
            )
          )}
        </div>
      </ContentBox>
    </Layout>
  )
}

export default Archive
