import Prismic from "@prismicio/client"

export { Archive as default } from "@components/Archive"

import { Client } from "../../../prismic-configuration"

export const getStaticProps = async () => {
  const client = Client()
  const response = await client.query(
    Prismic.Predicates.at("document.type", "page"),
    { pageSize: 100 }
  )

  const pages = response.results.filter(res =>
    res?.slugs?.[0].match(/chapter-03|chapter-3/)
  )
  return {
    props: {
      pages,
      title: "Chapter 3",
    },
  }
}
