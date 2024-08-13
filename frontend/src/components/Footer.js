import React from 'react';
import LOGO from './B-L-U-E.png';

export default function Footer() {
  return (
    <footer className="bg-OFFWHITE text-BLUE p-4 sm:p-6 font-serif">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <img 
            className="w-10 sm:w-12 mr-3" 
            src={LOGO}
            alt="Logo" 
          />
          <span className="text-sm sm:text-base">
            © 2024 BLUE
          </span>
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <a href="#" className="text-sm sm:text-base hover:underline">About</a>
          <a href="#" className="text-sm sm:text-base hover:underline">Terms</a>
          <a href="#" className="text-sm sm:text-base hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}