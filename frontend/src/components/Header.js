import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // Main container with full viewport width and height
    <div className="bg-OFFWHITE min-h-screen flex flex-col justify-center items-center p-4 font-serif text-center">
      {/* Logo */}
      <img className="w-20 sm:w-24 md:w-32 mb-8" src="https://www.juststop.io/images/logo/logo.svg" alt="Logo" />
      {/* Main heading */}
      <h1 className='text-BLUE text-7xl sm:text-9xl md:text-9xl lg:text-9xl mb-8 py-10'>Tell sales emails to just stop</h1>
      {/* Call-to-action button */}
      <Link to="/signup">
        <button className='px-10 py-3 w-auto fit-content bg-BLUE text-OFFWHITE rounded-full text-4xl lg:text-6xl sm:text-2xl md:text-5xl w-full sm:w-auto sm:px-8 transition-colors font-sans  hover:bg-OFFWHITE hover:text-BLUE hover:border'>Free Call</button>
      </Link>
    </div>
  );
}