import React from 'react'
import './Home.css'
import About from '../../Components/Home/About/About'
import Main from '../../Components/Home/Main/Main'
import OurEvents from '../../Components/Our Events/OurEvents'
import Gallery from '../../Components/Home/Gallery/Gallery'

const Home = (props) => {
  return (
    <div className="home">
        <Main/>
        {props.loading===false && <div>
        <About/>
        <Gallery/>
        <OurEvents/>        
        </div>
         }
      
    </div>
  )
}

export default Home