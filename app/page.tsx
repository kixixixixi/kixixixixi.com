import React from "react"
import { NextPage } from "next"

const IndexPage: NextPage = () => {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <section
          style={{
            background: "#e8e8e8",
            border: "solid 1px #0047ab",
            borderRadius: "1rem",
            boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 2px 0px",
            display: "flex",
            flexFlow: "column",
            gap: ".5rem",
            justifyContent: "space-around",
            maxWidth: "60rem",
            padding: "1rem",
            width: "90vw",
          }}
        >
          <h1
            style={{
              color: "#0047ab",
              fontSize: ".75rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            @kixixixixi
          </h1>
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
                    <a href="//relaod.co.jp">relaod.co.jp</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IndexPage
