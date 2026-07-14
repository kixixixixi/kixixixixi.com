"use client"

import { QR } from "components/qr"
import React, { ComponentProps, FC, useState } from "react"

const Card: FC<ComponentProps<"section">> = ({ children, style, ...props }) => (
  <section
    style={{
      backfaceVisibility: "hidden",
      background: "#161616",
      borderRadius: ".8rem",
      boxShadow:
        "0 1px 2px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.45), 0 24px 60px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexFlow: "column",
      height: "80dvh",
      gap: ".5rem",
      justifyContent: "space-evenly",
      maxWidth: "60rem",
      overflow: "hidden",
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

const FlipButton: FC<ComponentProps<"button">> = ({ style, ...props }) => (
  <button
    aria-label="カードを反転"
    style={{
      alignItems: "center",
      background: "#333",
      border: "none",
      borderRadius: "50%",
      bottom: "1rem",
      color: "#99c",
      cursor: "pointer",
      display: "flex",
      fontSize: "1.2rem",
      height: "2.5rem",
      justifyContent: "center",
      position: "absolute",
      right: "1rem",
      width: "2.5rem",
      ...style,
    }}
    {...props}
  >
    ⇄
  </button>
)

const DefinitionTerm: FC<ComponentProps<"dt">> = ({ style, ...props }) => (
  <dt
    style={{
      color: "#778",
      fontSize: ".7rem",
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      ...style,
    }}
    {...props}
  />
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
          style={{
            opacity: isTurnedOver ? 1 : 0,
            transform: isTurnedOver ? undefined : "rotateY(-180deg)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <QR />
          </div>
          <FlipButton onClick={() => setIsTurnedOver(false)} />
        </Card>
        <Card
          style={{
            opacity: isTurnedOver ? 0 : 1,
            transform: isTurnedOver ? "rotateY(180deg)" : "rotateY(0)",
          }}
        >
          <FlipButton onClick={() => setIsTurnedOver(true)} />
          <div
            style={{
              display: "flex",
              flex: 1,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                background: "#148",
                display: "flex",
                flex: "1 1 18rem",
                flexFlow: "column",
                justifyContent: "center",
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
                  <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    株式会社リロード
                  </span>
                  <br />
                  代表取締役社長
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
              style={{
                display: "flex",
                flex: "1 1 18rem",
                flexFlow: "column",
                justifyContent: "center",
                maxWidth: "28rem",
                padding: "2rem 0",
                width: "100%",
              }}
            >
              <div
                style={{ display: "flex", flexFlow: "column", padding: "1rem" }}
              >
                <dl>
                  <DefinitionTerm>Email</DefinitionTerm>
                  <DefinitionDescription>
                    <a href="mailto:yamamoto@reload.co.jp">
                      yamamoto@reload.co.jp
                    </a>
                  </DefinitionDescription>
                </dl>
                <dl>
                  <DefinitionTerm>Address</DefinitionTerm>
                  <DefinitionDescription>
                    東京都千代田区神田佐久間町3-37-1 山茂登ビル3F
                  </DefinitionDescription>
                </dl>
                <dl>
                  <DefinitionTerm>Site</DefinitionTerm>
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
                  <DefinitionTerm>Account</DefinitionTerm>
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
