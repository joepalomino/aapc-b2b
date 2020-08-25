import React from "react"
import tw from "tailwind.macro"
import { Section, Button } from "./SharedStyledComponents"
import Img from "gatsby-image"
import { CTALink } from "./CTALink"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const A = CTALink.withComponent('a')

const Events = ({
  data: {
    heading: { headline, subheadline },
    events,
  },
}) => (
  <Section headline={headline} subheadline={subheadline}>
    <div css={tw`md:flex`}>
      {events.map(({ title, dateText, image, link }, idx) => (
        <div key={idx} css={tw`md:flex-1`}>
          <Img fluid={image.fluid} alt="" />
          <h3>{title}</h3>
          <p>{dateText}</p>
          <A as="a" href={link} theme="primary" css={!link && {cursor: 'default', opacity: '.4'}}>
            {link ? "Resgister Now" : "Registrations Coming Soon"}
          </A>
        </div>
      ))}
    </div>
  </Section>
)

export default Events
