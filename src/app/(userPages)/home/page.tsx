import React from 'react'
import WhatWeDo from './_components/whatWedo'
import Hero from './_components/Hero'
import LatestNews from './_components/LatestNews'
import JoinWorkWithUs from './_components/join-work-with-us'
import ParagraphSection from '../components/common/paragraph-section'
import ContactUsBanner from '../components/common/contact-us-banner'

const Home = () => {
  return (
    <>
      <Hero />
      <ParagraphSection
        para1="Each service we provide helps us on our continuing mission to enable growth, create jobs and improve lives whilst
               minimising the impact we have on the planet."
      />
      <WhatWeDo />
      <LatestNews />
      <JoinWorkWithUs />
      <ContactUsBanner />
    </>
  )
}

export default Home