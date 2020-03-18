import React from 'react'
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const SpotlightContainer = ({data: {
  heading: {
    headline,
    subheadline,
  },
  spotlightComponent
}}) => {  
  return (
    <Section headline={headline} subheadline={subheadline}>
      <div class="container bg-gray-lighter">
          <div>
            {spotlightComponent.map((spotlight) => <Spotlight key={spotlight.id} data={spotlight} />)}
          </div>
        </div>
      </Section>
  )
}

const GridFeatureArea = styled.div({
    padding: "40px 0 40px 0",
    position:" relative",
    width:" 100%",
})

const Spotlight = ({data:{
  headline,
  content: {
    content
  },
  image: {
    description,
    file: {
      url
    }
  },
  cta: {
    label,
    link
  }
}}) => {
  return (
    <div css={{marginTop: "40px", marginBottom: "40px"}}>
      <div class="background">
          <div class="lead">
              <div>
                  <h3>{headline}</h3>
                  <p>{content}</p>
                  <div class="cta-txt">
                      <a href={link}
                          class="cta-link">
                          <span>{label}</span>
                          <svg focusable="false" width="13" height="10"
                              xmlns="http://www.w3.org/2000/svg" class="arrow">
                              <path
                                  d="M13 5.053c0-.316-.1-.526-.403-.737l-.806-.526-.706-.316L9.07 2.21s-.101 0-.101-.106l-.605-.21-.504-.421-.1-.105-.706-.316L6.45.632 5.744.105C5.442-.105 4.938 0 4.736.316c-.201.316-.201.842.202 1.053l.705.526.807.526.705.316.403.421.1.105.706.316 1.008.632h-.604l-.706.105H6.45l-1.714-.105-2.317.105-.807-.105H.806c-.504 0-.806.316-.806.737 0 .42.302.842.705.842h.706l.806.105h.1l2.319-.105 1.612.105h2.016l.705-.105h.504L7.76 6.842l-.706.421-.705.421s-.1 0-.1.106l-.606.42-.705.317c-.403.21-.504.736-.302 1.052.201.316.403.421.705.421.1 0 .202 0 .403-.105l.706-.421.604-.421.706-.421.604-.421 1.411-.737.706-.421 1.31-.842.504-.316c.201 0 .302-.21.403-.316.201-.21.302-.316.302-.526z"
                                  class="jsx-3191392933 jsx-2113429992"></path>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
          <div class="media">
              <img
                class="rounded lazy-img hidden-float"
                src={url}
                alt={description}
              />
          </div>
      </div>
    </div>
  )
}

export default SpotlightContainer