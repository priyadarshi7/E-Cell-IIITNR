import React from 'react'
import './Home.css'
import About from '../../Components/Home/About/About'
import Main from '../../Components/Home/Main/Main'
import { AboutUs } from '../../Components/Home/About_Us/AboutUs'


const Home = () => {
  return (
    <div className="home">
        <Main/>
        <AboutUs/>
        <About/>
    </div>
  )
}

export default Home