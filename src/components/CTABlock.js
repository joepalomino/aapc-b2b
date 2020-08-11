import React from "react"
import { Section, Button } from "./SharedStyledComponents"
import tw from "tailwind.macro"
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

const ButtonLink = Button.withComponent(Link)
const CTABlock = ({
  data: {
    headline,
    cta: { link, label },
  },
}) => (
  <Section>
    <div css={tw`rounded-lg px-16 py-10 bg-aapc-blue-lighter`}>
      <div css={tw`text-center m-auto max-w-2xl`}>
        <h3 css={tw` text-2xl md:text-4xl font-bold mb-5`}>{headline}</h3>
        <div>
          <ButtonLink to={link}>{label}</ButtonLink>
        </div>
      </div>
    </div>
  </Section>
)

export default CTABlock
