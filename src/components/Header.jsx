import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon,MapPinIcon } from '@heroicons/react/24/outline';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-white flex items-center justify-between h-24 shadow-lg'>
      <div className="flex items-center p-12">
      <img className = 'h-16 w-16' src =
      {LOGO_URL}
      />
      <h1 className='text-2xl font-bold'>Bite Buddies</h1>
      <button
          //onClick={fetchLocation}
          className="flex items-center px-2"
        >
          <MapPinIcon className="h-5 w-5 text-orange-700" />
          <span className="text-orange-700 text-sm">location</span>
        </button>
      </div>

      <div className='flex items-center mr-16'>
        <div className='flex items-center'>
          <ul className="flex space-x-6">
          <li className='text-black font-semibold text-xl mr-3'><Link to="/">Home</Link></li>
          <li className='text-black font-semibold text-xl mr-3'><Link to="/about">About Us</Link></li>
          <li className='text-black font-semibold text-xl mr-3'><Link to="/contact">Contact Us</Link></li>
          </ul>

        {/* <input
            type='search'
            placeholder='Search your restaurant and food' 
            className='flex mr-10 px-4 h-12 w-md bg-gray-200 text-gray-600 shadow-md rounded-md ' />
          <MagnifyingGlassIcon className="absolute  right-16 text-gray-500" width={20} height={20} /> */}
        </div>
           
          <UserCircleIcon className = 'h-12 w-12 rounded-full text-gray-600'  />
          <h2 className='text-black font-semibold text-xl mr-2'>Debashish</h2>
          <button 
          className="flex items-center px-2"
        >
          SignIn
          </button>
          </div>
         

          
    </div>

  )
}

export default Header
