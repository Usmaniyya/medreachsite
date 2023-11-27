import React from 'react'
import Link from 'next/link';
import Tabs from './Tabs'
import { XIcon } from '@heroicons/react/outline'

const Modal = ({ isVisible, onClose }) => {
  const tabs = [
    {
      label: "Medical Practitioner",
      content: <div className='p-6'>Medical Practitioner</div>
    },
    {
       label: "Patient",
      content: <div className='p-6'>Patient</div>
    }

  ]
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded'>
      <div className='w-[600px] bg-white p-6'>
       <XIcon className='w-16 text-indigo-700 text-right cursor-pointer outline-none border-none p-2 text-lg' onClick={()=> onClose()} />
          <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default Modal