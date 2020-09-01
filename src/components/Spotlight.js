import React from "react"
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const SpotlightContainer = ({
  data: {
    heading,
    spotlightComponent,
  },
}) => {
  return (
    <Section
      headline={heading && heading.headline}
      subheadline={heading && heading.subheadline}
      backgroundColor={"#f4f5f7"}
    >
      <div>
        {spotlightComponent.map((spotlight, idx) => (
          <Spotlight key={spotlight.id} data={spotlight} position={idx}/>
        ))}
      </div>
    </Section>
  )
}

const GridFeatureArea = styled.div({
  width: "100%",
  [mq[1]]: {
    padding: "20px 0 20px 0",
    position: "relative",
    display: "grid",
    gridColumn: "content",
    maxWidth: 1290,
    margin: '0 auto',
    gridTemplateColumns: "repeat(15, 1fr)",
  }

})



const Lead = styled.div({
  textAlign: 'center',
  alignSelf: 'end',
  display: 'block',
  [mq[1]]: {
    textAlign: 'left',
  }
},
props => (
  {
    gridColumn: props.position % 2 === 0 ? '9/span 6' : '2/span 6'
  }
))

const Media = styled.div({
  display: 'grid',
  gridRow: '1/span 2',
  alignItems: 'center',
  '& img': {
    height: 300
  }
},
props => (
  {
    gridColumn: props.position % 2 === 0 ? '2/span 6' : '9/span 6'
  }
))

const Arrow = styled.svg(
  tw`ml-2 inline-block`,
  {
    transition: 'transform 250ms',
    height: 10,
  }
)

const CTALink = styled(Link)({
  '&:hover': {  
    [Arrow]: {
      transform: 'translateX(6px)'
    }
  }
})


const Spotlight = ({
  data: {
    headline,
    content: { content },
    image: {
      description,
      file: { url },
    },
    cta: { label, link },
  },
  position
}) => {
  return (
    <div css={{ marginTop: position == 0 ? 40 : 0, marginBottom: "40px" }}>
      <GridFeatureArea>
        <Lead position={position}>
          <div>
            <h3 css={tw`text-4xl font-bold leading-tight`}>{headline}</h3>
            <p css={tw`text-lg leading-snug my-5`}>{content}</p>
            <div>
              <CTALink to={link} css={tw`block font-bold mb-2 md:mb-0`}>
                <span>{label}</span>
                <Arrow
                  focusable="false"
                  width="13"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                  css={tw`ml-2 inline-block`}
                >
                  <path
                    d="M13 5.053c0-.316-.1-.526-.403-.737l-.806-.526-.706-.316L9.07 2.21s-.101 0-.101-.106l-.605-.21-.504-.421-.1-.105-.706-.316L6.45.632 5.744.105C5.442-.105 4.938 0 4.736.316c-.201.316-.201.842.202 1.053l.705.526.807.526.705.316.403.421.1.105.706.316 1.008.632h-.604l-.706.105H6.45l-1.714-.105-2.317.105-.807-.105H.806c-.504 0-.806.316-.806.737 0 .42.302.842.705.842h.706l.806.105h.1l2.319-.105 1.612.105h2.016l.705-.105h.504L7.76 6.842l-.706.421-.705.421s-.1 0-.1.106l-.606.42-.705.317c-.403.21-.504.736-.302 1.052.201.316.403.421.705.421.1 0 .202 0 .403-.105l.706-.421.604-.421.706-.421.604-.421 1.411-.737.706-.421 1.31-.842.504-.316c.201 0 .302-.21.403-.316.201-.21.302-.316.302-.526z"
                  ></path>
                </Arrow>
              </CTALink>
            </div>
          </div>
        </Lead>
        <Media position={position}>
          <img
            css={tw`rounded w-full object-cover object-top`}
            src={url}
            alt={description}
          />
        </Media>
      </GridFeatureArea>
    </div>
  )
}

export default SpotlightContainer
