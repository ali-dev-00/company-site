import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import ContactUsContentForm from '../_components/contact-content-form'
import WhatWeDoHeroContent from './_components/what-we-do-hero-content'
import WhatWeDoSection01 from './_components/what-we-do-section-01'

const WhatWeDoContentPage = () => {
  return (
    <div className='overflow-y-auto'>
      <ContentTabsSection />
      <WhatWeDoHeroContent />
      <WhatWeDoSection01 />
      <ContactUsContentForm/>
    </div>
  )
}

export default WhatWeDoContentPage