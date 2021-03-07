import React from "react"
import styled from "styled-components"

import { ContentBox } from "@components/ContentBox"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px;
`

const NotFoundPage: React.FC = () => (
  <ContentBox>
    <Container>
      <h1>NOT FOUND</h1>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Container>
  </ContentBox>
)

export default NotFoundPage
