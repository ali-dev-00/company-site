import React from 'react'
import OurCredientialsHero from './_components/our-credientials-hero'
import CertificationsSection from './_components/certifications-section'

import ContactUsBanner from '../components/common/contact-us-banner'
import PageHeading from '../components/common/page-heading'
import { ChevronRight } from 'lucide-react'

const OurCredientialsPage = () => {
  return (
    <>
    <PageHeading currentPage="Our Credentials" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> About Us </div>
        </>
      } />
      <OurCredientialsHero/>
      <CertificationsSection />
      <ContactUsBanner />
    </>
  )
}

export default OurCredientialsPage