import React from "react"
import Head from "next/head"

export const Meta: React.FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>Come Down | {title}</title>
  </Head>
)
