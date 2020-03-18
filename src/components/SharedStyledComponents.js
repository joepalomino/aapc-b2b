import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const breakPoints = [576, 768, 992,1024, 1200]

export const mq = breakPoints.map(bp => `@media (min-width: ${bp}px)`)

const ContentSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`

const ContentContainer = styled.div(
  tw`mr-auto ml-auto bg-white max-w-screen-xl`,
  {
    paddingLeft: 15,
    paddingRight: 15,
    background: "#fff",
  }
)

const Header = styled.div(tw`text-center mx-w-4xl mt-0 mb-10 mx-auto`)

const H2 = styled.h2(
  tw`text-4xl leading-tight font-bold`,
  {
    [mq[2]]: {
      fontSize: '3rem'
    }
  }
)

export const Section = ({ children, headline = "", subheadline="" }) => (
  <ContentSection>
    <ContentContainer>
      {headline && (
        <Header>
          <H2>{headline}</H2>
          {
            subheadline && <p>{subheadline}</p>
          }
        </Header>
      )}
      {children}
    </ContentContainer>
  </ContentSection>
)

export const Button = styled.a({
  appearance: "none",
  background: "0 0",
  border: "none",
  cursor: "pointer",
  borderRadius: "6px",
  textAlign: "center",
  fontWeight: 700,
  lineHeight: 1.28571429,
  letterSpacing: ".8px",
  fontSize: ".875rem",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "19px 40px 20px",
  display: "block",
  width: "100%",
  transition:
    "box-shadow 420ms cubic-bezier(0.165, 0.84, 0.44, 1),color 420ms cubic-bezier(0.165, 0.84, 0.44, 1),background 420ms cubic-bezier(0.165, 0.84, 0.44, 1)",
  width: "auto",
  boxShadow: "none",
  backgroundColor: "#1169a2",
  color: "white",
  [mq[1]]: {
    display: "inline-block",
    whiteSpace: "nowrap",
    flexBasis: " auto",
  },
})
