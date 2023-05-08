import React, { useState } from 'react'
import { FuelTypes, Brands } from '../../data/dataFromDB';

export function RangeInput() {
    const [maxPrice, setMaxPrice] = useState(1000);


    const handleMaxChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
    };

    return (
        <div>
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="brand">
                Price
            </label>
            <label htmlFor="max-price">Max Price:</label>
            <input
                className='w-full'
                type="range"
                id="max-price"
                name="max-price"
                max="1000"
                value={maxPrice}
                onChange={handleMaxChange}
            />
            <span>{maxPrice}</span>
        </div>
    );
}
export function BrandSelect() {
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
    };
    const data = Brands();
    console.log(data)
    return (
        <div>
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="brand">
                Brand
            </label>
            <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brand" name="brand" value={selectedBrand} onChange={handleBrandChange}>
                <option value="">Select a brand</option>
                {data.map((brand) => (
                    <option key={brand.idMarque} value={brand.nom}>{brand.nom}</option>
                ))}
            </select>
        </div>
    );
}

export function FuelSelect() {
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
    };
    const fuels = FuelTypes();
    console.log(fuels)
    return (
        <div>
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="fuel">
                Fuel Type
            </label>
            <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fuel"
                name="fuel"
            >
                <option value="">Select fuel type</option>
                {fuels.map((fuel) => (
                    <option key={fuel.idCarburant} value={fuel.nom}>{fuel.nom}</option>
                ))}
            </select>
        </div>
    );
}


export function SearchBox() {
    return (
        <div className="flex ">
            <input type="text" className="border border-gray-400 w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Search" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-r-md focus:outline-none focus:shadow-outline" type="submit">
                Search
            </button>
        </div>

    );
}
