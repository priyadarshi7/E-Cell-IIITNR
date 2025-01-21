import React from "react"
import "./ESummitHome.css"
import Navbar from "../../../Components/E-Summit/Navbar/Navbar"
import HeroSection from "../../../Components/E-Summit/Home/HeroSection"

export default function ESummitHome(){
  return(
    <div className="esummit-home">
      <Navbar/>
      <HeroSection/>
    </div>
  )
}