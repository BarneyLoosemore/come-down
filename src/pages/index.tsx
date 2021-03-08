import { useRouter } from "next/router"

export default () => {
  const router = useRouter()

  // for requests to '/', we redirect to the first page of the latest chapter
  typeof window !== "undefined" && router.replace("/pages/49")
  return null
}

export const getStaticProps = () => {
  return { props: {} }
}
