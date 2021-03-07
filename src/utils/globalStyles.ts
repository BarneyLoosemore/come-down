import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1pc;
    background-size: 100%;
    background: linear-gradient(#121212, rgb(35 35 36));
    background-repeat: no-repeat;
    @media(max-width: 1000px){
      background-image: none;
      background: linear-gradient(#121212, rgb(35 35 36));
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
  p {
    margin: 0;
  }
`
