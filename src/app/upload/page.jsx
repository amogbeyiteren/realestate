'use client'
import React, { useState } from 'react';
import { db } from '../Firebase';
import { storage } from '../Firebase';
import { ref } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



function PropertyForm() {
 
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl]= useState(null);
  const propertyCollectionRef = collection(db, "property");
  const [formData, setFormData] = useState({
    
    
    amenities: {
      kidPlayground: false,
      swimmingPool: false,
      kingSizeBeds: false,
      libraryArea: false,
      parkingSpace: false,
      privateSecurity: false,
      smartHome: false,
    },
    price: 0,
    type: 'House',
    buy: false,
    location: null
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        amenities: {
          ...prevData.amenities,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleImageChange = (event) => {
    setImageUpload(event.target.files[0]);
  };


  const handleSubmit = async (event) => {
    
    event.preventDefault();
    
    
     const imageRef =  ref(storage, `propertyImage/${imageUpload.name}`);
     try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      setImageUrl(url);
      console.log(url)

  
   
   
      const propertyData = {
        ...formData,
        image: url, // Store the image link in the Firestore document
      };
      
    
      
        
        
       await addDoc(propertyCollectionRef, {propertyData});
       
    
        
    
        console.log('Form submitted successfully');
   

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
  <div className='w-screen  min-h-screen flex justify-center items-center'>
    <div className='md:w-[screen] w-[50%] min-h-screen flex flex-col p-3 border border-black'>
  <h2 className='text-2xl font-semibold mb-4'>Add Property</h2>
  <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
    <div className='flex flex-wrap gap-4'>
      <label className='w-full sm:w-auto'>
        Amenities:
      </label>
      {Object.keys(formData.amenities).map((amenity) => (
        <label key={amenity} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center'>
          <input
            type="checkbox"
            name={amenity}
            checked={formData.amenities[amenity]}
            onChange={handleInputChange}
            className='mr-2'
          />
          {amenity}
        </label>
      ))}
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        className='w-full border rounded px-2 py-1'
      />
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
      <label>Type:</label>
      <select
        name="type"
        value={formData.type}
        onChange={handleInputChange}
        className='w-full border rounded px-2 py-1'
      >
        <option value="House">House</option>
        <option value="Land">Land</option>
      </select>
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
      <label>Mode of Purchase:</label>
      <select
        value={formData.buy}
        name="buy"
        checked={formData.buy}
        onChange={handleInputChange}
        className='w-full border rounded px-2 py-1'
      >
        <option value={true}>Buy</option>
        <option value={false}>Rent or Lease</option>
      </select>
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
      <label>Location:</label>
      <select
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        className='w-full border rounded px-2 py-1'
      >
                    <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>

      </select>
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
      <label>Image:</label>
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
        className='w-full border rounded px-2 py-1'
      />
    </div>
    <button
      type="submit"
      className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
    >
      Submit
    </button>
  </form>
</div>
</div>
  )
}

export default PropertyForm;
