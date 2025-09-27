import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './Layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Blogs from './pages/Blogs'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import 'animate.css';

const App = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(172deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Certifications /> */}
      {/* <Blogs /> */}
      {/* <Education /> */}
      <Contact />
    </div>
  )
}

export default App
