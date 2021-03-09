import { useRouter } from "next/router"

import { ContentBox } from "@components/ContentBox"

export default () => {
  const router = useRouter()

  // HACK: for requests to '/', we redirect to the first page of the latest chapter
  // ideally would use `redirects()` in next.config.js, but this wasn't working on prod
  if (typeof window !== "undefined") {
    router.replace("/pages/49")
  }
  return <ContentBox />
}
export const getStaticProps = ctx => {
  return { props: {} }
}
