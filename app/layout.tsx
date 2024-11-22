"use client"
import type React from "react"
import "../assets/styles.css"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja_jp">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>kixixixixi</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
