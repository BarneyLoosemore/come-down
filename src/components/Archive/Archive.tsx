import React from "react"
import Link from "next/link"

import { ContentBox } from "@components/ContentBox"
import { Meta } from "@components/Meta"

import { LinkText, LinksContainer, NoChapterHeader } from "./style"

type Page = {
  id: string
  uid: string
  data: {
    page_title: { text: string }[]
  }
}

type ArchiveProps = {
  pages: Page[]
  title: string
}

export const Archive: React.FC<ArchiveProps> = ({ pages, title }) => {
  const sortedPages = pages.sort((a, b) => Number(a.uid) - Number(b.uid))

  return (
    <>
      <Meta title={title} />
      <ContentBox>
        <LinksContainer>
          {sortedPages?.length ? (
            sortedPages.map(({ uid, data: { page_title: pageTitle } }) => (
              <Link key={uid} href={`/pages/${uid}`}>
                <LinkText>{pageTitle?.[0]?.text}</LinkText>
              </Link>
            ))
          ) : (
            <NoChapterHeader>No pages found for this chapter</NoChapterHeader>
          )}
        </LinksContainer>
      </ContentBox>
    </>
  )
}
