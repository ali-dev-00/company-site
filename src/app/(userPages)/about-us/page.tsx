import React from 'react'
import AboutUsHeroSection from './_components/AboutUsHero'
import OurAmbition from './_components/our-ambition'
import OurCredentials from './_components/our-credientials'
import OurValues from './_components/our-values'
import PageHeading from '../components/common/page-heading'

const AboutUs = () => {
  return (
    <>
    <PageHeading currentPage='About Us' />
     <AboutUsHeroSection />
     <OurAmbition />
     <OurValues />
     <OurCredentials />
    </>
  )
}

export default AboutUs