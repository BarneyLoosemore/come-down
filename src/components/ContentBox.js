import React from "react"
import styled from "styled-components"

import { NavBar } from "./NavBar"
import { LoadingSpinner } from "./LoadingSpinner"

const ContentContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  background-color: white;
  @media (max-width: 1000px) {
    box-shadow: none;
  }
`

export const ContentBox = ({ children }) => (
  <>
    <NavBar />
    <ContentContainer style={{ minHeight: "700px" }}>
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
