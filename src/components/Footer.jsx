import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="ft-brand">
          <h4>Travel Mate<span>.</span></h4>
          <p>At TravelMate, we believe that every journey should be more than just a trip it should be a story worth remembering. Our team curates personalized travel experiences. blending breathtaking destinations with seamless planning and comfort.</p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul className="ft-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/policies">Policies</Link></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul className="ft-contact">
            <li>Phone: +92 300 1234567</li>
            <li>Email: support@TravelMate.com</li>
            <li>Punjab, Pakistan</li>
          </ul>
          <div className="ft-social">
            <a href="https://www.facebook.com" target='_blank' aria-label="Facebook"><FaFacebook/></a>
            <a href="https://www.instagram.com" target='_blank' aria-label="Instagram"><FaInstagram/></a>
            <a href="https://www.twitter.com" target='_blank' aria-label="X / Twitter"><FaTwitter/></a>
          </div>
        </div>
      </div>
      <div className="ft-sub">
        <p>© {new Date().getFullYear()} Travel Mate | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
