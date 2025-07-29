import React from 'react'
import PageHeading from '../components/common/page-heading'
import ContactEnquiries from '../news/_components/contact-enquiries'
import ContactForm from './_components/contact-form'
import ContactHero from './_components/contact-us-hero'

const ContactUsPage = () => {
  return (
    <>
      <PageHeading currentPage='Contact Us' />
      <ContactHero />
      <ContactForm />
      <ContactEnquiries />

    </>
  )
}

export default ContactUsPage