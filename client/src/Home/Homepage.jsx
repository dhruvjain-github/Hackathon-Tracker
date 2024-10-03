import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Routes,Route } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Homepage

