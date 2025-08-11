import React from 'react'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import PeopleHero from './_components/people-hero'
import ContactUsBanner from '../../components/common/contact-us-banner'
import EducationSkillsSection from './_components/educationa-skills-section'

const People = () => {
  return (
    <>
     <PageHeading currentPage="People" mainPage={
        <>
          <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
        </>
      } />
      <PeopleHero />
      <EducationSkillsSection />
      <ContactUsBanner />
    </>
  )
}

export default People