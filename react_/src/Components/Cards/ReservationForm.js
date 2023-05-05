import React from 'react';
import Modal from 'react-modal'
import { useState,useEffect } from 'react';
import APISerive from '../../data/ApiService';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import Reservations from '../../data/dataFromDB';

function ReservationForm({data}) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [date_dep,setStartDate] = useState('')
    const [date_arr,setEndDate] = useState('')
    const [message,setMessage] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const params = useParams()
    const [success,setSuccess] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [errorStatus,setErrorStatus] = useState(false)
    const reservations = Reservations()
    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          borderRadius: '5px',
        },
      };
    
    const getDatesParsed = (date) =>
    {
        return new Date(date)
    }
    
    const getIdCar = () =>
    {
        return params.id;
    }

    const checkReservation = () => 
    {
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth();
            const currentDay = now.getDate();
            const currentDate = new Date(currentYear, currentMonth, currentDay);
            
            const dateDepart = new Date(date_dep);
            const dateArriv = new Date(date_arr);
            const departYear = dateDepart.getFullYear();
            const departMonth = dateDepart.getMonth();
            const departDay = dateDepart.getDate();
            const departDate = new Date(departYear, departMonth, departDay);
            
            if (departDate > dateArriv) {
            setErrorStatus(true);
            setErrorMessage('You cannot insert this date. The start date must be before the end date.');
            return false;
            }
            
            if (departDate < currentDate) {
            setErrorStatus(true);
            setErrorMessage('You cannot insert this date. The start date must be today or later.');
            return false;
            }
      return true;
    }

    const checkReservationSameDates = () =>
    {
        if(checkReservation()) 
        {
            // setErrorDate(false)
            // setErrorNow(false)
            setErrorStatus(false)
            //mapping through all dates : 
            for(let i = 0;i<reservations.length;i++){
                 let dateDepart = getDatesParsed(reservations[i].date_depart)
                 let dateArrive = getDatesParsed(reservations[i].date_arr)
                 let dateDepartUser = getDatesParsed(date_dep)
                 let dateArriveUser = getDatesParsed(date_arr)
                 //getting the range between the two dates : 
                if(reservations[i].idcar === params.id)
                {
                    for(let i = dateDepart;i<=dateArrive;i.setDate(i.getDate() + 1)) 
                    {
                        if((i.getDate() == dateDepartUser.getDate() && i.getMonth() == dateDepartUser.getMonth() && i.getFullYear()
                        == dateDepartUser.getFullYear()) || (i.getDate() == dateArriveUser.getDate() && i.getMonth() == dateArriveUser.getMonth() && i.getFullYear()
                        == dateArriveUser.getFullYear()))
                        {
                            setErrorStatus(true)
                            setErrorMessage('there is already a reservation in this date try another date')
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    }

    const handleSubmit = async (e) => {
       e.preventDefault();
       if(checkReservationSameDates()) {
            setErrorStatus(false)
            APISerive.InsertReservation({iduser: token.myId,idcar: params.id, date_depart: date_dep,date_arr: date_arr,message: message,status:false},token)
            .then((response) => {
                    if(response.hasOwnProperty('non_field_errors'))
                    {
                        if(response.non_field_errors[0] == "The fields idcar, iduser must make a unique set.")
                        {
                            setErrorMessage("you've already make a reservation with this car try to view your reservations section : ")
                            setErrorStatus(true)
                        } 
                    } else 
                    {
                        setErrorStatus(false)
                        setSuccess(true)
                    }
            })
            .catch((response) => console.log(response))
       } 
    };
  return (
    <form className="bg-white shadow-lg rounded-lg px-4 py-6" onSubmit={handleSubmit}>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
        <h1 className="text-xl font-bold mb-4">Reservate now</h1>
        <div className='text-red-500'>
            {errorStatus ? errorMessage : ''}
         
            </div>
        <div className="flex justify-between">
            <div className="mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="start-date">
                Start Date
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                required
            />
            </div>
            <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="end-date">
                End Date
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="end-date"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                required
            />
            </div>
        </div>
        <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
            </label>
            <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
            required
            />
            <div className='text-green-600'>{success ? 'Reservation sent to the agency view the my reservations sections in order to track your reservation' : ''}</div>
        </div>

                {/* {modalIsOpen && 
                    (
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles} appElement={document.body}>
                        <h2 className='text-4xl font-bold mb-5'>{data.model}</h2>
                        <div>
                            <span>Prix du véhicule</span>
                            <span className='block font-bold text-cyan-500 text-2xl'>{data.price} MAD</span>
                        </div>
                        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
                        </Modal>
                    )
                } */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-4 mt-2 rounded-r-md focus:outline-none focus:shadow-outline "
                    type="submit"
                    onClick={() => setModalIsOpen(true)}
                    >
                    Rent now
                </button>
         </div>
    </form>
  );
}

export default ReservationForm;
