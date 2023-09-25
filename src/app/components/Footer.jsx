import React from 'react'
import {Youtube, Instagram, Linkedin, Facebook, TelephoneFill, Envelope} from 'react-bootstrap-icons'




const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-top">
      <div className="container">
    
        <div className="footer-brand">
    
        <a href="#" className="text-2xl font-semibold w-[250px] h-[50px]">
                      Homak<span className='font-bold text-[#800F2F] inline'>Connect</span>
                    </a>
    
          <p className="section-text">
          Find Your Dream House or Land By Us.
          </p>
    
          <ul className="contact-list">
    
           
    
            <li>
              <a href="tel:+0123456789" className="contact-link">
                <TelephoneFill />
    
                <span>+234 8039603917</span>
              </a>
            </li>
    
            <li>
              <a href="mailto:contact@homakConnect.com" className="contact-link">
                <Envelope />
    
                <span>contact@HomakConnect.ng</span>
              </a>
            </li>
    
          </ul>
    
          <ul className="social-list">
    
            <li>
              <a href="#" className="social-link hover:text-[#800F2F]">
                <Facebook />
              </a>
            </li>
    
            <li>
              <a href="#" className="social-link hover:text-[#800F2F]">
                <Instagram />
              </a>
            </li>
    
            <li>
              <a href="#" className="social-link hover:text-[#800F2F]">
                <Linkedin/>
              </a>
            </li>
    
            <li>
              <a href="#" className="social-link hover:text-[#800F2F]">
                <Youtube/>
              </a>
            </li>
    
          </ul>
    
        </div>
    
        <div className="footer-link-box">
    
          <ul className="footer-list">
    
            <li>
              <p className="footer-list-title">Company</p>
            </li>
    
            <li>
              <a href="/about" className="footer-link">About</a>
            </li>
    
            <li>
              <a href="/contact" className="footer-link">Contact Us</a>
            </li>
    
            <li>
              <a href="/property" className="footer-link">All Properties</a>
            </li>
    

    
          </ul>
    
          <ul className="footer-list">
    
            <li>
              <p className="footer-list-title">Services</p>
            </li>
    
            <li>
              <a href="/terms" className="footer-link">Terms and Conditions</a>
            </li>
    
            <li>
              <a href="/privacy" className="footer-link">Privacy Policy</a>
            </li>
    
            <li>
              <a href="/workWithUs" className="footer-link">Work With Us</a>
            </li>
    
           
            
    
          </ul>
    
          
    
        </div>
    
      </div>
    </div>
    
    <div className="footer-bottom">
      <div className="container">
    
        <p className="copyright">
          &copy; 2023 <a href="/">HomakConnect</a>. All Rights Reserved
        </p>
    
      </div>
    </div>
    
    </footer>
  )
}

export default Footer