import React from 'react'
import OurCredientialsHeroContent from './_components/our-credentials-hero-content'
import ContactUsContentForm from '../_components/contact-content-form'
import OurCredentialsSectionsContent from './_components/our-credientials-section-content'
import ContentTabsSection from '../_components/content-tabs-section'

const OurCredientialsPageContent = () => {
  return (
    <>
    <ContentTabsSection />
     <OurCredientialsHeroContent />
     <OurCredentialsSectionsContent />
     <ContactUsContentForm/>
    </>
  )
}

export default OurCredientialsPageContent