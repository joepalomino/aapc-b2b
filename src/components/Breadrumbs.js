import React from "react"
import { ContentContainer } from "./SharedStyledComponents"
import arrow from "../icons/angle-right-solid.svg"
import tw from "tailwind.macro"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const Breadcrumbs = ({breadcrumbs}) => (
  <ContentContainer>
    <div css={tw`flex items-center mb-4`}>
      {breadcrumbs.map((breadcrumb, idx, arr) => {
        if (idx < arr.length - 1) {
          return (
            <>
              <div key={idx} css={tw`text-gray-700 font-bold text-sm`}>{breadcrumb}</div>
              <span>
                <img
                  css={tw`m-1`}
                  src={arrow}
                  alt="arrow pointing right"
                  height="10"
                  width="5"
                />
              </span>
            </>
          )
        } else {
          return <div key={idx} css={tw`font-bold text-sm`}>{breadcrumb}</div>
        }
      })}
    </div>
  </ContentContainer>
)

export default Breadcrumbs