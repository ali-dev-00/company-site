import React from 'react'
import PageHeading from '../components/common/page-heading'
import OurBoardSection from './_components/our-board-detail'
import { ChevronRight } from "lucide-react"
import AdvisoryBoardSection from '../our-board/_components/advisory-board-section'

const BoardDetailPage = () => {
    return (
        <>
            <PageHeading
                currentPage="Ali Olad"
                mainPage={
                    <>
                       <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> About Us <ChevronRight size={15} /> Our Board</div> 
                    </>
                }
            />

            <OurBoardSection />
            <AdvisoryBoardSection />
        </>
    )
}

export default BoardDetailPage