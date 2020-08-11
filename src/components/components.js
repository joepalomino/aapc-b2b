import ComponentNotFound from "./component-not-found"
import Page from "./page"
import HeroBanner from "./HeroBanner"
import Cards from "./Cards"
import CTABlock from "./CTABlock"
import SpotlightContainer from "./spotlight"
import FeaturedImage from "./FeaturedImage"
import ComparisonBlock from "./comparison-block"
import FormPageBlock from './form-page-block'
import FaqContainer from "./FaqContainer"

const ComponentList = {
  page: Page,
  ContentfulHeroBannerBlock: HeroBanner,
  ContentfulCardsBlock: Cards,
  ContentfulCtaBlock: CTABlock,
  ContentfulSpotlightsBlock: SpotlightContainer,
  ContentfulFeaturedImageComponent: FeaturedImage,
  ContentfulComparisonComponent: ComparisonBlock,
  ContentfulFormPageBlock: FormPageBlock,
  ContentfulFaqsContainer: FaqContainer,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }

  return ComponentList[type]
}

export default Components
