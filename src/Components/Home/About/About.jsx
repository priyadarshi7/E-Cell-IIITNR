import React from 'react'
import './About.css'
import Cover_Image from '../../../assets/Images/Cover_Images/About-Cover-Image.jpeg'
import AboutUs  from '../About_Us/AboutUs'

const About = () => {
  return (
    <div className="about">
      <AboutUs/>
        <div className="box">
            <div className="sub-box">
                <h1>WHO ARE WE ?</h1>
                <img src={Cover_Image} alt="" />
            </div>
            <h3>E-Cell IIIT Naya Raipur took its start back in 2015 and has been growing and heightening ever since. We are here to foster and encourage all the entrepreneurship enthusiasts by providing them dynamic, informative and fun experiences through events and contests.</h3>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default About
