import React from 'react'
import CareersHeroContent from './_components/careers-hero-content'
import ContentTabsSection from '../_components/content-tabs-section'
import CareerPageContent from './_components/careers-page-content'

const CareersContentPage = () => {
  return (
    <>
      <ContentTabsSection />
      <CareersHeroContent />
      <CareerPageContent />
    </>
  )
}

export default CareersContentPage