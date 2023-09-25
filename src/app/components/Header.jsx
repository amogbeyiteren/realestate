'use client'
import React, { useState } from 'react'
import { Search, XCircleFill } from 'react-bootstrap-icons'
import { List } from 'react-bootstrap-icons'


const Header = () => {
  const[active, setActive] = useState(false);
  return (
    
    <header className="header" >
    <div className={active?"overlay active":"overlay"} ></div>
    {/* Header Top */}
    <div className="header-bottom">
      <div className="container">
        <a href="#" className="text-2xl font-semibold w-[250px] h-[50px]">
          Homak<span className='font-bold text-[#800F2F] inline'>Connect</span>
        </a>
        <nav className={active?"navbar active":"navbar"} >
          <div className="navbar-top">
          <a href="#" className="text-2xl font-semibold w-[250px] h-[50px]">
          Homak<span className='font-bold text-[#800F2F] inline'>Connect</span>
        </a>
            <button onClick={()=>{setActive(false)}} className="text-2xl text-[#590D22] text-center" data-nav-close-btn aria-label="Close Menu">
              <XCircleFill/>
            </button>
          </div>
          <div className="navbar-bottom">
            <ul className="navbar-list">
              <li>
                <a href="/" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="navbar-link" data-nav-link>
                  About
                </a>
              </li>
              <li>
                <a href="/property" className="navbar-link" data-nav-link>
                  Property
                </a>
              </li>
              <li>
                <a href="/contact" className="navbar-link" data-nav-link>
                  Contact
                </a>
              </li>
              <li>
                <a href="/contact" className="navbar-link" data-nav-link>
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-bottom-actions">
          <a href='/property' className="header-bottom-actions-btn font-extrabold text-xl flex justify-center items-center text-[#590D22]" aria-label="Search">
            <Search/>
            <span>Search</span>
          </a>
          <button onClick={()=>{setActive(true)}}  className="header-bottom-actions-btn font-extrabold text-xl flex justify-center items-center text-[#590D22]" aria-label="Search">
          <List />
            
            <span>Menu</span>
          </button>
        </div>

      </div>
    </div>

  </header>
  )
}

export default Header