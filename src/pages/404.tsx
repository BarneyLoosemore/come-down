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
      Page not found 😞
    </Container>
  </ContentBox>
)

export default NotFoundPage
