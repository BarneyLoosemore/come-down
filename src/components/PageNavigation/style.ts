import styled from "styled-components"

export const PageNavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 85%;
  margin: 0 auto 32px;
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`

export const LinkText = styled.p`
  display: flex;
  justify-content: center;
  width: 25%;
  color: ${({ disabled }) => (disabled ? "grey" : "black")};
  pointer-events: ${({ disabled }) => disabled && "none"};
  margin: 4px;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
