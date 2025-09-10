import React from 'react'
import OurStoryHero from './_components/our-story-hero'
import ParagraphSection from '../../components/common/paragraph-section'
import TimelineSection from './_components/timeline-section'
import ContactUsBanner from '../../components/common/contact-us-banner'
import PageHeading from '../../components/common/page-heading'
import JoinWorkWithUs from '../../home/_components/join-work-with-us'
import { ChevronRight } from 'lucide-react'

const OurStoryPage = () => {
  return (
    <>
    <PageHeading currentPage="Our Story" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> About Us </div>
        </>
      } />
     <OurStoryHero />
     <ParagraphSection
        para1="Our growing footprint makes us a top provider of ethical and impact-driven training services. Our courses are not solely for educational purposes, but also serve as a conduit for real job opportunities and growth.
As a mission-driven organisation, we prioritise the success of our staff and volunteers. The surplus is immediately directed back into creating new programs and enhancing our service offerings, guaranteeing that we are always responsive to the changing needs of our clients and communities.
"
     />
      <TimelineSection />
      <JoinWorkWithUs />
     <ContactUsBanner />
    
    </>
  )
}

export default OurStoryPage