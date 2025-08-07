import React from 'react'
import PageHeading from '../components/common/page-heading'
import OurBoardSection from './_components/our-board-section'
import AdvisoryBoardSection from './_components/advisory-board-section'
import { ChevronRight } from 'lucide-react'

const OurBoard = () => {
  return (
    <>
      <PageHeading currentPage=" Our Board" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> About Us </div>
        </>
      } />
      <OurBoardSection />
      <AdvisoryBoardSection />
    </>
  )
}

export default OurBoard