import React from "react"
import tw from "tailwind.macro"
import { Section, Button } from "./SharedStyledComponents"
import { CTALink } from "./CTALink"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const A = CTALink.withComponent('a')

const FeaturedText = ({
  data: {
    heading: {
      headline,
      subheadline
    },
    cta: {
      link,
      label
    }
  }
}) => (
  <Section headline={headline} subheadline={subheadline}>
    <div css={tw`text-center`}>
      <A href={link} theme='primary'>{label}</A>
    </div>
  </Section>
)
export default FeaturedText
