import React, { useState } from "react"
import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const FAQWrapper = styled.section(
  tw`block overflow-hidden relative rounded-lg mb-12 bg-white`,
  props => {
    if (props.active) {
      return {
        backgroundColor: "#fff",
        boxShadow: "0 15px 30px 0 rgba(0,0,0,.15)",
      }
    }
  }
)

const FAQHeader = styled.header(
  tw`p-5 mb-0 rounded-lg border-solid border-2 border-gray-400 cursor-pointer`,
  {
    transition:
      "transform .3s cubic-bezier(0.25, 0.1, 0.25, 1),box-shadow .3s cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  props => {
    if(props.active) {
      return {
        borderColor: 'transparent'
      }
    }
  }
)

const FAQContent = styled.div(
  {
    padding: 30,
  },
  props => ({
    display: props.active ? "block" : "none",
  })
)

const FAQ = ({ question, answer: { answer } }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleFAQClick = e => setIsExpanded(!isExpanded)
  return (
    <FAQWrapper active={isExpanded}>
      <FAQHeader
        role="button"
        aria-expanded="false"
        tabindex="0"
        onClick={e => handleFAQClick(e)}
        active={isExpanded}
      >
        <div css={tw`flex items-center`}>
          <h4 css={tw`text-xl text-b2b-gray-dark font-bold`}>{question}</h4>
          <div css={tw`ml-auto`}>
            <svg
              id="angle-down-solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="16"
            >
              <path d="M56.293 16.003c1.761-1.645 4.553-1.645 6.314 0 1.857 1.734 1.857 4.623 0 6.357l-27.45 25.638c-1.761 1.645-4.553 1.645-6.314 0l-27.45-25.638c-0.899-0.839-1.393-1.963-1.393-3.178s0.494-2.339 1.393-3.178c1.761-1.645 4.553-1.645 6.314 0l24.293 22.689 24.293-22.689z"></path>
            </svg>
          </div>
        </div>
      </FAQHeader>
      <FAQContent active={isExpanded}>
        <p>{answer}</p>
      </FAQContent>
    </FAQWrapper>
  )
}

const FaqContainer = ({
  data: {
    heading: { headline, subheadline },
    faqs,
  },
}) => (
  <Section headline={headline} subheadline={subheadline}>
    <div css={tw`m-auto max-w-4xl`}>
      {faqs.map(({ question, answer, id }) => (
        <FAQ question={question} answer={answer} key={id} />
      ))}
    </div>
  </Section>
)

export default FaqContainer
