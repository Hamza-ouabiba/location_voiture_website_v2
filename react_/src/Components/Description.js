import React from 'react'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Description({image,data}) {
  return (
    <div className='flex justify-around	'>
          <div>
                <img src={`data:image/png;base64,${image}`} className='rounded-sm h-max	'/>
          </div>
          <div>
             <h3 className='text-4xl capitalize font-bold'>{data.model}</h3>
             <div className='flex justify-between mt-5'>
                <div>
                    <span>{data.start_prod}</span>
                    <FontAwesomeIcon className='text-cyan-500 h-2' icon={faDotCircle} />
                </div>
                <div>
                    <span>{data.gearbox}</span>
                    <FontAwesomeIcon className='text-cyan-500 h-2' icon={faDotCircle} />
                </div>
             </div>
          </div>
    </div>
  )
}
