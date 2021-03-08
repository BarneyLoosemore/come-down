import React from "react"
import styled from "styled-components"
import Prismic from "@prismicio/client"
import { RichText, RichTextBlock } from "prismic-reactjs"

import { ContentBox } from "@components/ContentBox"

import { Client } from "../../prismic-configuration"

const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 60ch;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  p {
    font-family: Arial, Helvetica, sans-serif;
    margin: 8px;
  }
  iframe {
    width: 100%;
  }
  img {
    max-width: 100%;
  }
`

type AboutProps = {
  about: RichTextBlock[]
}

const About: React.FC<AboutProps> = ({ about }) => (
  <ContentBox>
    <Container>{RichText.render(about)}</Container>
  </ContentBox>
)

export const getStaticProps = async () => {
  const client = Client()
  const res = await client.query(
    Prismic.Predicates.at("document.type", "about")
  )
  const about = res?.results?.[0]?.data?.description
  return {
    props: { about },
  }
}

export default About
