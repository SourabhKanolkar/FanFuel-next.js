import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gray-900 text-gray-300 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-2 px-4 h-20 md:h-16'>
      <div className='flex items-center justify-center gap-2 text-sm md:text-base'>
        <p className='text-center'>
          Copyright &copy; {currentYear} <span className='font-bold text-white'>FanFuel</span> 
          <span className='hidden sm:inline'> - All rights reserved</span>
        </p>
      </div>
      
      {/* Optional: Add a mobile-only separator or extra padding if you add social icons later */}
    </footer>
  )
}

export default Footer