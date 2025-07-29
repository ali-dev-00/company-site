import React from 'react'
import PageHeading from '../components/common/page-heading'
import NewsArchive from './_components/our-news'
import ContactEnquiries from './_components/contact-enquiries'

const NewsPage = () => {
  return (
    <>
      <PageHeading currentPage='News' />
      <NewsArchive />
      <ContactEnquiries />
    </>
  )
}

export default NewsPage