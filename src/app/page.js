'use client'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Property from './components/Property'
import Features from './components/Features'
import ExploreProperty from './components/ExploreProperty'
import Footer from './components/Footer'





const page = () => {

  return (
    
        <div>
          <Header />
          <main>
            <article>
              <Hero />
              <About />
              <Service />
              <Property />
              <Features />
              <ExploreProperty />

                


              
                
              </article>
            </main>
            <Footer />
   


          </div>
      
    
  )
}

export default page