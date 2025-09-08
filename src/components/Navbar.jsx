import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full bg-sky-400 flex items-center justify-around py-2 px-4 z-50'>
      {/* Logo */}
      <div className="logo flex gap-3 items-center">
        <img src="./icons/logo.png" className='h-12 w-12 object-cover' alt="Logo" />
        <h5 className='text-white font-bold font-[Poppins] tracking-wide'>
          Medical Store
        </h5>
      </div>

      {/* Profile button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex gap-3 items-center"
      >
        <div className="w-10 h-10">
          <img
            src="./icons/logo.png"
            className='object-cover w-10 h-10 rounded-full bg-white'
            loading='lazy'
            alt="Profile"
          />
        </div>
        <h6 className='text-white font-[Poppins] tracking-wide'>
          Umair Khan
        </h6>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className='absolute top-14 md:right-70 right-10 flex flex-col bg-white shadow-md rounded-md p-3 w-40'>
          <Link to="/profile" className="hover:bg-sky-100 p-2 rounded">
            Edit Profile
          </Link>
          <Link to="/settings" className="hover:bg-sky-100 p-2 rounded">
            Settings
          </Link>
          <button className="text-left hover:bg-sky-100 p-2 rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
