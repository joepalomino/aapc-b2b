import React from "react"
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {Link} from 'gatsby'
import {mq} from './SharedStyledComponents'

/** @jsx jsx */
import {jsx} from '@emotion/core'

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
        <H3>{headline}</H3>
        {content && <P>{content.content}</P>}
      </div>
      {label && (
        <div class="cta-wrapper margin-top-1">
          <div class="cta">
            <Link
              to="http://www.healthcon.com/?__hstc=71887564.4c774c637d942084d85bdacddfce1acf.1579093682956.1580869555510.1580874197871.25&amp;__hssc=71887564.1.1580874197871&amp;__hsfp=3582181867&amp;_ga=2.51168301.544531282.1580763012-447403013.1579093680"
              rel="nofollow"
            >
              <span>{label}</span>
              <svg
                focusable="false"
                width="13"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5.053c0-.316-.1-.526-.403-.737l-.806-.526-.706-.316L9.07 2.21s-.101 0-.101-.106l-.605-.21-.504-.421-.1-.105-.706-.316L6.45.632 5.744.105C5.442-.105 4.938 0 4.736.316c-.201.316-.201.842.202 1.053l.705.526.807.526.705.316.403.421.1.105.706.316 1.008.632h-.604l-.706.105H6.45l-1.714-.105-2.317.105-.807-.105H.806c-.504 0-.806.316-.806.737 0 .42.302.842.705.842h.706l.806.105h.1l2.319-.105 1.612.105h2.016l.705-.105h.504L7.76 6.842l-.706.421-.705.421s-.1 0-.1.106l-.606.42-.705.317c-.403.21-.504.736-.302 1.052.201.316.403.421.705.421.1 0 .202 0 .403-.105l.706-.421.604-.421.706-.421.604-.421 1.411-.737.706-.421 1.31-.842.504-.316c.201 0 .302-.21.403-.316.201-.21.302-.316.302-.526z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  </Link>
)

export default CardPrimary
