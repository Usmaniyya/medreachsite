import React from 'react'
import Link from 'next/link'

const patient = () => {
  return (
        <div className="h-screen flex justify-center items-center">
      <form className='w-[400px]'>
      <h2 className="my-6 text-2xl font-bold text-dark/75 text-center">Patient</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="number" placeholder="080***********" className="p-2 text-dark border border-solid border-indigo-500 outline-none rounded"/>
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE3Jrn_wJ9DLvOZPFsuxAtWqIqHV2lWEA",
  authDomain: "medreach-81bae.firebaseapp.com",
  databaseURL: "https://medreach-81bae-default-rtdb.firebaseio.com",
  projectId: "medreach-81bae",
  storageBucket: "medreach-81bae.appspot.com",
  messagingSenderId: "789629920826",
  appId: "1:789629920826:web:ce68f618ffd799a929f703",
  measurementId: "G-C5SCYFD5ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);