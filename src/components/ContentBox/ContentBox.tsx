import React from "react"
import PropTypes from "prop-types"

import { NavBar } from "@components/NavBar"
import { LoadingSpinner } from "@components/LoadingSpinner"

import { ContentContainer, SpinnerContainer } from "./style"

export const ContentBox: React.FC = ({ children }) => (
  <>
    <NavBar />
    <ContentContainer>
      {!children ? (
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
      ) : (
        children
      )}
    </ContentContainer>
  </>
)

ContentBox.propTypes = {
  children: PropTypes.node,
}
