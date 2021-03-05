import React from "react"
import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "../images/SubtractBG.png"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-size: 100%;
    background-image: url(${BackgroundImage});
    background-color: #232323;
    background-repeat: no-repeat;
    @media(max-width: 1000px){
      background-image: none;
    }
  }
  main {
    height: 100%;
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
