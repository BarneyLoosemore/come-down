import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-decoration: none;
  text-align: center;
  color: black;
  width: 400px;
  margin: 16px auto;
  font-size: 24px;
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

export const Archive = ({ data }) => {
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
          {sortedPages.length ? (
            sortedPages.map(({ node: { uid, data: { pageTitle } } }) => (
              <StyledLink key={uid} to={`/${uid}`}>
                {pageTitle.text}
              </StyledLink>
            ))
          ) : (
            <h1 style={{ margin: "0 auto", color: "#232323" }}>
              No pages found for chapter
            </h1>
          )}
        </div>
      </ContentBox>
    </Layout>
  )
}

Archive.propTypes = {
  data: PropTypes.shape({}),
}
