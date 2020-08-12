import React from "react"
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"
import { Link, useStaticQuery, graphql } from "gatsby"

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
    console.log(types);
  return (
    <Section
      headline={headline}
      subheadline={subheadline}
      backgroundColor={"#f4f5f7"}
    >
      <div>
            resources
      </div>
    </Section>
  )
}

export default ResourcesGallery