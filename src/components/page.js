import React from "react"
import Components from "./components"
import Layout from "./Layout"

const Page = ({ data }) => {
  let { name, slug, contentBlocks } = data.contentfulPage

  return (
    <Layout>
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
        ... on ContentfulComparisonComponent {
          id
          sectionHeading
          aapcValue
          competitorValue
          blockHeadline
          quote
          quoteAuthor
          quoteAuthorOrganization
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
      }
    }
  }
`

export default Page
