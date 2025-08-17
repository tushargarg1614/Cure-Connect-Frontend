import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../Navbar'
import HowItWorks from './HowItWorks'
import WhyChooseUs from './WhyChooseUs'
import CreatorSection from './CreatorSecttion'
import ContactSection from './ContactSection'
import Footer from './Footer'


function Index() {
  return (
    <>
       <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <CreatorSection></CreatorSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  )
}

export default Index