import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import Description from '../Description';
export default function Details() {
    const params = useParams()
    const [data,setData] = useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:8000/django_app/Voiture/${params.id}/`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.error(error));
    },[])


  return (
    <div className=''>
        <h1 className='text-cyan-500 text-center mt-8 font-bold text-4xl capitalize'>Details of car {`${params.id}`}</h1>
        <div className='my-8'>
            <Description image={data.image} data={data}/>
             <div className='main-image'>
                  { 
                      //it will be replaced with the links retrieved from database : 
                        // data.image.split('').map((d) => {
                        //     <img src={`${d}`} className='rounded-sm'/>
                        // })
                  }
             </div>
        </div>
    </div>
  )
}
