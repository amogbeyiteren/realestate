import React from 'react'
import { motion } from 'framer-motion';
import { House } from 'react-bootstrap-icons';

const Hero = () => {
  return (
    <section className="hero" id="home">
                <div className="container">
                  <div className="hero-content">
                    <p className="hero-subtitle">
                      <House />
                      <span>Real Estate Network Agency</span>
                    </p>
                    <h2 className="h1 hero-title">Find Your Dream House or Land By Us</h2>
                    <p className="hero-text">
                    Searching for your dream home or the perfect plot of land? 
                    We're here to help you find the ideal property that aligns with your vision and lifestyle
                    </p>
                    <button className="btn">Make An Enquiry</button>
                  </div>
                  <figure className="hero-banner">
                  <motion.div
                      variants={{
                        hidden: { opacity: 0,  scale: 0}, visible: { opacity: 1, scale: 1.0 },
                      }}

                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, }}>
                    <img
                      src="/images/hero-img.png"
                      alt="Modern house model"
                      className="w-100"
                    />
                    </motion.div>
                  </figure>
                </div>
              </section>
  )
}

export default Hero