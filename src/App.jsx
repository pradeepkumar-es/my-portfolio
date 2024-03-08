import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        {alert("Website is under construction")}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
