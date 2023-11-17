import React from 'react'
import Link from 'next/link'


const Signup = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className='w-[400px]'>
      <h2 className="my-6 text-2xl font-bold text-dark/75 text-center">Medical Practitioner</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="account-type">Account Type</label>
          <input type="text" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
        </div> 
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input type="email" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="account-type">Password</label>
          <input type="password" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
        </div>
        <button type="submit" className='w-full mt-2 p-2 bg-indigo-600 hover:bg-indigo-400 text-white text-center text-lg boder-none'>Submit</button>
              <div className='mt-3'>
               <Link href="/" className="text-indigo-700 text-[15px]">Already have an account?</Link>
              </div>
          </form>
    </div>
  )
}

export default Signup