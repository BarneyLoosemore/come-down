import React from "react"

import { Container } from "./style"

type PageContentProps = {
  pageContent: { url: string; dimensions: { width: number; height: number } }
  pageTitle: {
    text: string
  }[]
}

export const PageContent: React.FC<PageContentProps> = ({
  pageTitle,
  pageContent,
}) => {
  return (
    <Container>
      {pageContent?.url ? (
        <img
          width="100%"
          height="100%"
          srcSet={`${pageContent.url}&w=400 400w, ${pageContent.url}&w=900 900w`}
          alt={pageTitle?.[0]?.text}
        />
      ) : null}
    </Container>
  )
}
