import { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Services from './Component/Services'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Skills from "./Component/Skills"


function App() {
 

  return (
  <div >
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Services/>
  <Projects/>
  <Contact/>
  <Footer/>
  
  </div>
  )
}

export default App
