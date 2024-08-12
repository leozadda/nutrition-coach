import React from 'react';

export default function Header() {
  return (
    // Main container with full viewport width and height
    <div className="bg-OFFWHITE min-h-screen flex flex-col justify-center items-center p-4 font-serif text-center">
      {/* Logo */}
      <img className="w-20 sm:w-24 md:w-32 mb-8" src="https://www.juststop.io/images/logo/logo.svg" alt="Logo" />
      
      {/* Main heading */}
      <h1 className='text-BLUE text-4xl sm:text-5xl md:text-6xl lg:text-9xl mb-8'>
        Tell sales emails to just stop
      </h1>
      
      {/* Call-to-action button */}
      <button className='bg-BLUE text-OFFWHITE rounded-2xl lg:text-7xl sm:text-2xl md:text-3xl p-3 w-full sm:w-auto sm:px-8 hover:bg-BLUE transition-colors'>
        Free Call
      </button>
    </div>
  );
}