import React from "react"
import "./ESummitHome.css"
import Navbar from "../../../Components/E-Summit/Navbar/Navbar"
import HeroSection from "../../../Components/E-Summit/Home/HeroSection"
import Esummit_Aboutus from "../Aboutus/Aboutus"
import Events_esummit from "../Events_esummit/Events_esummit"
import Past_events_esummit from "../Past_events/Past_events"

export default function ESummitHome(){
  return(
    <div className="esummit-home">
      <Navbar/>
      <HeroSection/>
      <Esummit_Aboutus/>
      <Events_esummit/>
      <Past_events_esummit/>
    </div>
  )
}