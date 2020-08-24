import React from "react"
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"
import Img from "gatsby-image"


/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const Events = ({
  data: {
    heading: { headline, subheadline },
    events
  },
}) => (
  <Section headline={headline} subheadline={subheadline}>
    <div css={tw`md:flex`}>
      {events.map(({title, disabled, dateText,image}) => (
        <div>
          <Img fluid={image.fluid} alt=""/>
          <h3>{title}</h3>
          <p>{dateText}</p>
        </div>
      ))}
    </div>
  </Section>
)

export default Events
