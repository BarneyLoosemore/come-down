import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { NavBar } from "./NavBar"
import { LoadingSpinner } from "./LoadingSpinner"

const ContentContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  background-color: white;
  box-shadow: 15px 15px;
  @media (max-width: 1000px) {
    box-shadow: none;
  }
`

const Container = styled.div`
  display: flex;
`

const Header = styled.div`
  color: black;
  font-size: 64px;
  font-weight: 800;
  text-align: center;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
  @media (max-width: 640px) {
    font-size: 42px;
    -webkit-text-stroke-width: 2px;
  }
  transition: color 0.1s ease-in-out;
  :hover {
    -webkit-text-stroke-color: black;
    color: white;
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
