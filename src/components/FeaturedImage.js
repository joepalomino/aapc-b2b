import React from "react"
import tw from "tailwind.macro"

import Img from "gatsby-image"
import { Section } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

function FeaturedImage({
  data: {
    header,
    image: { fluid },
  },
}) {
  return (
    <Section headline={header}>
      <Img fluid={fluid} alt="featured" css={tw`max-w-4xl m-auto`} />
    </Section>
  )
}

export default FeaturedImage
