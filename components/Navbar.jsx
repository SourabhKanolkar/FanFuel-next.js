"use client"
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);

  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 md:px-8 h-16 sticky top-0 z-50'>
      
      {/* Logo Section */}
      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="tea.gif" width={40} alt="logo" />
        <span className='hidden sm:inline-block ml-1'>FanFuel!</span>
      </Link>

      <div className='relative flex items-center gap-2'>
        {session ? (
          <>
            {/* User Dropdown Button */}
            <button 
              onClick={() => setShowdropdown(!showdropdown)} 
              onBlur={() => { setTimeout(() => setShowdropdown(false), 200) }}  
              className="mx-2 md:mx-4 inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 md:px-4 md:py-2.5 transition-all" 
              type="button"
            >
              {/* Responsive Text: "Account" on mobile, "Welcome email" on desktop */}
              <span className="md:hidden">Account</span>
              <span className="hidden md:inline max-w-[200px] lg:max-w-[300px] truncate">
                Welcome {session.user.email}
              </span>

              <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
              </svg>
            </button>

            {/* Dropdown Menu - Positioned relatively to the button to stay on screen */}
            <div className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-0 top-12 bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-48 transition-opacity`}>
              <ul className="p-2 text-sm font-medium">
                {/* Mobile-only email display inside dropdown */}
                <li className="block md:hidden p-2 text-xs text-gray-400 border-b border-gray-700 mb-1 truncate">
                   {session.user.email}
                </li>
                <li>
                  <Link href="/dashboard" className="block w-full p-2 hover:bg-gray-700 rounded">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block w-full p-2 hover:bg-gray-700 rounded">Your Page</Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="text-left w-full p-2 hover:bg-gray-700 rounded border-t border-gray-700 mt-1 md:border-none md:mt-0">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>

            {/* Separate Logout button - Hidden on mobile to save space */}
            <button 
              className='hidden md:block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5' 
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href={"/login"}>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar