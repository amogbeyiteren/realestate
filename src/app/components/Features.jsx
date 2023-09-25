import React from 'react'
import {CarFrontFill, ArrowRight, Water, ShieldLockFill, HospitalFill, Bookshelf, HouseCheck, HouseGearFill, PersonHearts } from 'react-bootstrap-icons'


const Features = () => {
  return (
    <section className="features">
                  <div className="container">

                    <p className="section-subtitle">Our Aminities</p>

                    <h2 className="h2 section-title">Building Aminities</h2>

                    <ul className="features-list">

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <CarFrontFill />
                          </div>

                          <h3 className="card-title">Parking Space</h3>

                          <div className="card-btn">
                            <ArrowRight />
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <Water />
                          </div>

                          <h3 className="card-title">Swimming Pool</h3>

                          <div className="card-btn">
                          <ArrowRight />
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <ShieldLockFill />
                          </div>

                          <h3 className="card-title">Private Security</h3>

                          <div className="card-btn">
                            <ArrowRight/>
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <HospitalFill/>
                          </div>

                          <h3 className="card-title">Medical Center</h3>

                          <div className="card-btn">
                          <ArrowRight/>
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <Bookshelf />
                          </div>

                          <h3 className="card-title">Library Area</h3>

                          <div className="card-btn">
                          <ArrowRight/>
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <HouseCheck />
                          </div>

                          <h3 className="card-title">King Size Beds</h3>

                          <div className="card-btn">
                          <ArrowRight/>
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <HouseGearFill />
                          </div>

                          <h3 className="card-title">Smart Homes</h3>

                          <div className="card-btn">
                          <ArrowRight/>
                          </div>

                        </a>
                      </li>

                      <li>
                        <a href="#" className="features-card">

                          <div className="card-icon">
                            <PersonHearts />
                          </div>

                          <h3 className="card-title">Kid’s Playland</h3>

                          <div className="card-btn">
                          <ArrowRight/>
                          </div>

                        </a>
                      </li>

                    </ul>

                  </div>
                </section>
  )
}

export default Features