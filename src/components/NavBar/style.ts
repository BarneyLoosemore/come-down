import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 32px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 24px 0;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-evenly;
    margin-top: 16px;
  }
`

export const HeaderLink = styled.p`
  transition: opacity 0.1s ease-in-out;
  margin: 16px 0;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const sharedInternalLinkStyles = css`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: ${({ active }) => (active ? "grey" : "white")};
  cursor: pointer;
`

export const About = styled.p`
  ${sharedInternalLinkStyles};
  @media (max-width: 640px) {
    font-size: 14px;
  }
  transition: opacity 0.1s ease-in-out;
  :hover {
    opacity: 0.7;
  }
`

export const Archive = styled.p`
  ${sharedInternalLinkStyles};
  border: none;
  background: none;
  @media (max-width: 640px) {
    font-size: 14px;
  }
  transition: opacity 0.1s ease-in-out;
  :hover {
    div:nth-of-type(1) {
      opacity: 0.7;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 640px) {
    :focus {
      opacity: 0.7;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
export const ArchiveContents = styled.div`
  display: none;
  position: absolute;
  z-index: 999;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: 105px;
  padding: 12px 0;
  background: #121212;
  @media (max-width: 640px) {
    min-width: 0;
    margin-left: -10px;
    padding: 12px 6px;
  }
`

export const ChapterLink = styled.p`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  margin: 4px;
  color: ${({ active }) => (active ? "grey" : "white")};
  transition: opacity 0.1s ease-in-out;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 640px) {
    font-size: 14px;
  }
`

export const SocialMediaLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  display: flex;
  align-items: center;
  transition: opacity 0.1s;
  :hover {
    opacity: 0.7;
  }
`
