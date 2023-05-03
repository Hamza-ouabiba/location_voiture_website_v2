import React from 'react'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from 'react';
import TableInfo from './Cards/TableInfo';

export default function Description({image,data}) {
  const [imageSliderIndex, setImageSliderIndex] = useState(0);
  const cars = [
     {url: 'https://www.auto-data.net/images/f65/Audi-100-4A-C4.jpg '},
     {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
     {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
     {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
     {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
     {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
  ]
  return (
    <div className='flex justify-around	'>
          <div className=' mr-2.7vw'>
                <img src={cars[imageSliderIndex].url} className='rounded-sm h-max max-w-xl'/>
                <div className='flex overflow-scroll h-52 max-w-2xl'>
                  {
                    cars.map((car,index) => {
                        console.log(imageSliderIndex)
                        return(
                            <img src={car.url} key={index} className='rounded-sm max-h-51 w-52 mt-5 mx-2' onClick={() => setImageSliderIndex(index)} />
                        )
                    })
                  }
                </div>
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
                <span className="block border-t border-gray-300 my-4 w-100"></span>
                <p className='text-cyan-700 font-bold text-5xl'>{data.price} MAD</p>
            </div>

            <TableInfo />
          </div>
          
    </div>
  )
}
