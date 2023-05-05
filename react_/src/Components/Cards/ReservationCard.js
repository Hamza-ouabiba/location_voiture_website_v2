import React from 'react';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import Reservations, { Cars } from '../../data/dataFromDB';

export const ReservationCard = ({price,status,message,date_depart,date_arrive,id}) => {
    const cars = Cars()
    const reservations = Reservations()
    //for each reservation there is a car associated with it : 
    const getImageFromReservation = () => 
    {
        let filteredreservation____ = reservations.filter((reservation) => reservation.id === id)
        let filteredCars___ = cars.filter((car) => car.idcar === filteredreservation____[0].idcar)
        if(filteredCars___[0] != undefined)
            return filteredCars___[0].image;
    }

    getImageFromReservation()
    return (
        <>
            <div className="w-full rounded overflow-hidden shadow-lg m-4 bg-white flex justify-between p-4">
                <div className="py-4">
                    <h3 className="font-bold py-5 text-2xl text-red-500">Reservation numéro : {id}</h3>
                    <p className="text-gray-700 text-base py-2"><span className='font-bold'>From : </span>  {date_depart} <span className='font-bold'>To : </span>  {date_arrive}</p>
                    <p className="text-gray-700 text-base py-2"><span className='font-bold'>Your message: </span>  {message}</p>
                    <p className={`${status ? 'text-green-500 py-2' : 'text-red-500 py-2'}`}><span className='text-black font-bold'>Status :</span> {`${status ? 'Your reservation is confirmed come over to pick up your fucking car.' : 'Not confirmed yet by the agency.'} `}</p>
                    <button className='py-4 bg-cyan-500 px-5 rounded-sm mt-3 text-white'>View more</button>
                </div>
                <div className="h-52 w-52 relative">
                    <div className="h-full w-full object-cover object-center rounded flex flex-col justify-center items-center">
                        <img src={`data:image/png;base64,${getImageFromReservation()}`} className=""/>
                    </div>
                </div>
            </div>
       </>

    );
};





