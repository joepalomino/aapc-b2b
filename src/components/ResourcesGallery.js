import React, { useState } from "react"
import tw from "tailwind.macro"
import { Section, mq, colors } from "./SharedStyledComponents"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const FilterButtton = styled.button(
  tw`mr-4 bg-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none border-0 capitalize`,
  {}, props => {
  if (props.active) {
    return {
      backgroundColor: colors["aapc-blue"].default,
      color: 'white'
    }
  }
})

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
      allContentfulResource {
        edges {
          node {
            id
            type
            createdAt
            slug
            spotlight
            cardImage {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const types = edges.reduce((accu, curr) => {
    return accu.includes(curr.node.type) ? accu : [...accu, curr.node.type]
  }, [])

  const spotlights = edges m

  const [filter, setFilter] = useState("all")

  const handleFilterClick = type => {
    type = type == filter ? "all" : type
    setFilter(type)
  }

  return (
    <Section headline={headline} subheadline={subheadline}>
      <div>

      </div>
      <div>
        Media Type
        <ul css={tw`flex flex-wrap mb-4 mt-4`}>
          {types.map((type, idx) => (
            <li key={idx}>
              <FilterButtton
                active={filter == type}
                onClick={() => handleFilterClick(type)}
              >
                {type + 's'}
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
    </Section>
  )
}

export default ResourcesGallery
