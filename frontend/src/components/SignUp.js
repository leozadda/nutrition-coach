import React from 'react';

export default function SignUp() {
  return (
    // Main container with full viewport width and height
    <div className="bg-BLUE text-OFFWHITE min-h-screen flex flex-col justify-center items-center p-4 font-serif text-center">

      {/* Main heading */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8'>
        Sign Up to Stop Sales Emails
      </h1>
    
        
        {/* Sign-up button */}
        <button 
          type="submit" 
          className='bg-OFFWHITE text-BLUE rounded-2xl text-xl sm:text-2xl md:text-3xl p-3 w-full hover:bg-blue-700 transition-colors'
        >
          Sign Up
        </button>
      
    </div>
  );
}