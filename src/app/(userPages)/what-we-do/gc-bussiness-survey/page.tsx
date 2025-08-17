import React from 'react'
import GCBussinessSureveyPage from './_components/gc-bussiness-survey-hero'
import GCSituationReportSection from './_components/gc-situation-report'
import PageHeading from '../../components/common/page-heading'
import { ChevronRight } from 'lucide-react'
import ArchivedReports from './_components/archive-reports'

const page = () => {
  return (
   <>
     <PageHeading currentPage="Gc Bussiness Survey" mainPage={
                <>
                    <div className='flex items-center gap-1'>Home <ChevronRight size={15} /> What We do</div>
                </>
            } />
    <GCBussinessSureveyPage />
    <GCSituationReportSection />
    <ArchivedReports />
   </>
  )
}

export default page