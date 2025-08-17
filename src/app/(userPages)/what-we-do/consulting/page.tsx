import React from 'react'
import ConsultingHeroSection from './_components/consulting-hero'
import WhyChooseGCInsightSection from './_components/why-choose-gc-insight-section'
import ParagraphSection from '../../components/common/paragraph-section'
import LearnMoreGCInsightSection from './_components/learn-more-section'
import ContactUsBanner from '../../components/common/contact-us-banner'
import ConsultingPartnersSection from './_components/consulting-partners-section'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'

const ConsultingContentPage = () => {
    return (
        <>
            <PageHeading currentPage="Consulting" mainPage={
                <>
                    <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
                </>
            } />
            <ConsultingHeroSection />

            <ParagraphSection para1='Collaborating with a range of organisations, places and partnerships, we help you understand the potential impact of
                various scenarios and measure performance.'
                para2='Combining a clear strategy, effective operational design, and the ability to mix competencies around skills, employment and physical
                regeneration, we can facilitate a real-time reassessment of strategies and plans to help you anticipate outcomes, deliver results and achieve
                economic growth.' />
            <WhyChooseGCInsightSection />
            <LearnMoreGCInsightSection />
            <ConsultingPartnersSection />
            <ContactUsBanner />
        </>
    )
}

export default ConsultingContentPage