import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import HomeHeroContentForm from './_components/hero-section-form'
import JoinWorkContentForm from './_components/join-work-form'
import ContactUsContentForm from '../_components/contact-content-form'


const HomeContentPage = () => {
  return (
    <div className='overflow-y-auto'>
      <ContentTabsSection />
      <HomeHeroContentForm /> 
      <JoinWorkContentForm />
      <ContactUsContentForm />
    </div>
  )
}

export default HomeContentPage