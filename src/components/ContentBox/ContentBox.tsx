import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { NavBar } from "@components/NavBar"
import { LoadingSpinner } from "@components/LoadingSpinner"

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 640px;
  background-color: white;
  box-shadow: 0px 6px 28px rgba(0, 0, 0, 0.12),
    0px 15px 22px rgba(0, 0, 0, 0.14), 0px 8px 9px rgba(0, 0, 0, 0.2);
`

export const ContentBox: React.FC = ({ children }) => (
  <>
    <NavBar />
    <ContentContainer>
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

ContentBox.propTypes = {
  children: PropTypes.node,
}
