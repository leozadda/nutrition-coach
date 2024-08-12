import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-OFFWHITE text-BLUE p-4 font-serif">
      {/* Main container */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Left side: Logo and copyright */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img 
            className="w-8 sm:w-10 mr-3" 
            src="https://www.juststop.io/images/logo/logo.svg" 
            alt="Logo" 
          />
          <span className="text-sm sm:text-base">
            © 2024 Stop by Plain Sight Ventures
          </span>
        </div>
        
        {/* Right side: Links */}
        <div className="flex space-x-4 sm:space-x-6">
          <a href="#" className="text-sm sm:text-base hover:underline">About</a>
          <a href="#" className="text-sm sm:text-base hover:underline">Terms</a>
          <a href="#" className="text-sm sm:text-base hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}