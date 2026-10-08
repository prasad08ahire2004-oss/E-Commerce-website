import React from 'react'
import {assets} from '../assets/assets'
import {Link , NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 font-medium'>

        <img src={assets.logo} className='w-36' alt="Logo" />

        {/* For small screen this ul will be hidden and for large screen it will be visible. For small screen we will use a hamburger menu which will be implemented later. */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to="/" className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to="/about" className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>

            {/* Search icon will be used to open a search bar which will be implemented later. For now it is just an icon. */}
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

            {/* This is the profile icon which will have a dropdown menu */}
            <div className='group relative'>

                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>

                </div>
            </div>

            {/* Cart icon will be used to open the cart page which will be implemented later. For now it is just an icon. */}
            <Link to='/cart' className="relative">
                <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                <p className='absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            
        </div>
      
    </div>
  )
}

export default Navbar
