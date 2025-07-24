import React from 'react'
import Hero from './_components/Hero'
import WhoWeAre from './_components/what-we-are'
import MissionSection from './_components/missionSection'
import WhatWeOfferSection from './_components/what-we-offer'
import WhatWeServeSection from './_components/what-we-serve'
import Insights from './_components/Insights'

const Home = () => {
  return (
   <>
    <Hero />
    <WhoWeAre />
    <MissionSection />
    <WhatWeOfferSection />
    <Insights />
    <WhatWeServeSection />
   </>
  )
}

export default Home