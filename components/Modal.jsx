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
              <Link href='' className='text-indigo-700 hover:text-indigo-400'>Create accoun</Link>
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
          <XIcon className='w-16 text-indigo-700 text-right cursor-pointer outline-none border-none p-2 text-lg' onClick={()=> onClose()} />
        <div className='flex flex-col gap-4 justify-center items-center mt-2'>
          <button className='hover:bg-white border border-1 border-solid hover:border-indigo-700 hover:text-indigo-700 bg-indigo-700 text-white p-2 px-6'>
          <Link href="/doctor">Medical Practitioner</Link>
          </button>
          <button className='hover:bg-white border border-1 border-solid hover:border-indigo-700 hover:text-indigo-700 bg-indigo-700 text-white p-2 px-6'>
          <Link href="/patient">Patient</Link>
          </button>
          <button className='hover:bg-white border border-1 border-solid hover:border-indigo-700 hover:text-indigo-700 bg-indigo-700 text-white p-2 px-6'>
          <Link href="/drug">Drug Suppliers</Link>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Modal
const signIn = document.querySelector("#signInButton");
const signUp = document.querySelector("#signUpButton");
const signInForm = document.querySelector(".container .sign-in-form");
const signUpForm = document.querySelector(".container .sign-up-form");
const overlay_container = document.querySelector(
  ".container .overlay-container"
);
const overlay = document.querySelector(
  ".container .overlay-container .overlay"
);

signIn.addEventListener("click", () => {
  overlay_container.style.transform = "translateX(100%)";
  overlay.style.transform = "translateX(-50%)";
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
});
signUp.addEventListener("click", () => {
  overlay_container.style.transform = "translateX(0)";
  overlay.style.transform = "translateX(0)";
  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

youtubeLink.setAttribute("href", "https://youtu.be/7FbpuWOffc0");
