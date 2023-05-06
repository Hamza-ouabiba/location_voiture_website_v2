import React, { useEffect, useState } from 'react'
import { ReservationCard } from './Cards/ReservationCard'
import { useCookies } from 'react-cookie';
import Reservations from '../data/dataFromDB';
import { useSearchParams } from 'react-router-dom';

export default function Myreservations() {
    const [token, setToken] = useCookies(['mytoken'])
    const reservations = Reservations(token)
    const [error,setError] = useState(false)
    useEffect(() => {
        if(reservations.length == 0)
             setError(true)
        else setError(false)
    },[reservations.length])
  return (
    <>
        <h1 className='text-4xl p-11 text-center '>My reservations</h1>
        <span className="block border-t border-gray-300 "></span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-1/2 gap-6 mx-auto'>
            {
                reservations.map((reser,index) => {
                    if(reser.iduser == token.myId) {
                        return(
                            <ReservationCard key={index}
                                date_arrive={reser.date_arr}
                                date_depart={reser.date_depart}
                                message={reser.message}
                                status={reser.status}
                                id = {reser.id}
                             />
                        )
                    }
                })
            }
        </div>
        { error == true && <div className='font-bold text-red-500 text-center'>No reservations registered try to rent a car </div>}
    </>
  )
}
