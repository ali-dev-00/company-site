import React from 'react'
import BestSellerCourses from './_components/best-seller-courses'
import CoursesHeroSection from './_components/courses-hero-section'
import CtaSection from './_components/cta-section'

const CoursesPage = () => {
  return (
     <>
        <CoursesHeroSection />
        <BestSellerCourses />
        <CtaSection />
     </>
  )
}

export default CoursesPage