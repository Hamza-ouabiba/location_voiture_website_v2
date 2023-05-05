import React from 'react'
import { ReservationCard } from './Cards/ReservationCard'
import { useCookies } from 'react-cookie';
import Reservations from '../data/dataFromDB';

export default function Myreservations() {
    const [token, setToken] = useCookies(['mytoken'])
    const reservations = Reservations(token)
  return (
    <>
        <h1 className='text-4xl p-11 underline'>Mes reservations</h1>
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
    </>
  )
}
