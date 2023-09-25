'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { Bank2, PeopleFill, SendFill, CashCoin,} from 'react-bootstrap-icons'


const About = () => {
  return (
    <section className="about" id="about">
                <div className="container">
                  <figure className="about-banner">
                  



                  <motion.div
                      variants={{
                        hidden: { opacity: 0, rotate: -45, scale: 0.5}, visible: { opacity: 1,  rotate: 0, scale: 1.0 },
                      }}

                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}>
                    <img src="/images/about-img.png" alt="House interior" />
                  </motion.div>
                    </figure>
                  <div className="about-content">
                    <p className="section-subtitle">About Us</p>
                    <h2 className="h2 section-title">Transforming Real Estate: Your Trusted Marketplace</h2>
                    <p className="about-text">
                    Join our mission to transform the real estate industry! We've created a dynamic marketplace connecting sellers, buyers, and agents for seamless property transactions. Discover simplified buying and selling with us
                    </p>
                    <ul className="about-list">
                      <li className="about-item">
                        <div className="about-item-icon text-[#800F2F]">
                          <Bank2 />
                        </div>
                        <p className="about-item-text">Innovative Marketplace</p>
                      </li>
                      <li className="about-item">
                        <div className="about-item-icon text-[#800F2F]">
                          <PeopleFill />
                        </div>
                        <p className="about-item-text">Experienced Team</p>
                      </li>
                      <li className="about-item">
                        <div className="about-item-icon text-[#800F2F]">
                          <SendFill />
                        </div>
                        <p className="about-item-text">Your Real Estate Hub</p>
                      </li>
                      <li className="about-item">
                        <div className="about-item-icon text-[#800F2F]">
                          <CashCoin />
                        </div>
                        <p className="about-item-text">Elevating Transactions</p>
                      </li>
                    </ul>
                    <p className="callout">
                      "At HomakConnect, we've been inspired to pioneer a property marketplace where dreams find their home"
                    </p>
                    <a href='/about' className="btn">Discover More</a>
                  </div>
                </div>
              </section>
  )
}

export default About