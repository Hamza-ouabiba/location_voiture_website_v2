import React from 'react';
import Modal from 'react-modal'
import { useState,useEffect } from 'react';
import APISerive from '../../data/ApiService';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
function ReservationCard({data}) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [date_dep,setStartDate] = useState('')
    const [date_arr,setEndDate] = useState('')
    const [message,setMessage] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const params = useParams()
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

    const handleSubmit = async (e) => {
       e.preventDefault();
        APISerive.InsertReservation({iduser: token.myId,idcar: params.id, date_dep,dateArr: date_arr,messagea: message},token)
        .then((response) => console.log(response))
    };

  return (
    <form className="bg-white shadow-lg rounded-lg px-4 py-6" onSubmit={handleSubmit}>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
        <h1 className="text-xl font-bold mb-4">Reservate now</h1>
        <div className="flex justify-between">
            <div className="mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="start-date">
                Start Date
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
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
            />
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

export default ReservationCard;
