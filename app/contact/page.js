import React from 'react'
import PageBanner from '../Components/PageBanner'
import ContactUs from '../Components/Contact/ContactUs'

function page() {
  return (
    <>
    <PageBanner title="Connect With Us" backgroundImage="/about-banner.jpg" /> 
    <ContactUs />
    </>
  )
}

export default page