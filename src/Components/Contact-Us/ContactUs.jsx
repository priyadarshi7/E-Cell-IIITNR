import React from 'react'
import './Contact.css'

const ContactUs = () => {
  return (
    <div>
        <header class="header">

<div id="menu-btn" class="fas fa-bars"></div>

<a data-aos="zoom-in-left" data-aos-delay="150" href="#home" class="logo"> E-Cell </a>

<nav class="navbar">
    <a data-aos="zoom-in-left" data-aos-delay="300" href="index.html#home">home</a>
    <a data-aos="zoom-in-left" data-aos-delay="450" href="index.html#about">about</a>
    <a data-aos="zoom-in-left" data-aos-delay="600" href="index.html#destination">events</a>
    <a data-aos="zoom-in-left" data-aos-delay="750" href="index.html#services">E-Summit</a>
    <a data-aos="zoom-in-left" data-aos-delay="900" href="index.html#gallery">gallery</a>
    {/* <!-- <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">blogs</a> --> */}
</nav>

<a data-aos="zoom-in-left" data-aos-delay="1300" href="contact.html" class="btn">Contact Us</a>

</header>

<section id="section-wrapper">
<div class="box-wrapper">
    <div class="info-wrap">
        <h2 class="info-title">Contact Information</h2>
        <h3 class="info-sub-title">Fill up the form with your queries and our Team will get back to you within 24 hours</h3>
        <ul class="info-details">
            <li>
                <i class="fas fa-phone-alt"></i>
                <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
            </li>
            <li>
                <i class="fas fa-paper-plane"></i>
                <span>Email:</span> <a href="mailto:ecell@iiitnr.edu.in">ecell@iiitnr.edu.in</a>
            </li>
            <li>
                <i class="fas fa-globe"></i>
                <span>Website:</span> <a href="#">yoursite.com</a>
            </li>
        </ul>
        <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
    <div class="form-wrap">
        <form action="#" method="POST">
            <h2 class="form-title">Send us a message</h2>
            <div class="form-fields">
                <div class="form-group">
                    <input type="text" class="fname" placeholder="First Name"/>
                </div>
                <div class="form-group">
                    <input type="text" class="lname" placeholder="Last Name"/>
                </div>
                <div class="form-group">
                    <input type="email" class="email" placeholder="Mail"/>
                </div>
                <div class="form-group">
                    <input type="number" class="phone" placeholder="Phone"/>
                </div>
                <div class="form-group">
                    <textarea name="message" id="" placeholder="Write your message"></textarea>
                </div>
            </div>
            <input type="submit" value="Send Message" class="submit-button"/>
        </form>
    </div>
</div>
</section>
    </div>
  )
}

export default ContactUs