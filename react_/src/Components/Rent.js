import React from 'react'
import CarCard from './Cards/CarCard';
import { useState,useEffect } from 'react';
import axios from 'axios'

function Rent() {
  const [data,setData] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:8000/django_app/Voiture/')
    .then(response => setData(response.data))
    .catch(error => console.error(error));
  },[])

  return (
    <div className="">
       <div className="w-full md:w-2/3 py-4 px-6 mx-auto">
          <h1 className="text-center font-bold text-xl mb-4">All cars available for renting</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
               data.map((data,index) => {
                  console.log(data)
                  return(
                    <CarCard key={index} image={data.image} title={data.model} details={data.idCar} />
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