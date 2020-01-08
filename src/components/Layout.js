import React from "react"
import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import comedownBackgroundImage from "../images/ComedownBackground.jpg"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-size: 140%;
    background-image: url(${({ backgroundImage }) =>
      backgroundImage ? backgroundImage : comedownBackgroundImage});
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  a:focus & {
    outline: 5px solid orange;
  }
`

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,800&display=swap"
        rel="stylesheet"
      ></link>
      <main>{children}</main>
      <div style={{ marginBottom: "50px" }} />
      <footer style={{ margin: "8px", color: "white", fontSize: "14px" }}>
        {data.site && data.site.siteMetadata.title}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
