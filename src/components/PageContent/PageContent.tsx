import React from "react"
import Image from "next/image"

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
        <Image
          width={pageContent.dimensions.width}
          height={pageContent.dimensions.height}
          src={pageContent.url}
          alt={pageTitle?.[0]?.text}
        />
      ) : null}
    </Container>
  )
}
