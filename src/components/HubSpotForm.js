import React, { useEffect } from "react"

import tw from "tailwind.macro"
import { Section, mq } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"


const FormContainer = styled.div({
  '& .hs-form-field': {
    marginBottom: '1.25rem'
  },
  '& .hs-form-required': {
    color: 'red'
  },
  '& .hs-input,.hs-button': {
    display: 'inline-block',
    width: '100% !important',
    height: '40px',
    padding: '9px 10px',
    fontfamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '22px',
    color: '#33475b',
    backgroundColor: '#f5f8fa',
    border: '1px solid #cbd6e2',
    boxSizing: 'border-box',
    borderRadius: '0.25rem',
  },
  '& input.error': {
    borderColor: 'red'
  },
  '& .hs-button': {
    backgroundColor: '#0098d0',
    color: 'white',
    borderRadius: '0.25rem'
  },
  '& .hs-error-msgs': {
    color: 'red',
    fontSize: '.5rem '
  }
})
export default function HubspotForm(props) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '2072848',
          formId: props.hbFormId,
          target: '#hubspotForm',
        })
      }
    })
  })
  return (
    <div>
      <FormContainer id="hubspotForm"></FormContainer>
    </div>
  )
}