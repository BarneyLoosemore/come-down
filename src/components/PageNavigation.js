import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"

import { useKey } from "../hooks/useKey"

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const NavButtonsContainer = styled(Container)`
  width: 85%;
  margin: 0 auto 32px;
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  width: 25%;
  color: ${({ disabled }) => disabled && "grey"};
  pointer-events: ${({ disabled }) => disabled && "none"};
  margin: 4px;
  :hover {
    opacity: 0.7;
  }
`

const ComicPageContent = styled.img`
  width: 100%;
  height: 100%;
`

const getPageUids = data =>
  data.allPrismicPage.edges.map(({ node: { uid } }) => uid)

export const PageNavigation = ({ currentUid, pageContent, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query ChapterQuery {
      allPrismicPage {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const leftPressed = useKey("ArrowLeft")
  const rightPressed = useKey("ArrowRight")

  const pageUids = getPageUids(data)

  const firstPage = Math.min(...pageUids)
  const lastPage = Math.max(...pageUids)
  const nextPage = currentUid + 1
  const previousPage = currentUid - 1

  const notFirstPage = currentUid > firstPage
  const notLastPage = currentUid < lastPage

  if (leftPressed && notFirstPage) {
    navigate(`/${previousPage}`)
  }
  if (rightPressed && notLastPage) {
    navigate(`/${nextPage}`)
  }

  return (
    <>
      <Container>
        <ComicPageContent src={pageContent.url} alt={pageTitle} />
      </Container>
      <NavButtonsContainer>
        <StyledLink to={`/${firstPage}`} disabled={!notFirstPage}>
          First
        </StyledLink>
        <StyledLink to={`/${previousPage}`} disabled={!notFirstPage}>
          Previous
        </StyledLink>
        <StyledLink to={`/${nextPage}`} disabled={!notLastPage}>
          Next
        </StyledLink>
        <StyledLink to={`/${lastPage}`} disabled={!notLastPage}>
          Last
        </StyledLink>
      </NavButtonsContainer>
    </>
  )
}

PageNavigation.propTypes = {
  currentUid: PropTypes.number,
  pageContent: PropTypes.shape({}),
  pageTitle: PropTypes.string,
}
