import React from 'react'
import OurStorySectionsContent01 from './_components/our-story-sections-content-01'
import OurStoryHeroContent from './_components/our-story-hero-content'
import ContentTabsSection from '../_components/content-tabs-section'
import OurStorySectionsContent02 from './_components/our-story-sections-content-02'
import ContactUsContentForm from '../_components/contact-content-form'

const OurStoryContentPage = () => {
  return (
    <>
    <ContentTabsSection />
     <OurStoryHeroContent />
     <OurStorySectionsContent01 />
     <OurStorySectionsContent02 />
     <ContactUsContentForm/>
    </>
  )
}

export default OurStoryContentPage