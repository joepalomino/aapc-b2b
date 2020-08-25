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
        <Img fluid={fluid} alt="featured" css={{width: '920px', margin: 'auto'}}/>
    </Section>
  )
}

export default FeaturedImage
