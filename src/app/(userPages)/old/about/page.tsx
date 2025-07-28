import React from 'react'
import AboutUsSection from './_components/about-us'
import ContactSection from './_components/contact-section'
import WhatWeStandFor from './_components/what-we-stand'
import BlackFaqSection from './_components/black-faq-section'
import AboutHeroSection from './_components/hero-section'

const AboutUs = () => {
  return (
   <>
     <AboutHeroSection/> 
     <AboutUsSection />
     <WhatWeStandFor/>
     <BlackFaqSection />
     <ContactSection />
   </>
  )
}

export default AboutUs