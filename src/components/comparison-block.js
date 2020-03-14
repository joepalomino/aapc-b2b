import React from "react"

function ComparisonBlock({
  data: {
    sectionHeading,
    aapcValue,
    competitorValue,
    blockHeadline,
    quote,
    quoteAuthor,
    quoteAuthorOrganization,
  }
}) {
  return (
    <section>
      <div className=" headline heading">
        <h2>{sectionHeading}</h2>
      </div>
      <div>
        <div class="rounded bg-orange-lighter CTA-block">
          <div class="statistics">
            <div class="headline heading">
              <div>
                <p class="percentage green-txt">{aapcValue}</p>
                <p class="margin-top-0">AAPC Partners</p>
              </div>
              <div>
                <p class="percentage red-txt">{competitorValue}</p>
                <p class="margin-top-0">Competitors</p>
              </div>
            </div>
            <div>
              <div class="content">
                <p class="description">{blockHeadline}</p>
                <p>{quote}</p>
                <div class="text-right">
                  <div>- {quoteAuthor}</div>
                  <div>{quoteAuthorOrganization}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonBlock
