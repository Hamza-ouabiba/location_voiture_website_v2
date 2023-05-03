
import React from 'react';
import CarCard from '../Cards/CarCard';
import { RangeInput, BrandSelect, FuelSelect, SearchBox } from '../Cards/SearchCard'
import data from "../../data/brands_modelsAll.json"
export default function Car() {
  const car = {
    make: 'Tesla',
    model: 'Model S',
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg'
  };
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
          <h1 className="text-center font-bold text-xl mb-4">Car Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(data).map(brand =>
              data[brand].map(model => (
                <CarCard
                  key={model.model}
                  image={model.images[0]}
                  brand={brand}
                  model={model.model}
                  price="500"
                  year="{model.details['Start of production ']}"
                  fuel="{model.details['Fuel Type ']}"
                />
              ))
            )}





          </div>
        </div>
      </div>


    </>
  );
}
