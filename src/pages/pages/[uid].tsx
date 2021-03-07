import React from "react"
import styled from "styled-components"
import Prismic from "@prismicio/client"

import { ContentBox } from "@components/ContentBox"
import { PageNavigation } from "@components/PageNavigation"
import { PageContent } from "@components/PageContent"

import { Client } from "../../../prismic-configuration"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TitleContainer = styled(Container)`
  margin-top: 40px;
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`

type PageProps = {
  uid: string
  numPages: number
  data: {
    page_title: { text: string }[]
    page_content: { url: string; dimensions: { width: number; height: number } }
  }
}

export const Page: React.FC<PageProps> = ({
  uid,
  numPages,
  data: { page_title: pageTitle, page_content: pageContent },
}) => (
  <>
    <TitleContainer>{pageTitle?.[0].text}</TitleContainer>
    <PageContent pageContent={pageContent} pageTitle={pageTitle} />
    <PageNavigation numPages={numPages} currentUid={Number(uid)} />
  </>
)

export const PageContainer = ({ doc, numPages }) => {
  if (!doc || !numPages) return null
  return (
    <ContentBox>
      <Page {...doc} numPages={numPages} />
    </ContentBox>
  )
}
export const getStaticProps = async ({ params }) => {
  const client = Client()
  const doc = await client.getByUID("page", params.uid, {})
  const pages = await client.query(
    Prismic.Predicates.at("document.type", "page")
  )
  const numPages = pages.total_results_size
  return {
    props: {
      doc,
      numPages,
    },
  }
}

export const getStaticPaths = async () => {
  const client = Client()
  const pages = await client.query(
    Prismic.Predicates.at("document.type", "page")
  )
  const paths = Array.from(new Array(pages.total_results_size)).map(
    (_, index) => ({
      params: { uid: (index + 1).toString() },
    })
  )

  return {
    paths,
    fallback: true,
  }
}

export default PageContainer
