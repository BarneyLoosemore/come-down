import { ContentBox } from "@components/ContentBox"
import { redirect } from "@utils/redirect"

export default () => <ContentBox />

export const getServerSideProps = ({ res }) => {
  // HACK: for requests to '/', we redirect to the first page of the latest chapter
  // ideally would use `redirects()` in next.config.js, but this wasn't working on prod
  redirect({ res, target: "/pages/49" })
  return { props: {} }
}
