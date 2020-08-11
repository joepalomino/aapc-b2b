import React, { useState, useEffect } from "react"
import Layout from "./Layout"
import HubspotForm from "./HubSpotForm"
import Img from "gatsby-image"
import { ContentContainer } from "./SharedStyledComponents"

import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const Content = styled.div({
  "& p": {
    marginBottom: "1rem",
  },
  "& ul": {
    paddingLeft: "1.75rem",
  },
  "& li": {
    listStyle: "disc",
  },
})

const FormContainer = styled.div(
  tw`bg-white my-4 p-8 m-auto rounded-lg relative max-w-lg w-full border border-solid border-gray-300`,
  {
    boxShadow: "0 10px 25px #ddd",
  }
)

const Flex = styled.div(tw`flex`)

const ResourcePage = ({
  data: {
    contentfulResource: {
      bannerImage,
      spotlight,
      content: {
        childMarkdownRemark: { html },
      },
      hubspotFormId,
      type,
      soundCloudPodcastId
    },
  },
}) => {
  useEffect(() => {
    window.addEventListener("message", event => {
      if (
        event.data.type === "hsFormCallback" &&
        event.data.eventName === "onFormSubmitted"
      ) {
        handleFormSubmit()
        console.log("form submitted")
      }
    })
  }, [])

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setIsFormSubmitted(true)
  }
  return (
    <Layout>
      <ContentContainer>
        {!isFormSubmitted ? (
          <Flex>
            <div css={tw`w-2/3`}>
              <Img fluid={bannerImage.fluid} />
              <Content
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </div>
            <div css={tw`w-1/3 pl-8`}>
              <FormContainer>
                <div css={tw`text-center`}>
                  <h2 css={tw`text-4xl leading-tight pb-3`}>
                    Fill out the form below to download <br />
                    your free {type}.
                  </h2>
                </div>
                <HubspotForm hbFormId={hubspotFormId} />
              </FormContainer>
            </div>
          </Flex>
        ) : (
          <Flex>
            <div css={tw`flex-1 p-12 flex items-center bg-gray-400 rounded-lg rounded-r-none`}>
              <div css={tw`mb-9 pt-16 md:pt-0`}>
                <h1 css={tw`text-center md:text-left text-6xl font-bold`}>Thank you!</h1>
                <Content
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </div>
            </div>
            <div css={tw`flex-1 items-center border-t border-b border-r border-gray-500 rounded-lg rounded-l-none`}>
              <div css={tw`text-center`}>
                <h2 css={tw`text-5xl`}>{type}</h2>
                <div css={tw`text-2xl mb-4`}>Listen to your free podcast!</div>
              </div>
              <div class="">
                <div>
                  <iframe
                    css={tw`m-auto`}
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundCloudPodcastId}&color=%2378b0d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                  ></iframe>
                </div>
              </div>
            </div>
          </Flex>
        )}
      </ContentContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulResource(slug: { eq: $slug }) {
      id
      bannerImage {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      spotlight
      type
      content {
        childMarkdownRemark {
          html
        }
      }
      hubspotFormId
      soundCloudPodcastId
    }
  }
`

export default ResourcePage
