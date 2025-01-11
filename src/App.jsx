import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='apps'>
      <Navbar/>
      <Hero/>
      <About/>
      <Eye/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default App
