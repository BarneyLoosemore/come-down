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
  box-shadow: 0px 6px 28px rgba(0, 0, 0, 0.12),
    0px 15px 22px rgba(0, 0, 0, 0.14), 0px 8px 9px rgba(0, 0, 0, 0.2);
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
