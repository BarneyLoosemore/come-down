import { GlobalStyles } from "@utils/globalStyles"
import { Footer } from "@components/Footer"

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
