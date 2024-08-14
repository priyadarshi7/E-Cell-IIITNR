import React from 'react'
import './Home.css'
import About from '../../Components/Home/About/About'
import Main from '../../Components/Home/Main/Main'


const Home = () => {
  return (
    <div className="home">
        <Main/>
        <About/>
    </div>
  )
}

export default Home