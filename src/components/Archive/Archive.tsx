import React from "react"
import Link from "next/link"

import { ContentBox } from "@components/ContentBox"

import { LinkText, LinksContainer } from "./style"

type Page = {
  id: string
  uid: string
  data: {
    page_title: { text: string }[]
  }
}

type ArchiveProps = {
  pages: Page[]
}

export const Archive: React.FC<ArchiveProps> = ({ pages }) => {
  const sortedPages = pages.sort((a, b) => Number(a.uid) - Number(b.uid))

  return (
    <ContentBox>
      <LinksContainer>
        {sortedPages?.length ? (
          sortedPages.map(({ uid, data: { page_title: pageTitle } }) => (
            <Link key={uid} href={`/pages/${uid}`}>
              <LinkText>{pageTitle?.[0]?.text}</LinkText>
            </Link>
          ))
        ) : (
          <h1 style={{ margin: "0 auto", color: "#121212" }}>
            No pages found for this chapter
          </h1>
        )}
      </LinksContainer>
    </ContentBox>
  )
}
