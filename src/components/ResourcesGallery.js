import React, { useState } from "react"
import tw from "tailwind.macro"
import {
  Section,
  mq,
  colors,
  ContentContainer,
  ContentSection,
  Header,
} from "./SharedStyledComponents"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CTAButtonLink from "./CTALink"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const FilterButtton = styled.button(
  tw`mr-4 bg-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none border-0 capitalize`,
  {},
  props => {
    if (props.active) {
      return {
        backgroundColor: colors["aapc-blue"].default,
        color: "white",
      }
    }
  }
)

const ctaMap = {
  podcast: "listen to podcast",
  webinar: "Watch webinar",
  eBrief: "Read eBrief",
  whitepaper: "Read whitepaper",
}

function ResourcesGallery({
  data: {
    heading: { headline, subheadline },
    resourcesGallery,
  },
}) {
  const {
    allContentfulResource: { edges },
  } = useStaticQuery(graphql`
    query ResourcesQuery {
      allContentfulResource(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            title
            type
            createdAt
            slug
            spotlight
            cardImage {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            content {
              content
            }
          }
        }
      }
    }
  `)

  const types = edges.reduce((accu, curr) => {
    return accu.includes(curr.node.type) ? accu : [...accu, curr.node.type]
  }, [])

  const spotlights = edges.filter(resource => resource.node.spotlight)

  const [filter, setFilter] = useState("all")

  const handleFilterClick = type => {
    type = type == filter ? "all" : type
    setFilter(type)
  }

  const spotlight = spotlights.find(resource => {
    return filter == "all" ? true : resource.node.type == filter ? true : false
  })

  return (
    <ContentSection>
      <ContentContainer>
        <Header css={tw`max-w-2xl`}>
          <h1 css={tw`text-6xl`}>{headline}</h1>
          <span css={tw`text-2xl`}>{subheadline}</span>
        </Header>
        <div css={tw`flex justify-around items-center mb-16`}>
          <div css={tw`w-2/5`}>
            <Link to={`/resources/${spotlight.node.slug}`}>
              <Img
                css={tw`rounded-lg`}
                fluid={spotlight.node.cardImage.fluid}
              />
            </Link>
          </div>
          <div css={tw`w-2/5`}>
            <h2 css={tw`text-4xl font-bold`}>Spotlight</h2>
            <h4 css={tw`text-2xl mb-4 font-bold`}>{spotlight.node.title}</h4>
            <p css={tw`mb-4`}>{spotlight.node.content.content}</p>
            <CTAButtonLink
              link={spotlight.node.slug}
              label={ctaMap[spotlight.node.type]}
            />
          </div>
        </div>
        <div>
          Media Type
          <ul css={tw`flex flex-wrap mb-8 mt-4`}>
            {types.map((type, idx) => (
              <li key={idx}>
                <FilterButtton
                  active={filter == type}
                  onClick={() => handleFilterClick(type)}
                >
                  {type + "s"}
                </FilterButtton>
              </li>
            ))}
          </ul>
          <ul css={tw`md:flex flex-wrap`}>
            {edges
              .filter(resource => {
                if (filter == "all") return true
                return filter == resource.node.type
              })
              .map(({ node: { id, type, slug, cardImage } }) => (
                <li css={tw`md:w-1/3 mb-6 px-3 rounded-lg`} key={id}>
                  <Link to={`/resources/${slug}`}>
                    <Img css={tw`rounded-lg`} fluid={cardImage.fluid} />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </ContentContainer>
    </ContentSection>
  )
}

export default ResourcesGallery
