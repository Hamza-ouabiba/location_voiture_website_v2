import React from 'react'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableInfo from './Cards/TableInfo';

export default function Description({image,data}) {
  return (
    <div className='flex justify-around	'>
          <div>
                <img src={`data:image/png;base64,${image}`} className='rounded-sm h-max	max-w-xl	'/>
          </div>
          <div className='w-96'>
             <h3 className='text-4xl capitalize font-bold'>{data.model}</h3>
             <div className='flex justify-between mt-5'>
                <div className='mx-5'>
                    <span className='text-gray-500'>{data.start_prod}</span>
                    <FontAwesomeIcon className=' text-cyan-500 h-2 px-3' icon={faDotCircle} />
                </div>
                <div>
                    <span className='text-gray-500'>{data.gearbox}</span>
                    <FontAwesomeIcon className=' text-cyan-500 h-2 px-3' icon={faDotCircle} />
                </div>
             </div>
            <div>
                <span class="block border-t border-gray-300 my-4 w-100"></span>
                <p className='text-cyan-700 font-bold text-5xl'>{data.price} MAD</p>
            </div>

            <TableInfo />
          </div>
          
    </div>
  )
}
