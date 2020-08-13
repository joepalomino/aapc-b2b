import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const breakPoints = [576, 768, 992,1024, 1200]

export const mq = breakPoints.map(bp => `@media (min-width: ${bp}px)`)

export const ContentSection = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.backgroundColor}
`

export const ContentContainer = styled.div(
  tw`mr-auto ml-auto max-w-screen-xl`,
  {
    paddingLeft: 15,
    paddingRight: 15,
  }
)

export const Header = styled.div(tw`text-center max-w-4xl mt-0 mb-10 mx-auto`)

const H2 = styled.h2(
  tw`text-4xl leading-tight font-bold`,
  {
    [mq[2]]: {
      fontSize: '3rem'
    }
  }
)

export const Section = ({ children, headline = "", subheadline="", backgroundColor="white" }) => (
  <ContentSection backgroundColor={backgroundColor}>
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

export const colors = {
  "aapc-blue": {
    light: "#0098d0",
    default: "#1169a2"
  }
}