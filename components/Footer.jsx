import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-indigo-900 py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h2 className="text-xl font-bold text-white mb-4">MedReach365</h2>
            <p className="max-w-2xl text-gray-200 leading-loose">
              Join hands with us today to experience telemedicine that works. We
              aim to shine the brightest on the sky of telehealth,taking with us
              all our partners and members to enjoy the glory Book your doctor
              today and receive your consultation from specialized doctors
              instantly.
            </p>
          </div>
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="text-gray-200 leading-loose">
              <li className="mb-2">
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul className="flex">
              <li className="mr-4">
                <a href="/" className="text-gray-200 hover:text-white">
                  <FaFacebook />
                </a>
              </li>
              <li className="mr-4">
                <a href="/" className="text-gray-200 hover:text-white">
                  <FaLinkedin />
                </a>
              </li>
              <li className="mr-4">
                <a href="/" className="text-gray-200 hover:text-white">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-100 text-center mt-8 text-base">
          Copyright &copy; 2023, MedReach365. All rights reserved{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
