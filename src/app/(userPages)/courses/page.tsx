import React from 'react'
import BestSellerCourses from './_components/best-seller-courses'
import CoursesHeroSection from './_components/courses-hero-section'
import CtaSection from './_components/cta-section'
import UpcomingCourses from './_components/upcoming-courses'
import TrendingCourses from './_components/trending-courses'

const CoursesPage = () => {
  return (
     <>
        <CoursesHeroSection />
        <BestSellerCourses />
        <CtaSection />
        <TrendingCourses />   
        <UpcomingCourses />
     </>
  )
}

export default CoursesPage