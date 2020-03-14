import React from "react"
import CardPrimary from "./card-primary"
import CardSecondary from "./card-secondary"
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const cardsMap = {
  primary: CardPrimary,
  secondary: CardSecondary,
}

const Cards = ({
  data: {
    layout,
    style,
    sectionHeadline: { headline },
    cards,
  },
}) => {
  const Card = cardsMap[style]

  return (
    <Section headline={headline}>
      <div className=" headline heading">
      </div>
      <div className="content-area">
        <ol
          css={{
            justifySelf: "center",
            alignContent: "start",
            [mq[1]]: {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: "0 -12px -50px",
              padding: 0,
            },
          }}
        >
          {cards.map(card => (
            <li
              key={card.id}
              css={{
                flex: "1 1 100%",
                margin: " 0 12px 50px",
                justifyContent: "undefined",
                textAlign: "undefined",
                [mq[1]]: {
                  display: "flex",
                  flex: "1 1 40%",
                  maxWidth: "45%",
                  margin: "0 12px 28px",
                },
                [mq[2]]: {
                  flex: "1 1 30%",
                  maxWidth: "40%",
                },
              }}
            >
              <Card data={card} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export default Cards
