import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { NavBar } from "./NavBar"
import { LoadingSpinner } from "./LoadingSpinner"

const ContentContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;
  background-color: white;
  box-shadow: 15px 15px;
  @media (max-width: 920px) {
    box-shadow: none;
  }
`

const Container = styled.div`
  display: flex;
`

const Header = styled.div`
  color: white;
  font-size: 48px;
  font-weight: 800;
  transition: opacity 0.1s;
  text-align: center;
  :hover {
    opacity: 0.7;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: none;
`

export const ContentBox = ({ children }) => (
  <>
    <Container style={{ justifyContent: "center", margin: "25px" }}>
      <StyledLink to="/">
        <Header>Come Down</Header>
      </StyledLink>
    </Container>
    <ContentContainer style={{ minHeight: "700px" }}>
      <NavBar />
      {!children ? (
        <div
          style={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        children
      )}
    </ContentContainer>
  </>
)
