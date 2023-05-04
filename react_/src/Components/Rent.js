import React from 'react'
import CarCard from './Cards/CarCard';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Details from './Pages/Details';

function Rent() {
  const [data,setData] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:8000/django_app/Voiture/')
    .then(response => setData(response.data))
    .catch(error => console.error(error));
  },[])

  return (
    <div className="mb-5 bg-gradient-to-b w-full from-black to-gray-800">
       <div className="w-full md:w-2/3 py-4 px-6 mx-auto mb-7">
          <h1 className="text-center font-bold text-xl mb-4">All cars available for renting</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
               data.map((data,index) => {
                  return(
                    <CarCard key={data.idcar} image={data.image} title={data.model} details={data.idcar} id={data.idcar}/>
                  )
               })
             }
          </div>
        </div>
        <table>
       
        </table>
    </div>
  )
}


export default Rent