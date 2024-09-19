import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import skillsInfo from './skillsInfo'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { socialLinks } from './socialLinks'
import FeaturedSection from './components/FeaturedSection'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Navbar/>
      <Hero/>
      <FeaturedSection/>
      <Skills skills={skillsInfo}/>
      <Experience/>
      <Contact/>
      <Footer socialLinks={socialLinks}/>

    </div>
  )
}

export default App