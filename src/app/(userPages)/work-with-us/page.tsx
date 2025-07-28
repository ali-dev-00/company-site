import React from 'react'
import WorkWithUsHero from './_components/WorkWithUsHero'
import PageHeading from '../components/common/page-heading'
import WhyWorkWithUs from './_components/why-work-with-us'
import ParagraphSection from '../components/common/paragraph-section'

const WorkWithUsPage = () => {
    return (
        <>
            <PageHeading currentPage='Work With Us' />
            <WorkWithUsHero />
            <ParagraphSection
                question='Why work with us?'
                para1="We have a strong track record of working collaboratively and sharing our expertise to deliver inclusive support and sustainable growth that
delivers real impact."
                para2='We work with organisations who share our values and commitment to making a difference, delivering the very best services and support.'
            />
            <WhyWorkWithUs />
        </>
    )
}

export default WorkWithUsPage