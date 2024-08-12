import React from 'react';
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    // Main container with full viewport width and height
    <div className="bg-BLUE text-OFFWHITE flex flex-col justify-center items-center lg:py-48 py-36 px-8 font-serif text-center">
      {/* Main heading */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-9xl mb-8'>Sign Up to Stop Sales Emails</h1>
        {/* Sign-up button */}
        <Link to="/signup">
            <button  type="submit" className='px-10 py-3 w-auto fit-content bg-OFFWHITE text-BLUE rounded-full text-xl sm:text-2xl md:text-3xl p-3 w-full hover:bg-BLUE hover:text-OFFWHITE hover:border transition-colors font-sans lg:mt-6' >Free Call</button> 
        </Link>
    </div>
  );
}