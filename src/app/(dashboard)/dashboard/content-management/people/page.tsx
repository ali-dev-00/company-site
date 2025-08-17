import React from 'react'
import PeopleHeroContent from './_components/people-hero-content'
import ContentTabsSection from '../_components/content-tabs-section'
import PeopleSectionContent01 from './_components/people-section-content-01'
import PeopleSectionContent02 from './_components/people-section-content02'
import PeopleSectionContent03 from './_components/people-sections-content-03'
import PeopleSectionContent04 from './_components/people-section-content-04'

const PeoplePageContent  = () => {
  return (
    <>
     <ContentTabsSection />
     <PeopleHeroContent />
     <PeopleSectionContent01/>
     <PeopleSectionContent02 />
     <PeopleSectionContent03 />
     <PeopleSectionContent04 />
    </>
  )
}

export default PeoplePageContent 