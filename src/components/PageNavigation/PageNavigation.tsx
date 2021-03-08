import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { isMobile } from "@utils/isMobile"

import { PageNavContainer, LinkText } from "./style"

type NavigationLinkProps = {
  page: number
  text: string
  disabled: boolean
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  page,
  text,
  disabled,
}) => (
  <Link href={`/pages/${page}`} scroll={!isMobile()}>
    <LinkText disabled={disabled}>{text}</LinkText>
  </Link>
)

type PageNavigationProps = {
  currentUid: number
  numPages: number
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentUid,
  numPages,
}) => {
  const router = useRouter()

  const firstPage = 1
  const lastPage = numPages
  const nextPage = currentUid + 1
  const previousPage = currentUid - 1

  const notFirstPage = currentUid > firstPage
  const notLastPage = currentUid < lastPage

  const onKeyDown = ({ key }) => {
    if (key === "ArrowLeft" && notFirstPage) {
      router.push(`/pages/${previousPage}`)
    }
    if (key === "ArrowRight" && notLastPage) {
      router.replace(`/pages/${nextPage}`)
    }
  }

  useEffect(() => {
    router.prefetch(`/pages/${nextPage}`)
    router.prefetch(`/pages/${previousPage}`)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [currentUid])

  return (
    <PageNavContainer>
      <NavigationLink page={firstPage} text="First" disabled={!notFirstPage} />
      <NavigationLink
        page={previousPage}
        text="Previous"
        disabled={!notFirstPage}
      />
      <NavigationLink page={nextPage} text="Next" disabled={!notLastPage} />
      <NavigationLink page={lastPage} text="Last" disabled={!notLastPage} />
    </PageNavContainer>
  )
}
