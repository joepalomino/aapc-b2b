import React, { useState } from "react"
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

function  ResourcesGallery({
  data: {
    heading: { headline, subheadline },
    resourcesGallery,
  },
}) {
    const { allContentfulResource: {edges} } = useStaticQuery(graphql`
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
    
    const types = edges.map(({node}) => {
        return node.type
    })
    
  const [filter, setFilter] = useState('all')

  const handleFilterClick = type => {
    type = type == filter ? 'all': type
    setFilter(type)
  }

  return (
    <Section
      headline={headline}
      subheadline={subheadline}
    >
      <div>
           <ul>
               {types.map((type, idx) => (<li key={idx} onClick={() => handleFilterClick(type)}>
                   {type}
               </li>))}
           </ul>
           <ul css={tw`md:flex`}>
                {edges.filter(resource => {
                  if(filter == 'all') return true
                  return filter == resource.node.type
                }).map(({node: {
                    id,
                    type,
                    slug,
                    cardImage
                }}) => (
                    <li css={tw`md:w-1/3`} key={id}>
                       <Link to={`/resources/${slug}`}>
                        <Img fluid={cardImage.fluid} />
                       </Link> 
                    </li>
                ))}
           </ul>
      </div>
    </Section>
  )
}

export default ResourcesGallery