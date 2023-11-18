import React from 'react'
import Link from 'next/link';
import { XIcon } from '@heroicons/react/outline'

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded'>
      <div className='w-[600px] bg-white p-6'>
          <XIcon className='w-16 text-indigo-700 text-right cursor-pointer outline-none border-none p-2 text-lg' onClick={()=> onClose()} />
        <div className='flex flex-col gap-4 justify-center items-center mt-2'>
          <button className='hover:bg-white border border-1 border-solid hover:border-indigo-700 hover:text-indigo-700 bg-indigo-700 text-white p-2 px-6'>
          <Link href="/doctor">Medical Practitioner</Link>
          </button>
          <button className='hover:bg-white border border-1 border-solid hover:border-indigo-700 hover:text-indigo-700 bg-indigo-700 text-white p-2 px-6'>
          <Link href="/patient">Patient</Link>
          </button>
          <button className='hover:bg-white border border-1 border-solid hover:border-indigo-700 hover:text-indigo-700 bg-indigo-700 text-white p-2 px-6'>
          <Link href="/drug">Drug Store</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal