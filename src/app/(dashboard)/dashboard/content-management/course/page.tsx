import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import CourseHeroContent from './_components/course-hero-content'
import CourseContentsSection from './_components/course-content-sections'

const CourseContentPage = () => {
  return (
    <>
      <ContentTabsSection />
      <CourseHeroContent />
      <CourseContentsSection />
    </>
  )
}

export default CourseContentPage