import React from 'react'
import BecomeSupplierHero from './_components/supplier-hero'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import OpportunitiesSection from './_components/oppurtunities-section'
import InformationSection from './_components/information-section'

const BecomeASupplier = () => {
  return (
    <>
     <PageHeading currentPage="Become a Supplier" mainPage={
                <>
                    <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
                </>
            } />
      <BecomeSupplierHero />
      <OpportunitiesSection />
      <InformationSection />
    </>
  )
}

export default BecomeASupplier