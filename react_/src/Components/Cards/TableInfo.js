import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faC, faChair, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faDoo } from '@fortawesome/free-solid-svg-icons';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import Specs from './Specs';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal'
export default function TableInfo({data,carburant_type,gear_box}) {

  const [carburant,setCarburant] = useState("");
  const [modalIsOpen,setModalIsOpen] = useState(false);

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
  const specs_ = [
     { icon: faGear, title: 'Gearbox',value: gear_box,color: 'text-cyan-500'},
     { icon: faCalendar, title: 'Start of production',value: data.start_prod,color: 'text-purple-500'},
     { icon: faDoorOpen, title: 'Doors',value: data.doors,color: 'text-yellow-500'},
     { icon: faCarBattery, title: 'Power',value: data.power,color: 'text-red-500'},
     { icon: faChair, title: 'seats',value: data.seats,color: 'text-green-500'},
     { icon: faGasPump, title: 'Fuel type',value: carburant_type,color: 'text-blue-500'},
  ]
  return (
        <div className='w-full px-12'>
             <h3 className='font-bold text-4xl mb-5'>Principal Specs</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            specs_.map((spec,index)=>{
                                return(
                                    <Specs
                                    key={index}
                                    icon={spec.icon}
                                    title={spec.title}
                                    value={spec.value}
                                    color={spec.color}
                                    />
                                )
                            })
                        }
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-4 mt-14 rounded-r-md focus:outline-none focus:shadow-outline "
                 type="submit"
                 onClick={() => setModalIsOpen(true)}
                 >
                    Rent now
                </button>

                {modalIsOpen && 
                    (
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles} appElement={document.body}>
                        <h2>Modal Title</h2>
                        <p>Modal content goes here.</p>
                        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
                        </Modal>
                    )
                }
        </div>
  )
}
