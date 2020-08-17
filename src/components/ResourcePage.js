import React, { useState, useEffect } from "react"
import Layout from "./Layout"
import HubspotForm from "./HubSpotForm"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import { ContentContainer, Button, Section, mq, FormContainer } from "./SharedStyledComponents"
import Seo from './seo'
import CTAButtonLink from './CTALink'


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



const Flex = styled.div(tw`md:flex`)


const Podcast = ({ podcastId }) => (
    <iframe
    css={tw`m-auto`}
    height="300"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${podcastId}&color=%2378b0d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
  ></iframe>
)

const PDF = ({pdfLink, img}) => (
  <div css={tw`md:w-7/12 text-center m-auto`}>
    <div css={tw`mb-4`}>
        <a href={pdfLink} target="_blank">
        <Img fluid={img.fluid} />
        </a>
    </div>
      <Button href={pdfLink} css={tw`mb-4`} target="_blank">Download Now</Button>
  </div>
)

const Webinar = () => (
  <div>

  </div>
)

const ResourcePage = ({
  data: {
    contentfulResource: {
      phoneNumber,
      metaTitle,
      metaDescription,
      bannerImage,
      cardImage,
      spotlight,
      content: {
        childMarkdownRemark: { html },
      },
      thankYouPageContent: {
        childMarkdownRemark: {
          html: thankYouPageHtml
        }
      },
      thankYouCta: {
        label,
        link
      },
      hubspotFormId,
      type,
      soundCloudPodcastId,
      pdf
    } = {},
  } = {},
} = {}) => {
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
    <Layout phoneNumber={phoneNumber}>
      <Seo title={metaTitle} description={metaDescription} />
      <ContentContainer>
        {!isFormSubmitted ? (
          <Flex>
            <div css={tw`md:w-2/3`}>
              <Img fluid={bannerImage.fluid} css={tw`mb-8`} />
              <Content
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </div>
            <div css={tw`md:w-1/3 md:pl-8`}>
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
            <div css={tw`flex-1 p-12 flex items-center bg-gray-200 rounded-lg rounded-r-none`}>
              <div css={tw`mb-9 md:pt-16 md:pt-0`}>
                <h1 css={tw`text-center md:text-left text-6xl font-bold`}>Thank you!</h1>
                <Content
                  dangerouslySetInnerHTML={{
                    __html: thankYouPageHtml,
                  }}
                />
                {link && (<CTAButtonLink label={label} link={link} />)}
              </div>
            </div>
            <div css={tw`flex-1 items-center border-t border-b border-r border-gray-300 rounded-lg rounded-l-none`}>
              <div css={tw`text-center`}>
                <h2 css={tw`text-5xl`}>{type}</h2>
                <div css={tw`text-2xl mb-4`}>{type === 'podcast'? 'Listen to your free podcast!' : type === 'webinar'? 'Watch your free webinar!' :  `Download our complimentary ${type}` }</div>
              </div>
              <div>
                <div>
                  {type === 'podcast' ? <Podcast podcastId={soundCloudPodcastId}/> : <PDF img={cardImage} pdfLink={pdf.file.url}/>}
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
      phoneNumber
      metaTitle
      metaDescription
      bannerImage {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      cardImage {
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
      thankYouPageContent {
        childMarkdownRemark {
          html
        }
      }
      thankYouCta {
        label
        link
      }
      hubspotFormId
      soundCloudPodcastId
      pdf {
        file {
          url
        }
      }
    }
  }
`

export default ResourcePage
