import React from 'react'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import InternationalHero from './_components/international-hero'
import InnovationCardsSection from './_components/innovative-cards-section'

const InternationalPage = () => {
  return (
    <>
    <PageHeading currentPage="International" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
        </>
      } />
      <InternationalHero />
      <InnovationCardsSection />
    </>
  )
}

export default InternationalPage