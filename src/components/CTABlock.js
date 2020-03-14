import React from "react"
import { Section, Button } from "./SharedStyledComponents"
import tw from "tailwind.macro"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

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
          <Button href={link}>{label}</Button>
        </div>
      </div>
    </div>
  </Section>
)

export default CTABlock
