
import React from 'react';
import CarCard from '../Cards/CarCard';
import { RangeInput, BrandSelect, FuelSelect, SearchBox } from '../Cards/SearchCard'
import data from "../../data/brands_modelsAll.json"
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Car() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/django_app/Voiture/')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [])


  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-200 w-full md:w-1/3 py-4 px-6">
          <h1 className="text-2xl font-bold">Car Catalog</h1>
          <form className="mt-4">
            <SearchBox />
            <RangeInput />
            <BrandSelect />
            <FuelSelect />

          </form>
        </div>

        <div className="w-full md:w-2/3 py-4 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              data.map((data, index) => {
                console.log(data)
                return (
                  <CarCard
                    key={index}
                    image={data.image}
                    brand={data.idmarque}
                    model={data.model}
                    price={data.price}
                    year={2018}
                    fuel={data.idcarburant} />
                )
              })
            }






          </div>
        </div>
      </div>


    </>
  );
}
