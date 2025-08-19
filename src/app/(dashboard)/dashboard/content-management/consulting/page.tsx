import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import ConsultingContentSection01 from './_components/consulting-content-section-01'
import ConsultingHeroContent from './_components/consilting-hero-content'
import ConsultingContentSection02 from './_components/consulting-content-section-02'
import ConsultingContentSection03 from './_components/consulting-content-section-03'

const ConsultingContentPage = () => {
  return (
    <>
      <ContentTabsSection />
      <ConsultingHeroContent/>
      <ConsultingContentSection01 />
      <ConsultingContentSection02/>
      <ConsultingContentSection03 />
    </>
  )
}

export default ConsultingContentPage