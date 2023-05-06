import React from 'react';
import { useState, useEffect } from 'react';
import { faGasPump, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

export const CarCard = ({ id, image, title, details }) => {

    return (
        <>
            {/* 
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{details}</p>
            </div> */}
            <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg m-4 bg-white">
                <img className="h-96" src={`data:image/png;base64,${image}`} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{details.brand}</div>
                    <p className="text-gray-700 text-base">{details.model}</p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded">
                        Rent Now
                    </button>
                    <Link className="underline " to={`/details/${id}`}>
                        view details
                    </Link>
                </div>
            </div>
        </>

    );
};


export const CarCard1 = ({ id, image, brand, model, price, year, fuel, gearbox }) => {
    return (
        <div className="max-w-md lg:mx-5  rounded overflow-hidden shadow-lg   bg-white">
            <img className="h-80" src={`data:image/png;base64,${image}`} alt={brand} />
            <div className="px-6 py-4">
                <div className="flex justify-between items-center py-2">
                    <p className="font-bold text-lg">{brand} {model}</p>
                    <p className="font-bold bg-blue-700 text-white text-lg px-3 py-2 rounded">{price} DH</p>
                </div>
                <div className="flex justify-between py-2">
                    <p className="text-gray-700 text-base pr-5"><FontAwesomeIcon icon={faGasPump} className="mr-2" />{fuel}</p>
                    <p className="text-gray-700 text-base"><FontAwesomeIcon icon={faCog} className="mr-2" />{gearbox}</p>
                </div>
                <div className="flex justify-between items-center mt-4 py-2">
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2 px-4 rounded">
                        Rent Now
                    </button>
                    <Link className="  text-md text-blue-700 hover:text-blue-900" to={`/details/${id}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>



    );
};





