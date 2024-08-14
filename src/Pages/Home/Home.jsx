import React from 'react'
import './Home.css'
import About from '../../Components/Home/About/About'
import Main from '../../Components/Home/Main/Main'
import OurEvents from '../../Components/Our Events/OurEvents'


const Home = () => {
  return (
    <div className="home">
        <Main/>
        <About/>
        <OurEvents/>
    </div>
  )
}

export default Home