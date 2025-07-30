import React from 'react'
import AboutUsHeroSection from './_components/about-us-hero'
import OurAmbition from './_components/our-ambition'
import OurCredentials from './_components/our-credientials'
import OurValues from './_components/our-values'
import PageHeading from '../components/common/page-heading'
import ContactUsBanner from '../components/common/contact-us-banner'

const AboutUs = () => {
  return (
    <>
    <PageHeading currentPage='About Us' />
     <AboutUsHeroSection />
     <OurAmbition />
     <OurValues />
     <OurCredentials />
     <ContactUsBanner />
    </>
  )
}

export default AboutUs