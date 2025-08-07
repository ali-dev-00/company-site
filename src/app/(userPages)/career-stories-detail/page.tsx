import React from 'react'
import PageHeading from '../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import CareerStoryDetailSection from './_components/career-stories-detail'

const CareerStoriesDetailPage = () => {
  return (
    <>
     <PageHeading currentPage="DC Career Story : Jodie Richardson" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> About Us <ChevronRight size={15} /> Career Stories</div>
        </>
      } />
      <CareerStoryDetailSection />
    </>
  )
}

export default CareerStoriesDetailPage