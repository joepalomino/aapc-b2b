import React, { useEffect } from "react"
import Img from 'gatsby-image'
import HubspotForm from './HubSpotForm'

function FormPageBlock({
  data: {
    copy: { copy },
    hubspotFormId,
    hero: {
      bannerComponent: { headline, backgroundImage },
    },
    iconBlocks,
  },
}) {
  return (
    <div>
      <section>
        <header>
          <h1>{headline}</h1>
          <div style={{position: 'relative', width: '500px', height: 'auto'}}>
            <Img fluid={backgroundImage.fluid} />
          </div>
          
        </header>
        <div><HubspotForm hbFormId={hubspotFormId} /></div>
      </section>
      <section>
        <p>{copy}</p>
        {iconBlocks.map(
          ({
            id,
            title,
            copy: { copy },
            icon: {
              file: { url },
            },
          }) => (
            <div key={id}>
              <img src={url} alt="" />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  )
}



export default FormPageBlock
