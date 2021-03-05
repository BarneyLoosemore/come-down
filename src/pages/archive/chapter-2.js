import { graphql } from "gatsby"

export { Archive as default } from "../../components/Archive"

export const query = graphql`
  query ArchiveQueryChapter2 {
    allPrismicPage(
      filter: {
        data: {
          page_title: {
            text: { regex: "/Chapter 02|Chapter 2|chapter 02|chapter 2/" }
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