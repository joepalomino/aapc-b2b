import React from "react"

import Img from "gatsby-image"
import { Section } from "./SharedStyledComponents"

/** @jsx jsx */
import {jsx, css } from '@emotion/core'
 
function FeaturedImage({
  data: {
    header,
    image: { fluid },
  },
}) {
  return (
    <Section headline={header}>
      <Img fluid={fluid} alt="" css={{width: 'auto'}}/>
    </Section>
  )
}

export default FeaturedImage
