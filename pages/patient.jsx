import React from 'react'
import Link from 'next/link'

const patient = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className='w-[400px]'>
      <h2 className="my-6 text-2xl font-bold text-dark/75 text-center">Patient</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number" id="number" placeholder="+2348***********">Phone Number</label>
          <input type="text" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
        </div>
        <button type="submit" className='w-full mt-2 p-2 bg-indigo-600 hover:bg-indigo-400 text-white text-center text-lg boder-none'>Send OTP</button>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number" id="Entotp" >Enter OTP</label>
          <input type="text" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
        </div>
        <button type="submit" className='w-full mt-2 p-2 bg-indigo-600 hover:bg-indigo-400 text-white text-center text-lg boder-none'>Verify OTP</button>
      <div className="flex justify-between items-center mt-2">
          <Link href="/forgot" className="text-indigo-700 text-[15px]">Forgot password</Link>
          <Link href="/signup" className="text-indigo-700 text-[15px]">Create Account</Link>
        </div>
      </form>
    </div>
  )
}

export default patient