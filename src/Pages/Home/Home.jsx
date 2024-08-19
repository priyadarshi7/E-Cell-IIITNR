import React from 'react'
import './Home.css'
import About from '../../Components/Home/About/About'
import Main from '../../Components/Home/Main/Main'
import OurEvents from '../../Components/Our Events/OurEvents'
import Gallery from '../../Components/Home/Gallery/Gallery'
import Navbar from '../../Components/Navbar/Navbar'

const Home = (props) => {
  return (
    <div className="home">
        {props.loading===false && <Navbar/>}
        <Main />
        {props.loading===false && <About/>}
        {props.loading==false && <Gallery/>}
        {props.loading===false && <OurEvents/>}       
    </div>
  )
}

export default Home