import React from "react"
import styled, { keyframes } from "styled-components"

const blink = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  
  25% {
    opacity: 0.8;
  }

  50% {
    opacity: 0.2;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const Dot = styled.div`
  animation-delay: ${({ delay }) => delay}s;
  width: 20px;
  height: 20px;
  margin: 8px;
  background-color: black;
  border-radius: 50%;
  animation-name: ${blink};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`

const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LoadingSpinner = () => (
  <DotContainer>
    <Dot delay={0.4} />
    <Dot delay={0.6} />
    <Dot delay={0.8} />
  </DotContainer>
)
