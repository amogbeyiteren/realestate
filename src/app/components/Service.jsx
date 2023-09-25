import React from 'react'
import Image from 'next/image'
import {ArrowRightCircle} from 'react-bootstrap-icons'

const Service = () => {
  return (
    <section className="service" id="service">
        <div className="container">

          <p className="section-subtitle">Our Services</p>

          <h2 className="h2 section-title">Our Main Focus</h2>

          <ul className="service-list">

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <Image width={50} height={50} src="/images/house.svg" alt="Service icon"/>
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Buy or Rent a House</a>
                </h3>

                <p className="card-text">
                Explore a world of possibilities with us. 
                Whether you're looking to own your dream house or find the perfect rental, we've got you covered. Begin your housing journey today.
                </p>

                <a href="#" className="card-link">
                  <span>Find A Home</span>
                  <ArrowRightCircle/>

                  
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <Image width={50} height={50} src="/images/land.svg" alt="Service icon"/>
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Buy or Lease Land</a>
                </h3>

                <p className="card-text">
                Your path to land ownership begins here. Whether you envision buying your own piece of earth or prefer the flexibility of leasing, we're your trusted partner. 
                Start your land journey today!
                </p>

                <a href="#" className="card-link">
                  <span>Find A Plot of Land</span>

                  <ArrowRightCircle/>
                </a>

              </div>
            </li>

            

          </ul>

        </div>
               </section>
  )
}

export default Service