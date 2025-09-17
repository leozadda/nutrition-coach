import React from 'react';
import LOGO from './B-L-U-E.png';
import { UtensilsCrossed } from 'lucide-react';

const CALENDLY_LINK = "https://calendly.com/leozadda/talking-about-health-and-fitness-goals";

export default function Header() {
  return (
    <div className="bg-OFFWHITE min-h-screen flex flex-col justify-center items-center font-serif text-center px-4">
      <UtensilsCrossed size={64} color="#0000ff" strokeWidth={2.25} />
      <h1 className='text-BLUE text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl mb-8 py-6 sm:py-8 md:py-10'>Your Fork is Your Weapon.</h1>
      <a href={CALENDLY_LINK}>
        <button className='px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-BLUE text-OFFWHITE rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-colors font-sans hover:bg-OFFWHITE hover:text-BLUE hover:border border-BLUE'>Free Call</button>
      </a>
    </div>
  );
}