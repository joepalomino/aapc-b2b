import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"
import { mq } from "./SharedStyledComponents"
import CTAButtonLink from "./CTALink"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import Img from "gatsby-image"

const H3 = styled.h3`
  ${tw`font-medium text-2xl mb-3`}
`

const P = styled.p`
  ${tw`m-0`}
`

const CardPrimary = ({
  data: {
    image: { description: altTxt = "", fluid } = {},
    headline = "",
    content = "",
    cta: { link = "", label = "" } = {},
  } = {},
}) => (
  <>
    {label ? (
      <div className="card">
        <div css={tw`mb-3`}>
          <Img
            fluid={fluid}
            alt={altTxt}
            css={{
              width: "100%",
              height: "274px",
              borderRadius: "8px",
              objectFit: "cover",
              objectPosition: 'left'
            }}
            imgStyle={{objectPosition: 'left'}}
          />
        </div>
        <div>
          {headline && <H3>{headline}</H3>}
          {content && <P css={label && tw`mb-4`}>{content.content}</P>}
        </div>
        {label && <CTAButtonLink label={label} link={link} />}
      </div>
    ) : (
      <Link to={link}>
        <div className="card">
          <div css={tw`mb-3`}>
            <Img
              fluid={fluid}
              alt={altTxt}
              css={{
                width: "100%",
                height: "274px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            {headline && <H3>{headline}</H3>}
            {content && <P css={label && tw`mb-4`}>{content.content}</P>}
          </div>
        </div>
      </Link>
    )}
  </>
)

export default CardPrimary
