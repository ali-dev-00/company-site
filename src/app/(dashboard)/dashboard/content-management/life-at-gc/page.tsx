import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import LifeatGCHeroSectionContent from './_components/life-at-gc-hero-section-content'
import LifeAtGCContentSection01 from './_components/life-at-gc-section-content-01'
import LifeAtGCContentSection02 from './_components/life-at-gc-section-content-02'
import LifeAtGCContentSection03 from './_components/life-at-gc-section-content-03'
import LifeAtGCContentSection04 from './_components/life-at-gc-section-content-04'

const LifeatGCPageContent = () => {
  return (
    <>
     <ContentTabsSection />
     <LifeatGCHeroSectionContent />
     <LifeAtGCContentSection01 />
     <LifeAtGCContentSection02/>
     <LifeAtGCContentSection03/>
     <LifeAtGCContentSection04/>
    </>
  )
}

export default LifeatGCPageContent