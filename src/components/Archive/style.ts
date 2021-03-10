import styled from "styled-components"

export const LinkText = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-decoration: none;
  text-align: center;
  color: black;
  width: 400px;
  border-bottom: 1px solid #f4f4f4;
  margin: 10px auto;
  padding-bottom: 12px;
  font-size: 24px;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media (max-width: 640px) {
    width: 250px;
    font-size: 18px;
    img {
      width: 75px;
      height: 75px;
    }
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`

export const NoChapterHeader = styled.h1`
  margin: 0 auto;
  color: #121212;
`
