import React, { useState } from "react"
import { navigate, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { mq } from "./SharedStyledComponents"

/**@jsx jsx */

import {jsx} from '@emotion/core'

const BackImg = styled.div(props => ({
  paddingLeft: 15,
  paddingRight: 15,
  [mq[1]]: {
    minHeight: 500,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundImage: `url("${props.fluid.src}"), url("${props.fluid.tracedSVG}")`,
  },
}))


const Hero = styled.div(
  {
    padding: '4rem 0',
    gridColumn: 'content',
    position: 'relative',
    alignContent: 'center',
    justifyItems:'center',
    [mq[1]]: {
      display: 'grid',
      gridTemplateColumns: '[left-content] 6fr [right-content-lg] 5fr',
      gridColumnGap: '24px'
    },
    [mq[3]]: {
      maxWidth: '1250px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }
)

const Content = styled.div(
  {
    gridColumn: 'left-content / span 3',
    textAlign: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    zIndex: '1',
    position: 'relative',
  [mq[1]]: {
    gridColumn: 'left-content',
    justifyItems: 'left',
    justifySelf: 'left',
    textAlign: 'left',
  }
})

const H1 = styled.h1(
  {
    fontSize: '40px',
    marginBottom: '24px',
    padding: '0 0 15px',
    fontWeight: 'bold',
    lineHeight: '1',
    [mq[2]]: {
      fontSize: 60,
      lineHeight: 1.3
    }
  }
)

const SubHeadLine = styled.div(
  tw`mb-4`,
  {
    maxWidth: 800,
    lineHeight: 1.4,
    [mq[1]]: {
      fontSize: 26
    }
  }
)

const LinkButton = styled(Link)(
  tw`bg-aapc-blue-light`,
  {
    appearance:'none',
    background:'0 0',
    border:'none',
    cursor:'pointer',
    borderRadius:'6px',
    textAlign:'center',
    fontWeight:'700',
    lineHeight:'1.28571429',
    letterSpacing:'.8px',
    fontsize:'.875rem',
    textTransform:'uppercase',
    textDecoration:'none',
    padding:'15px 20px',
    display:'block',
    width:'100%',
    transition:'box-shadow 420ms cubic-bezier(0.165, 0.84, 0.44, 1),color 420ms cubic-bezier(0.165, 0.84, 0.44, 1),background 420ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    boxShadow:'none',
    backgroundColor:'#0098d0',
    color:'white',
    [mq[1]]: {
      display: 'inline-block',
      width: 'auto'
    }
  }
)

const HeroBanner = ({
  data: {
    bannerComponent: {
      headline = "",
      subheadline = "",
      cta = null,
      backgroundImage,
    } = {},
    bannerFormComponent,
  } = {},
} = {}) => {
  return (
    <section>
      <BackImg fluid={backgroundImage.fluid}>
        <Hero>
          <Content>
            <H1>{headline}</H1>
            <SubHeadLine>{subheadline}</SubHeadLine>
            <div>{cta && <LinkButton to={cta.link}>{cta.label}</LinkButton>}</div>
          </Content>
          
          {bannerFormComponent && (
            <BannerFormComponent
              formHeadline={bannerFormComponent.formHeadline}
              formLabel={bannerFormComponent.formLabel}
              placeholderText={bannerFormComponent.placeholderText}
              options={bannerFormComponent.pagesToLinkTo}
            />
          )}
        </Hero>
      </BackImg>
    </section>
  )
}

const FormContainer = styled.div(
  {
    backgroundColor:'#fff',
    borderRadius:'10px',
    border:'1px solid #ddd',
    padding:'32px 30px',
    position:'relative',
    boxShadow:'0 10px 25px #ddd',
    maxWidth:'528px',
    marginTop:'1rem',
    marginBottom:'1rem',
    marginLeft:'auto',
    marginRight:'auto',
    [mq[1]]: {
      marginTop: 0,
      padding: '15px 20px'
    }
  }
)

const Select = styled.select(
  tw`block bg-white rounded border border-gray-500 p-2 w-full my-2`,
  {
    height: 50,
  }
)


function BannerFormComponent({
  formHeadline = "",
  formLabel = "",
  options = [],
  placeholderText = "",
}) {
  const [page, setPage] = useState(placeholderText)

  function handleChange(event) {
    setPage(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/${page}/`)
  }

  return (
    <FormContainer>
      <h3 css={tw`text-2xl md:text-4xl`}>{formHeadline}</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          {formLabel}
          <Select value={page} onChange={handleChange}>
            <option  value={placeholderText}>{placeholderText}</option>
            {options.map(({ id, name, slug }) => (
              <option key={id} value={slug}>
                {name}
              </option>
            ))}
          </Select>
        </label>

        </div>

        <LinkButton as="input" type="submit" value="submit" />
      </form>
    </FormContainer>
  )
}

export default HeroBanner
