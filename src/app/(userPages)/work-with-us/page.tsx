import React from 'react'
import WorkWithUsHero from './_components/work-with-us-hero'
import PageHeading from '../components/common/page-heading'
import WhyWorkWithUs from './_components/why-work-with-us'
import ParagraphSection from '../components/common/paragraph-section'
import ContactUsBanner from '../components/common/contact-us-banner'

const WorkWithUsPage = () => {
    return (
        <>
            <PageHeading currentPage='Work With Us' />
            <WorkWithUsHero />
            <ParagraphSection
                question='Why work with us?'
                para1="Our history is built on working together and utilising our expertise to deliver impact-driven training that promotes sustainable growth. We work alongside organisations that share our values and mission of making a difference, providing the best training services and support to build human capacity in East Africa."
                />
            <WhyWorkWithUs />
            <ContactUsBanner />
        </>
    )
}

export default WorkWithUsPage