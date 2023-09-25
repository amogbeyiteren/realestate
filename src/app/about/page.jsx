'use client'
import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import { motion } from 'framer-motion';
import { Bank2, PeopleFill, SendFill, CashCoin,} from 'react-bootstrap-icons'


const page = () => {
  return (
    <div>
        <Header/>
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
                    
                  </div>
                </div>
        </section>
        <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">What We Do?</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
                    At Homakestates we understand that the real estate business cannot reach heights and full potential without making connections. 
                    That’s why we aim to assist property sellers, buyers, and agents in finding new connections to create a profitable and lasting relationship. 
                    Our platform is a one-stop solution and delivers a broad array of featured properties. We offer marketing services that are designed solely to help real estate professionals connect with buyers and sellers. 
                    By leveraging the right tools and services, we help people grow their business. Those interested in purchasing and selling can join our platform to know the industry and work with successful agents. 
                    Our head office is situated in Delta state Nigeria.
          </p>
        </section>
        <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">How We Work?</h2>
                    <p className="border-[#800F2F] border-l-4 pl-3 pr-8 text-[#800F2F] py-4 bg-[#FFF0F3]">
                    While creating information technologies for the real estate market, we connect a significant number of active sellers and landowners with the competitive and potential agents. To maximize the exposure, the agents connected with our platform sign in and help us promote the platform, which attracts property listing in the network. By carefully selecting our agents, we are able to receive reliable information hence helping the sellers and buyers to choose a property in their desired location. Moreover, we know how much value a good estate agent holds, and that's why we work with not a limited number of agents but thousands of them. Those agents recognize how to value our audience and our services.
          </p>
        </section>
        <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Why And Where?</h2>
                    <p className="border-[#A4133C] border-l-4 pl-3 pr-8 text-[#A4133C] py-4 bg-[#FFF0F3]">
                    Many failed startups by other companies spurred us into action, and we came up with the idea of building a market place for property sellers, buyers, and agents where they can connect and sell or buy properties easily. With the idea of bridging the gap, we emerged. After gaining a unique experience by working with many agents, we got a perspective on the online property business, that enabled us to provide valuable services to our customers. Similarly, our team has set sight to create a gateway that will help sellers and buyers to come forward
          </p>
        </section>
        <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Our Mission</h2>
                    <p className="border-[#C9184A] border-l-4 pl-3 pr-8 text-[#590D22] py-4 bg-[#FFF0F3]">
                    We aim to become a reliable market place for those who want to be in the center of the real estate industry and want make our platform stand out by finding solutions to help you sell or buy the property. Similarly, our marketplace is continuously striving to simplify the buying and selling process.
          </p>
        </section>
        <Footer/>
    </div>
  )
}

export default page