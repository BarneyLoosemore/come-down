import { graphql } from "gatsby"

export { Archive as default } from "../../components/Archive"

export const query = graphql`
  query ArchiveQueryChapter1 {
    allPrismicPage(
      filter: {
        data: {
          page_title: {
            text: { regex: "/Chapter 01|Chapter 1|chapter 01|chapter 1/" }
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
