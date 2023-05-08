
import React from 'react';
import { CarCard1 } from '../Cards/CarCard';
import { RangeInput, BrandSelect, FuelSelect, SearchBox } from '../Cards/SearchCard'
import { Cars, Brands, FuelTypes, GearBoxs } from '../../data/dataFromDB';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Car() {

  const brands = Brands()
  const fuels = FuelTypes()
  const gears = GearBoxs()
  const cars = Cars();
  const [maxPrice, setMaxPrice] = useState(parseInt(5000));
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
    console.log(searchValue)
  };
  const handleSearchClick = (value) => {
    setSearchValue(value);
    console.log(searchValue)
  };

  const handleMaxPriceChange = (maxPrice) => {
    console.log('Max Price:', maxPrice);
    setMaxPrice(maxPrice);
  };

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId);
  };

  const handleFuelChange = (fuel) => {
    setSelectedFuel(fuel);
  };


  function Filteredcars(cars, maxPrice, selectedBrand, selectedFuel, searchValue) {
    let filteredData = cars.filter((car) => car.price <= maxPrice);
    if (selectedBrand) {
      filteredData = filteredData.filter((car) => car.idmarque == selectedBrand);
    }
    if (selectedFuel) {
      filteredData = filteredData.filter((car) => car.idcarburant == selectedFuel);
    }
    if (searchValue) {
      filteredData = filteredData.filter((car) => car.model.toLowerCase().startsWith(searchValue.toLowerCase())
        || brands.find((b) => b.idmarque == car.idmarque).nom.toLowerCase().startsWith(searchValue.toLowerCase()));
    }
    return filteredData;
  }
  if (cars.length == 0) {
    return <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="text-xl font-bold text-gray-900 ml-4">Loading... </div>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>

  }
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-200 w-full md:w-1/2 lg:w-1/3 min-w py-4 px-6" >
          <h1 className="text-2xl font-bold">Car Catalog</h1>
          <form className="mt-4">
            <SearchBox onSearchClick={handleSearchClick} onSearchChange={handleSearchChange} />
            <RangeInput onMaxPriceChange={handleMaxPriceChange} maxPrice={maxPrice} />
            <BrandSelect onBrandChange={handleBrandChange} />
            <FuelSelect onFuelChange={handleFuelChange} />
          </form>
        </div >
        <div className=" my-4 mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
              Filteredcars(cars, maxPrice, selectedBrand, selectedFuel, searchValue).map((data, index) => {
                console.log(data)
                return (
                  <CarCard1
                    key={index}
                    id={data.idcar}
                    image={data.image}
                    brand={brands.find((b) => b.idmarque == data.idmarque).nom}
                    model={data.model}
                    price={data.price}
                    year={2018}
                    fuel={fuels.find((b) => b.idcarburant == data.idcarburant).nom}
                    gearbox={gears.find((b) => b.id == data.idTransmission).type}
                  />
                )
              })
            }

          </div>
        </div>
      </div >


    </>
  );
}
