import React, { useEffect } from "react"
import Img from 'gatsby-image'

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

function HubspotForm(props) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "2072848",
          formId: props.hbFormId,
          target: "#hubspotForm",
        })
      }
    })
  })
  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  )
}

export default FormPageBlock
