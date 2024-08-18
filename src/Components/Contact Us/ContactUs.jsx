import React from 'react'
import "./ContactUs.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ContactUs = () => {
  return (
    <div className='contact-cont'>
        <div className="ecell-section contact-section">
            <h1 style={{marginBottom: "4%", fontWeight:"600"}}>E-Cell</h1>
            <p style={{color: "rgba(255 ,255, 255, 0.7)",}}>The most import thing in communication is to hear what isn't beign said. So come connect with us and share your reviews and ideas.</p>
            <div className="socials">
                <br></br>
                <FacebookRoundedIcon sx={{color: "aqua", fontSize:"1.8rem"}}/>
                &nbsp;
                <XIcon sx={{color: "aqua", fontSize:"1.8rem"}}/>
                &nbsp;
                <InstagramIcon sx={{color: "aqua", fontSize:"1.8rem"}}/>
                &nbsp;
                <LinkedInIcon sx={{color: "aqua", fontSize:"1.8rem"}}/>
            </div>
        </div>
        <div className="quick-section contact-section">
            <h1 style={{marginBottom: "4%", fontWeight:"600"}}>Quick Links</h1>
            <div className="links">
                <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                Home</div>
                <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                About
                </div>
                <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                Events
                </div>
                <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                E-Summit
                </div>
                <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                Gallery
                </div>
            </div>
        </div>
        <div className="contact-section contact-section">
            <h1 style={{marginBottom: "3%"}}>Contact Info</h1>
            <div className="contacts">
                <div className="contact-info"><LocationOnIcon sx={{color: "aqua"}}/>&nbsp;&nbsp;IIIT Naya Raipur, Chattisgarh</div>
                <div className="contact-info"><LocalPhoneIcon sx={{color: "aqua"}}/>&nbsp;&nbsp;+91 79876 65370</div>
                <div className="contact-info"><MailIcon sx={{color: "aqua"}}/>&nbsp;&nbsp;Ecell@Iiitnr.Edu.In</div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs