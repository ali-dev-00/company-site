import React from 'react'
import ContactUsContentForm from '../_components/contact-content-form'
import WhatWeDoHeroContent from './_components/about-us-hero-content'
import AboutUsSection01 from './_components/about-us-section-01'
import AboutUsSection02 from './_components/about-us-section-02'
import AboutUsSection03 from './_components/about-us-section-03'
import ContentTabsSection from '../_components/content-tabs-section'


const AboutUsContentPage = () => {
  return (
    <div className='overflow-y-auto'>
      <ContentTabsSection />
      <WhatWeDoHeroContent />
      <AboutUsSection01 />
      <AboutUsSection02 />
      <AboutUsSection03 />
      <ContactUsContentForm />
    </div>
  )
}

export default AboutUsContentPage