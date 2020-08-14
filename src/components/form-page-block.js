import React, { useEffect } from "react"
import Img from "gatsby-image"
import HubspotForm from "./HubSpotForm"
import tw from "tailwind.macro"
import {
  ContentContainer,
  Button,
  Section,
  mq,
  FormContainer,
} from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

function FormPageBlock({
  data: {
    copy: { copy },
    hubspotFormId,
    hero: {
      bannerComponent: { headline, backgroundImage },
    },
    iconBlocks,
  },
}) {
  return (
    <ContentContainer>
      <div css={tw`md:flex`}>
        <section css={tw`md:w-2/3`}>
          <header>
            <Img fluid={backgroundImage.fluid} />
            <div css={tw`mt-4`}>
              <p>{copy}</p>
              <div css={tw`md:flex mt-8`}>
                {iconBlocks.map(
                  ({
                    id,
                    title,
                    copy: { copy },
                    icon: {
                      file: { url },
                    },
                  }) => (
                    <div key={id} css={tw`text-center px-6`}>
                      <img src={url} alt="icon" css={tw`m-auto mb-4`}/>
                      <div>
                        <h3 css={tw`mb-4 font-bold text-2xl text-aapc-blue`}>{title}</h3>
                        <p css={tw`text-center`}>{copy}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </header>
          <div></div>
          <div></div>
        </section>
        <section css={tw`md:w-1/3 md:pl-8`}>
          <FormContainer>
            <div css={tw`text-center`}>
              <h2 css={tw`text-4xl leading-tight pb-3`}>
                Fill out the form below to download <br />
                your free.
              </h2>
            </div>
            <HubspotForm hbFormId={hubspotFormId} />
          </FormContainer>
        </section>
      </div>
    </ContentContainer>
  )
}

export default FormPageBlock
