import React from 'react';

// Calendly link for scheduling calls
const CALENDLY_LINK = "https://calendly.com/leozadda/talking-about-health-and-fitness-goals";

export default function SignUp() {
  return (
    // Main container with full viewport width and height
    <div className="bg-BLUE text-OFFWHITE flex flex-col justify-center items-center lg:py-48 py-36 px-8 font-serif text-center">
      {/* Main heading */}
      <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-9xl mb-8'>Stop Losing To Competitors.</h1>
      {/* Call-to-action button linking to Calendly */}
      <a href={CALENDLY_LINK}>
        <button type="button" className='px-10 py-3 w-auto fit-content bg-OFFWHITE text-BLUE rounded-full text-xl sm:text-2xl md:text-3xl p-3 w-full hover:bg-BLUE hover:text-OFFWHITE hover:border transition-colors font-sans lg:mt-6'>Free Call</button> 
      </a>
    </div>
  );
}