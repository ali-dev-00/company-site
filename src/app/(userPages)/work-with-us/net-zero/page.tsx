import React from 'react'
import NetZeroHero from './_components/net-zero-hero'
import SustainabilityCommitmentsSection from './_components/commitments-section'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import NetZeroSection from './_components/net-zero-section'
import SustainabilityServicesSection from './_components/services-section'

const NetZeroPage = () => {
  return (
    <>
     <PageHeading currentPage="Net Zero" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
        </>
      } />
      <NetZeroHero />
      <SustainabilityCommitmentsSection />
      <NetZeroSection />
      <SustainabilityServicesSection />
    </>
  )
}

export default NetZeroPage