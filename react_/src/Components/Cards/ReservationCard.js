import React from 'react';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import Reservations from '../../data/dataFromDB';

export const ReservationCard = ({price,id_res,status,message,date_depart,date_arrive}) => {

    return (
        <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg m-4 bg-white">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{date_arrive}</div>
                    <p className="text-gray-700 text-base">{date_depart}</p>
                    <p className="text-gray-700 text-base">{id_res}</p>
                    <p className="text-gray-700 text-base">{message}</p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                </div>
            </div>
    );
};





