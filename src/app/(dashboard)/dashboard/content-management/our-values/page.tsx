import React from 'react'
import OurValuesHeroContent from './_components/our-values-hero-content'
import ContentTabsSection from '../_components/content-tabs-section'
import OurValuesSectionsContent01 from './_components/our-values-sections-content-01'
import OurValuesSectionsContent02 from './_components/our-values-section-content-02'

const OurValuesContentPage = () => {
  return (
    <>
     <ContentTabsSection />
     <OurValuesHeroContent />
     <OurValuesSectionsContent01 />
     <OurValuesSectionsContent02 />
    </>
  )
}

export default OurValuesContentPage