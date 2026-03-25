import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { useScreenSize } from './hooks/useScreenSize'
import MobileNavbar from './components/MobileNavbar'
import { useSelector } from 'react-redux'
import MobileFooter from './components/MobileFooter'

const App = () => {
  const { width } = useScreenSize();
  const { mode } = useSelector(state => state.theme);
  return (
    <div className={`app ${mode === 'light' ? 'bg-white' : 'bg-black text-white'}`}>
      {
        width > 768 ? <Navbar /> : <MobileNavbar />
      }
      <Hero />
      <About />
      <Services />
      <Skills />
      <Certifications />
      <Work />
      <Contact />
      {
        width > 768 ? <Footer /> : <MobileFooter />
      }
    </div>
  )
}

export default App