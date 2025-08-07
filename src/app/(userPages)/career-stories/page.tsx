import React from 'react'
import CareerStoriesHero from './_components/career-stories-hero'
import CareerCards from './_components/career-cards'
import { ChevronRight } from 'lucide-react'
import PageHeading from '../components/common/page-heading'

const CareerStories = () => {
  return (
    <>
     <PageHeading currentPage="Career Stories" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> About Us </div>
        </>
      } />
     <CareerStoriesHero />
     <CareerCards />    
    </>
  )
}

export default CareerStories