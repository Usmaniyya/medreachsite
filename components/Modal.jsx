import React, { useState } from 'react'
import Link from 'next/link';
import Tabs from './Tabs'
import { XIcon } from '@heroicons/react/outline'

const Modal = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleOtp = (e) => {
    setOtp(e.target.value)
  }
  const tabs = [
    {
      label: "Medical Practitioner",
      content: <div className='p-2'>
        <form className='w-full p-4' onSubmit={handleSubmit}>
          <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex gap-3'>
             <input type="email" value={email} className='w-1/2 px-3 py-2 border-2 border-solid border-indigo-700 outline-none' placeholder='Email' onChange={handleEmail} />
            <input type="password" value={password} className='w-1/2 px-3 py-2 border-2 border-solid border-indigo-700 outline-none' placeholder='Password' onChange={handlePassword}/>
            </div>
            <button type='submit' className='w-1/2 py-2 border-none bg-indigo-700 hover:bg-indigo-400 text-white'>Login</button>
            <div className='flex gap-12 items-center justify-between mt-2'>
              <Link href='' className='text-indigo-700 hover:text-indigo-400'>Create account</Link>
              <Link href='' className='text-indigo-700 hover:text-indigo-400'>Forgot password</Link>
            </div>
          </div>
        </form>
      </div>
    },
    {
       label: "Patients",
      content: <div className='p-4'>
        <form className='w-full p-4'>
          <div className='flex justify-between gap-4'>
            <input type='number' value={phone} placeholder='Enter phone number' className='w-1/2 px-3 py-2 border-2 border-solid border-indigo-700 outline-none' onChange={handlePhone} />
             <button type='submit' className='w-1/2 py-2 border-none bg-indigo-700 hover:bg-indigo-400 text-white'>Request OTP</button>
          </div>
          <div className='my-4 flex gap-4 justify-between'>
            <input type='text' placeholder='Enter OTP' className='w-1/2 px-3 py-2 border-2 border-solid border-indigo-700 outline-none' />
             <button type='submit' className='w-1/2 py-2 border-none bg-indigo-700 hover:bg-indigo-400 text-white'>Validate OTP</button>
          </div>
           <Link href='' className='text-indigo-700 hover:text-indigo-400'>Create account</Link>
        </form>
      </div>
    }

  ]
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded'>
      <div className='w-[600px] bg-white p-6'>
       <XIcon className='w-12 text-indigo-700 cursor-pointer outline-none border-none p-2 text-lg' onClick={()=> onClose()} />
          <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default Modal