import React from 'react'
import ContentTabsSection from '../_components/content-tabs-section'
import BecomeSupplierHeroSectionContent from './_components/become-supplier-hero-section'
import BecomeSupplierSectionContent01 from './_components/become-supplier-section-content-01'
import BecomeSupplierSectionContent02 from './_components/become-supplier-section-content-02'
import BecomeSupplierSectionContent03 from './_components/become-supplier-section-content-03'

const BecomeSupplierPageContent = () => {
  return (
    <>
     <ContentTabsSection />
     <BecomeSupplierHeroSectionContent />
     <BecomeSupplierSectionContent01 />
     <BecomeSupplierSectionContent02 />
     <BecomeSupplierSectionContent03 />
    </>
  )
}

export default BecomeSupplierPageContent