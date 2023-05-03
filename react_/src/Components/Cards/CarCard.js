import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Details from '../Pages/Details';
import { Link } from 'react-router-dom';

const CarCard = ({ id ,image, title, details }) => {

    return (
        <>
            {/* 
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{details}</p>
            </div> */}
            <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg m-4">
                <img className="w-full "  width={50} src={`data:image/png;base64,${image}`} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{details}</p>
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

export default CarCard;
