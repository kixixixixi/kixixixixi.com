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
      justifyContent: "space-evenly",
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
        left: "1rem",
        position: "absolute",
        textAlign: "center",
        top: ".5rem",
      }}
    >
      @kixixixixi
    </h1>
    {children}
  </section>
)

const DefinitionDescription: FC<ComponentProps<"dd">> = ({
  style,
  ...props
}) => (
  <dd
    style={{ display: "flex", gap: ".5rem", paddingLeft: "2rem", ...style }}
    {...props}
  />
)

const Separator: FC<ComponentProps<"div">> = ({ ...props }) => (
  <div style={{}} {...props}>
    /
  </div>
)

const WeekLine: FC<ComponentProps<"p">> = ({ style, ...props }) => (
  <p
    style={{
      color: "#888",
      textAlign: "center",
      ...style,
    }}
    {...props}
  />
)

const ExternalLink: FC<ComponentProps<"a">> = ({
  style,
  children,
  ...props
}) => (
  <a
    style={{ ...style }}
    onClick={(e) => e.stopPropagation()}
    aria-hidden={true}
    target="_blank"
    {...props}
  >
    {children}
  </a>
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
                padding: "2rem 0",
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
                <WeekLine>Shohei Yamamoto</WeekLine>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  株式会社リロード 代表取締役社長
                </p>
                <WeekLine>Reload, Inc. CEO / Founder</WeekLine>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  FFFFF Cafe Manager
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
                  <DefinitionDescription>
                    <a href="mailto:yamamoto@reload.co.jp">
                      yamamoto@reload.co.jp
                    </a>
                  </DefinitionDescription>
                </dl>
                <dl>
                  <dt>Address</dt>
                  <DefinitionDescription>
                    東京都千代田区神田多町2-9-6 第2田中ビル
                  </DefinitionDescription>
                </dl>
                <dl>
                  <dt>Site</dt>
                  <DefinitionDescription>
                    <ExternalLink href="//reload.co.jp">
                      reload.co.jp
                    </ExternalLink>
                    <Separator />
                    <ExternalLink href="//fffff-cafe.com">
                      FFFFF Cafe
                    </ExternalLink>
                  </DefinitionDescription>
                </dl>
                <dl>
                  <dt>Account</dt>
                  <DefinitionDescription>
                    <ExternalLink href="//github.com/kixixixixi">
                      Github
                    </ExternalLink>
                    <Separator />
                    <ExternalLink href="//facebook.com/kixixixixi">
                      Facebook
                    </ExternalLink>
                    <Separator />
                    <ExternalLink href="//x.com/kixixixixi">X</ExternalLink>
                  </DefinitionDescription>
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
