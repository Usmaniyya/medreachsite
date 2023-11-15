import React, { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap px-3">
        <img className="w-44" src="/logo.png" alt="logo" />
        <div className="hidden md:flex items-center gap-4 py-4">
          <Link className="hover:text-indigo-600" href="#about">
            About Us
          </Link>
          <Link className="hover:text-indigo-600" href="#how">
            Our Partners
          </Link>
          <Link className="hover:text-indigo-600" href="#product">
            Product and Services
          </Link>
          <Link className="hover:text-indigo-600" href="#contact">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 py-4">
          <button className="text-indigo-600 px-3 py-2 border border-indigo-600">
            <Link className="hover:text-indigo-600" href="#book">
              Book DR Now
            </Link>
          </button>
          <button className="bg-indigo-600 px-3 py-2 text-white">
            <Link href="#">Login</Link>
          </button>
          <button className="text-indigo-600 px-3 py-2 border border-indigo-600">
            <Link href="https://play.google.com/store/apps/details?id=com.medreach.com">Sign Up</Link>
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-10 text-indigo-600" />
          ) : (
            <XIcon className="w-10 text-indigo-600" />
          )}
        </div>
      </nav>
      {nav && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 ease-in-out duration-300">
          <Link className="hover:text-indigo-600" href="#">
            About Us
          </Link>
          <Link className="hover:text-indigo-600" href="#">
            How it Works
          </Link>
          <Link className="hover:text-indigo-600" href="#">
            Product and Services
          </Link>
          <Link className="hover:text-indigo-600" href="#">
            Contact Us
          </Link>
          <div className="flex gap-3">
            <button className="text-indigo-600 px-3 py-2 border border-indigo-600">
              <Link className="hover:text-indigo-600" href="#">
                Book DR Now
              </Link>
            </button>
            <button className="bg-indigo-600 px-3 py-2 text-white">
              <Link href="#">Login</Link>
            </button>
            <button className="text-indigo-600 px-3 py-2 border border-indigo-600">
              <Link href="#">Sign Up</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
