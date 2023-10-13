import React from 'react'
import Home from './components/main/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Project from './components/my_work/Project'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Background from './components/background/Background'
import './App.css'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Background/>
        <Navbar/>
          <Home/>
          <About/>
          <Skill/>
          <Project/>
          <Testimonial/>
          <Contact/>
          <Footer/>
      </>
  )
}

export default App