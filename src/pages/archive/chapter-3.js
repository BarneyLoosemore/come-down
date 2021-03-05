import { graphql } from "gatsby"

export { Archive as default } from "../../components/Archive"

export const query = graphql`
  query ArchiveQueryChapter3 {
    allPrismicPage(
      filter: {
        data: {
          page_title: {
            text: { regex: "/Chapter 03|Chapter 3|chapter 03|chapter 3/" }
          }
        }
      }
    ) {
      edges {
        node {
          data {
            pageTitle: page_title {
              text
            }
          }
          uid
        }
      }
    }
  }
`
