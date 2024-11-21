import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='tomatologofooter' src={assets.logo} alt="" />
            <p>Food that feels like home.</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Cravify</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+91987654321</li>
              <li>contact@cravify.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © Cravify.com - All rights reserved.</p>
    </div>
  )
}

export default Footer