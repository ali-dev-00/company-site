import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import GCBussinessSureveyHeroContent from './_components/gc-bussiness-survey-hero-section-content'
import GCBussinessSurveySectionContent01 from './_components/gc-bussiness-survery-section-content-01'
import GCBussinessSurveySectionContent02 from './_components/gc-bussiness-survery-section-content-02'

const GCBussinessSureveyContentPage = () => {
  return (
    <>
     <ContentTabsSection />
     <GCBussinessSureveyHeroContent />
     <GCBussinessSurveySectionContent01 />
     <GCBussinessSurveySectionContent02 />
    </>
  )
}

export default GCBussinessSureveyContentPage