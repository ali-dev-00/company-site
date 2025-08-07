import React from 'react'
import OurStoryHero from './_components/our-story-hero'
import ContactUsBanner from '../components/common/contact-us-banner'
import PageHeading from '../components/common/page-heading'
import ParagraphSection from '../components/common/paragraph-section'
import TimelineSection from './_components/timeline-section'
import JoinWorkWithUs from '../home/_components/join-work-with-us'
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
        para1="We're proud of our heritage, our extensive footprint and that we are a leading ethical provider of outsourced services."
        para2="We're also proud to be an accredited social enterprise, which sets us apart. We strive for continuous improvement and our business model
enables us to drive profits straight back into  developing and delivering high-quality service provision."
      />
      <TimelineSection />
      <JoinWorkWithUs />
     <ContactUsBanner />
    
    </>
  )
}

export default OurStoryPage