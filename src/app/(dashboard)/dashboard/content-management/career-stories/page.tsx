import React from 'react'
import CareerStoriesHeroContent from './_components/careers-stories-hero-content'
import CareerStoriesSectionsContent from './_components/career-stories-sections.content'
import ContentTabsSection from '../_components/content-tabs-section'

const CareerStoriesContentPage = () => {
  return (
    <>
    <ContentTabsSection />
      <CareerStoriesHeroContent />
      <CareerStoriesSectionsContent />
    </>
  )
}

export default CareerStoriesContentPage