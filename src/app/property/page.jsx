import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyForm from '../components/propertyForm/PropertyForm'
import Pagination from '../components/PropertyPagination'


const page = () => {
  return (
    <>
    <Header/>
    <section className="property" id="property">
        <div className="container flex flex-col justify-center items-center">

          <p className="section-subtitle">Properties</p>
         
          <h2 className="h2 section-title">Search Listings</h2>
          <PropertyForm />
          

                      

          
          <Pagination />
            
        </div>
    </section>
    <Footer/>
    </>
    
  )
}

export default page