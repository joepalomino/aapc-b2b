import React from "react"
import Components from "./Components"
import Layout from "./Layout"
import Seo from "./Seo"
import tw from "tailwind.macro"
import { ContentContainer } from "./SharedStyledComponents"
import Breadcrumbs from './Breadrumbs'

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const Page = ({ data }) => {
  let { contentBlocks, breadcrumbs, metaTitle, metaDescription } = data.contentfulPage
  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      {breadcrumbs && (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      )}

      <div>
        {contentBlocks &&
          contentBlocks.map((contentBlock, index) => {
            return React.createElement(Components(contentBlock.__typename), {
              key: index,
              data: contentBlock,
            })
          })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      id
      name
      slug
      breadcrumbs
      metaTitle
      metaDescription
      contentBlocks {
        __typename
        ... on ContentfulHeroBannerBlock {
          bannerComponent {
            headline
            subheadline
            backgroundImage {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            cta {
              label
              link
            }
          }
          bannerFormComponent {
            id
            formHeadline
            formLabel
            placeholderText
            pagesToLinkTo {
              id
              name
              slug
            }
          }
        }
        ... on ContentfulCardsBlock {
          id
          sectionHeadline {
            headline
            subheadline
          }
          layout
          style
          cards {
            id
            headline
            cta {
              link
              label
            }
            image {
              description
              file {
                url
              }
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            content {
              content
            }
          }
        }
        ... on ContentfulCtaBlock {
          headline
          cta {
            label
            link
          }
        }
        ... on ContentfulSpotlightsBlock {
          id
          heading {
            headline
            subheadline
          }
          spotlightComponent {
            id
            headline
            image {
              description
              file {
                url
              }
            }
            content {
              content
            }
            cta {
              label
              link
            }
          }
        }
        ... on ContentfulFeaturedImageComponent {
          id
          header
          image {
            fluid(maxWidth: 1800, quality: 100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
        ... on ContentfulFormPageBlock {
          id
          copy {
            copy
          }
          hero {
            bannerComponent {
              headline
              backgroundImage {
                fluid(maxWidth: 1800, quality: 100) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
          iconBlocks {
            icon {
              file {
                url
              }
            }
            title
            copy {
              copy
            }
            id
          }
          hubspotFormId
        }
        ... on ContentfulFaqsContainer {
          id
          faqs {
            id
            question
            answer {
              answer
            }
          }
          heading {
            headline
            subheadline
          }
        }
        ... on ContentfulResourcesGallery {
          id
          heading {
            headline
            subheadline
          }
        }
      }
    }
  }
`

export default Page
