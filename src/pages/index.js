import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ContentBox } from "../components/ContentBox"

const StyledLink = styled(Link)`
  :hover {
    opacity: 0.7;
  }
  font-size: 48px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 32px 0;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px;
  @media(max-width: 640px){
    margin 75px;
  };
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentBox>
      <Container>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/1">Comic</StyledLink>
      </Container>
    </ContentBox>
  </Layout>
)

export default IndexPage
