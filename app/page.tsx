"use client"

import { QR } from "components/qr"
import React, { ComponentProps, FC, useState } from "react"

const Card: FC<ComponentProps<"section">> = ({ children, style, ...props }) => (
  <section
    style={{
      backfaceVisibility: "hidden",
      background: "#222",
      borderRadius: ".8rem",
      boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 2px 0px",
      cursor: "pointer",
      display: "flex",
      flexFlow: "column",
      height: "80dvh",
      gap: ".5rem",
      justifyContent: "center",
      maxWidth: "60rem",
      padding: "1rem",
      position: "absolute",
      transition: "all 0.9s",
      width: "90dvw",
      ...style,
    }}
    {...props}
  >
    <h1
      style={{
        color: "#99c",
        fontSize: ".75rem",
        fontWeight: "bold",
        height: "2rem",
        textAlign: "center",
      }}
    >
      @kixixixixi
    </h1>
    {children}
  </section>
)

const IndexPage: FC = () => {
  const [isTurnedOver, setIsTurnedOver] = useState<boolean>(false)
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100dvh",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <Card
          onClick={() => setIsTurnedOver(false)}
          style={{
            opacity: isTurnedOver ? 1 : 0,
            transform: isTurnedOver ? undefined : "rotateY(-180deg)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <QR />
          </div>
        </Card>
        <Card
          onClick={() => setIsTurnedOver(true)}
          style={{
            opacity: isTurnedOver ? 0 : 1,
            transform: isTurnedOver ? "rotateY(180deg)" : "rotateY(0)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                margin: "auto",
                maxWidth: "28rem",
                padding: "5rem 0",
                width: "100%",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  山本 翔平
                </h1>
                <p
                  style={{
                    color: "#999",
                    textAlign: "center",
                  }}
                >
                  Shohei Yamamoto
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  株式会社リロード 代表取締役社長
                </p>
                <p
                  style={{
                    color: "#999",
                    textAlign: "center",
                  }}
                >
                  Reload, Inc. CEO / Founder
                </p>
              </div>
            </div>
            <div
              style={{ maxWidth: "28rem", padding: "2rem 0", width: "100%" }}
            >
              <div
                style={{ display: "flex", flexFlow: "column", padding: "1rem" }}
              >
                <dl>
                  <dt>Email</dt>
                  <dd style={{ paddingLeft: "2rem" }}>yamamoto@reload.co.jp</dd>
                </dl>
                <dl>
                  <dt>Address</dt>
                  <dd style={{ paddingLeft: "2rem" }}>
                    東京都千代田区神田多町2-9-6 第2田中ビル
                  </dd>
                </dl>
                <dl>
                  <dt>Site</dt>
                  <dd style={{ paddingLeft: "2rem" }}>
                    <a href="//reload.co.jp">reload.co.jp</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default IndexPage
