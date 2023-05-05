import React from 'react'
import { ReservationCard } from './Cards/ReservationCard'
import { useCookies } from 'react-cookie';
import Reservations from '../data/dataFromDB';

export default function Myreservations() {
    const [token, setToken] = useCookies(['mytoken'])
    const reservations = Reservations(token.myId,token)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            reservations.map((reser) => {
                if(reser.iduser == token.myId) {
                    return(
                        <ReservationCard 
                            date_arrive={reser.date_arr}
                            date_depart={reser.date_depart}
                            message={reser.message}

                       />
                    )
                }
            })
        }
    </div>
  )
}
