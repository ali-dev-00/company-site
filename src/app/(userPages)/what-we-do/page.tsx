import React from 'react'
import PageHeading from '../components/common/page-heading'
import OurServicesGrid from './_components/our-services-grid'
import ContactUsBanner from '../components/common/contact-us-banner'
import WhatWeDoHero from './_components/what-we-do-hero'
import ParagraphSection from '../components/common/paragraph-section'


const WhatWeDoPage = () => {
  return (
    <>
      <PageHeading currentPage='What We do' />
      <WhatWeDoHero />
      <ParagraphSection
        para1="As a leading provider of ethical outsourced services, we are adept at offering the right solution across a range of
        specialisms for public, private and third sector clients."
      />
      <OurServicesGrid />
      <ContactUsBanner />
    </>
  )
}

export default WhatWeDoPage