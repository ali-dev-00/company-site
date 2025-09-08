import React from 'react'
import LifeatGCHero from './_components/life-at-gc-hero'
import OrganisationPurposeSection from './_components/organization-purpose-section'
import ContactUsBanner from '../../components/common/contact-us-banner'
import { WhoWeAreLooking } from './_components/what-we-are-looking-for'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'

const LifeatGcHero = () => {
  return (
    <>
      <PageHeading currentPage="Life at GC" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
        </>
      } />
      <LifeatGCHero />
      <OrganisationPurposeSection />
      <WhoWeAreLooking />
      <ContactUsBanner />
    </>
  )
}

export default LifeatGcHero