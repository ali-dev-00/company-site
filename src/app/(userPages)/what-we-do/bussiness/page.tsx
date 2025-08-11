import React from 'react'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import BussinessHero from './_components/bussiness-hero'
import ParagraphSection from '../../components/common/paragraph-section'
import OurSolutionsSection from './_components/our-solutions'
import ContactUsBanner from '../../components/common/contact-us-banner'
import OurServicesSection from './_components/our-services'


const Bussiness = () => {
  return (
    <>
      <PageHeading currentPage="Bussiness" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
        </>
      } />
      <BussinessHero />
      <ParagraphSection
        para1="At the Growth Company (GC), we have a vision for a society where economic growth and prosperity is inclusive, sustainable and leaves no person or community behind. By partnering with us you’ll help build a future founded on thriving businesses that create well-paid jobs for talented and empowered individuals across our diverse communities."
      />
      <OurSolutionsSection />
      <OurServicesSection />
      <ContactUsBanner />
    </>
  )
}

export default Bussiness