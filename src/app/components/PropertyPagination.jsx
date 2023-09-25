'use client'
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { db } from '../Firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



const itemsPerPage = 9;


const Pagination = () => {
  const [property, setProperty] = useState([]);
  const propertyCollectionRef = collection(db, "property");

  useEffect(() => {
    const getProperty = async () => {
      const data = await getDocs(propertyCollectionRef);
      setProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProperty();
  }, []);
console.log(property);









  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = property.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(property.length / itemsPerPage);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Render the current page of items */}
      <div className="flex justify-center items-center flex-wrap gap-4 w-screen h-full px-5">
        {currentItems.map((item, index) => (
          <PropertyCard key={index} price={item.price} image={item.propertyData.image} />
          
        ))}
      </div>

      {/* Pagination controls */}
      <div className="mt-4 h-14 w-screen flex justify-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-2 rounded ${
              currentPage === index + 1 ? 'bg-[#800F2F] text-white' : 'bg-gray-300'
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
