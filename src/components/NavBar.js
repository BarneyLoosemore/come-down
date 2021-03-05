import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const ExternalLink = ({ href, children }) => {
  const trackExternalClick = () => {
    trackCustomEvent({
      category: "External Link",
      action: "Click",
      label: href,
    })
  }
  return (
    <SocialMediaLink onClick={trackExternalClick} href={href}>
      {children}
    </SocialMediaLink>
  )
}

const Instagram = () => (
  <svg
    width="2.2em"
    height="2.2em"
    viewBox="0 0 200 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M200.942 28.902C198.929 23.4468 195.717 18.5091 191.544 14.456C187.491 10.2828 182.557 7.0711 177.098 5.05794C172.671 3.33857 166.021 1.29203 153.771 0.734486C140.521 0.130205 136.548 0 103.002 0C69.4523 0 65.4794 0.126866 52.232 0.731148C39.9828 1.29203 33.329 3.33857 28.9054 5.05794C23.4468 7.0711 18.5091 10.2828 14.4594 14.456C10.2861 18.5091 7.07444 23.4435 5.05794 28.902C3.33857 33.329 1.29203 39.9828 0.734486 52.232C0.130205 65.4794 0 69.4523 0 103.002C0 136.548 0.130205 140.521 0.734486 153.771C1.29203 166.021 3.33857 172.671 5.05794 177.098C7.07444 182.557 10.2828 187.491 14.456 191.544C18.5091 195.717 23.4435 198.929 28.902 200.942C33.329 202.665 39.9828 204.711 52.232 205.269C65.4794 205.873 69.449 206 102.998 206C136.551 206 140.524 205.873 153.768 205.269C166.017 204.711 172.671 202.665 177.098 200.942C188.055 196.715 196.715 188.055 200.942 177.098C202.661 172.671 204.708 166.021 205.269 153.771C205.873 140.521 206 136.548 206 103.002C206 69.4523 205.873 65.4794 205.269 52.232C204.711 39.9828 202.665 33.329 200.942 28.902Z"
      fill="black"
    />
    <path
      d="M138 103C138 122.33 122.33 138 103 138C83.6696 138 68 122.33 68 103C68 83.6696 83.6696 68 103 68C122.33 68 138 83.6696 138 103Z"
      fill="#F3BF4E"
    />
    <path
      d="M184.777 41.1318C183.096 36.5769 180.414 32.4542 176.93 29.0701C173.546 25.5856 169.426 22.904 164.868 21.2231C161.172 19.7875 155.619 18.0788 145.392 17.6133C134.328 17.1087 131.011 17 103.001 17C74.9893 17 71.6722 17.1059 60.6112 17.6105C50.3837 18.0788 44.8281 19.7875 41.1346 21.2231C36.5769 22.904 32.4542 25.5856 29.0729 29.0701C25.5884 32.4542 22.9068 36.5742 21.2231 41.1318C19.7875 44.8281 18.0788 50.3837 17.6133 60.6112C17.1087 71.6722 17 74.9893 17 103.001C17 131.011 17.1087 134.328 17.6133 145.392C18.0788 155.619 19.7875 161.172 21.2231 164.868C22.9068 169.426 25.5856 173.546 29.0701 176.93C32.4542 180.414 36.5742 183.096 41.1318 184.777C44.8281 186.215 50.3837 187.924 60.6112 188.39C71.6722 188.894 74.9865 189 102.999 189C131.013 189 134.331 188.894 145.389 188.39C155.616 187.924 161.172 186.215 164.868 184.777C174.017 181.248 181.248 174.017 184.777 164.868C186.212 161.172 187.921 155.619 188.39 145.392C188.894 134.328 189 131.011 189 103.001C189 74.9893 188.894 71.6722 188.39 60.6112C187.924 50.3837 186.215 44.8281 184.777 41.1318ZM103.001 156.865C73.2499 156.865 49.132 132.75 49.132 102.999C49.132 73.2471 73.2499 49.132 103.001 49.132C132.75 49.132 156.868 73.2471 156.868 102.999C156.868 132.75 132.75 156.865 103.001 156.865ZM158.998 59.5909C152.045 59.5909 146.409 53.9545 146.409 47.0024C146.409 40.0502 152.045 34.4138 158.998 34.4138C165.95 34.4138 171.586 40.0502 171.586 47.0024C171.583 53.9545 165.95 59.5909 158.998 59.5909Z"
      fill="#DD3976"
    />
  </svg>
)

const Twitter = () => (
  <svg
    width="2.2em"
    height="2.2em"
    viewBox="0 0 216 175"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M193.895 43.5929C193.98 45.4872 194.022 47.3903 194.022 49.3023C194.022 107.68 149.446 174.997 67.9294 175C42.9019 175 19.6125 167.687 0 155.155C3.46762 155.563 6.99711 155.766 10.5708 155.766C31.3353 155.766 50.444 148.706 65.6137 136.855C46.2133 136.497 29.8563 123.724 24.2115 106.17C26.9131 106.687 29.6913 106.969 32.5402 106.969C36.5853 106.969 40.5037 106.426 44.2276 105.412C23.9493 101.365 8.67347 83.4999 8.67347 62.1073C8.67347 61.9076 8.67347 61.7284 8.67936 61.5434C14.6512 64.8533 21.4804 66.8446 28.7515 67.0678C16.852 59.1527 9.02995 45.6223 9.02995 30.2944C9.02995 22.2003 11.2248 14.6171 15.0313 8.08831C36.8858 34.8203 69.5468 52.4007 106.38 54.2481C105.62 51.0116 105.228 47.64 105.228 44.1744C105.228 19.7861 125.076 0 149.55 0C162.298 0 173.811 5.37165 181.898 13.9592C191.995 11.9739 201.475 8.29683 210.04 3.2365C206.726 13.5481 199.702 22.2003 190.551 27.6718C199.516 26.6027 208.06 24.2326 216 20.7142C210.069 29.5749 202.548 37.3578 193.895 43.5929Z"
      fill="#DD3976"
    />
  </svg>
)

const Kofi = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="2.2em"
    width="2.2em"
    viewBox="0 0 65 65"
  >
    <g fill="none" transform="matrix(1.9656019 0 0 1.9656019 0 -.0000006)">
      <circle cx="16.280001" cy="16.280001" fill="#29abe0" r="16.280001" />
      <path
        d="m22.257931 8.8h1.607617c3.100776 0 5.614452 2.513676 5.614452 5.614452v.330015c0 3.100776-2.513676 5.614452-5.614452 5.614452h-1.607617v1.689795c0 1.431128-1.160158 2.591286-2.591286 2.591286h-12.2353593c-1.4311276 0-2.5912857-1.160158-2.5912857-2.591286v-11.953071c0-.7155639.5800791-1.295643 1.2956429-1.295643zm0 2.996757v5.565405h1.465573c1.536844 0 2.782703-1.245858 2.782703-2.782702 0-1.536845-1.245859-2.782703-2.782703-2.782703z"
        fill="#fff"
      />
    </g>
    <path
      d="m8.36 5.2768458c.4002942-1.1712306 1.3489414-1.7568458 2.845941-1.7568458 2.2455 0 3.077965 2.7936503 1.900934 4.62-.784687 1.2175665-2.366979 2.757567-4.746875 4.62-2.3798961-1.862433-3.9621877-3.4024335-4.746875-4.62-1.1770309-1.8263497-.3445663-4.62 1.9009337-4.62 1.4969999 0 2.4456471.5856152 2.8459413 1.7568458z"
      fill="#ff5e5b"
      transform="matrix(1.9656019 0 0 1.9656019 9.513513196 17.29729612)"
    />
    <g
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      transform="matrix(1.9656019 0 0 1.9656019 0 -.0000006)"
    >
      <circle cx="16.280001" cy="16.280001" fill="#29abe0" r="16.280001" />
      <path
        d="m22.257931 8.8h1.607617c3.100776 0 5.614452 2.513676 5.614452 5.614452v.330015c0 3.100776-2.513676 5.614452-5.614452 5.614452h-1.607617v1.689795c0 1.431128-1.160158 2.591286-2.591286 2.591286h-12.2353593c-1.4311276 0-2.5912857-1.160158-2.5912857-2.591286v-11.953071c0-.7155639.5800791-1.295643 1.2956429-1.295643zm0 2.996757v5.565405h1.465573c1.536844 0 2.782703-1.245858 2.782703-2.782702 0-1.536845-1.245859-2.782703-2.782703-2.782703z"
        fill="#fff"
      />
    </g>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m8.36 5.2768458c.4002942-1.1712306 1.3489414-1.7568458 2.845941-1.7568458 2.2455 0 3.077965 2.7936503 1.900934 4.62-.784687 1.2175665-2.366979 2.757567-4.746875 4.62-2.3798961-1.862433-3.9621877-3.4024335-4.746875-4.62-1.1770309-1.8263497-.3445663-4.62 1.9009337-4.62 1.4969999 0 2.4456471.5856152 2.8459413 1.7568458z"
      fill="#ff5e5b"
      transform="matrix(1.9656019 0 0 1.9656019 9.513513196 17.29729612)"
    />
  </svg>
)

export const NavBar = () => (
  <Container>
    <Header>Come Down</Header>
    <LinkContainer>
      <NavLink to="/about" activeStyle={{ color: "grey" }} partiallyActive>
        ABOUT
      </NavLink>
      <Archive>
        ARCHIVE
        <ArchiveContents>
          <ArchiveLink to="/archive/chapter-1">Chapter 1</ArchiveLink>
          <ArchiveLink to="/archive/chapter-2">Chapter 2</ArchiveLink>
          <ArchiveLink to="/archive/chapter-3">Chapter 3</ArchiveLink>
        </ArchiveContents>
      </Archive>

      <ExternalLink href="https://twitter.com/solasimpsonn">
        <Twitter />
      </ExternalLink>

      <ExternalLink href="https://www.instagram.com/solasimpson/?hl=en">
        <Instagram />
      </ExternalLink>

      <ExternalLink href="https://ko-fi.com/solasimpson?fbclid=IwAR2m_f9V6p0UpVwxVA9aggAfnNZStH-VNSQdbmNkHO_BYvrw-_kUOZxe54M">
        <Kofi />
      </ExternalLink>
    </LinkContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 32px 0;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Header = styled(Link).attrs(() => ({
  to: "/",
}))`
  text-decoration: none;
  color: white;
  font-size: 64px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 42px;
  }
  transition: opacity 0.1s ease-in-out;
  :hover {
    opacity: 0.7;
  }
`

const LinkContainer = styled.div`
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

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: white;
  @media (max-width: 640px) {
    font-size: 18px;
  }
  transition: opacity 0.1s ease-in-out;
  :hover {
    opacity: 0.7;
  }
`

const SocialMediaLink = styled.a.attrs(() => ({
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

const Archive = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: white;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    font-size: 18px;
  }
  transition: opacity 0.1s ease-in-out;
  :hover {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 640px) {
    :focus {
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
const ArchiveContents = styled.div`
  display: none;
  position: absolute;
  z-index: 999;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: 105px;
  padding: 12px 0;
  background-color: #232323;
  @media (max-width: 640px) {
    min-width: 0;
    padding: 12px 6px;
  }
`

const ArchiveLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 4px;
  transition: opacity 0.1s ease-in-out;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 640px) {
    font-size: 14px;
  }
`
