
import React from 'react';
import { CarCard1 } from '../Cards/CarCard';
import { RangeInput, BrandSelect, FuelSelect, SearchBox } from '../Cards/SearchCard'
import { Cars, Brands, FuelTypes, GearBoxs } from '../../data/dataFromDB';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Car() {
  const cars = Cars()
  console.log(cars)
  const brands = Brands()
  console.log(brands)
  const fuels = FuelTypes()
  console.log(fuels)
  const gears = GearBoxs()

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
              cars.map((data, index) => {
                return (
                  <CarCard1
                    key={index}
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
      </div>


    </>
  );
}
