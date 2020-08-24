import ComponentNotFound from "./Component-Not-Found"
import Page from "./Page"
import HeroBanner from "./HeroBanner"
import Cards from "./Cards"
import CTABlock from "./CTABlock"
import SpotlightContainer from "./Spotlight"
import FeaturedImage from "./FeaturedImage"
import ComparisonBlock from "./Comparison-Block"
import FormPageBlock from './form-page-block'
import FaqContainer from "./FaqContainer"
import ResourcesGallery from './ResourcesGallery'
import Events from './Events'

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
  ContentfulResourcesGallery: ResourcesGallery,
  ContentfulEventsBlock: Events
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }

  return ComponentList[type]
}

export default Components
