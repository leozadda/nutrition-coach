import React from 'react';
import { Infinity, PlugZap, Filter, Users, Lock, DollarSign, Earth, Dumbbell, MessageCircleMore, FlaskConical, Handshake, PersonStanding } from 'lucide-react';
import STAR from './star.png';
import LOSER from './loser.png';
import WINNER from './winner.png';

// Calendly link for scheduling calls
const CALENDLY_LINK = "https://calendly.com/leozadda/talking-about-health-and-fitness-goals";

const FeatureItem = ({ Icon, text }) => (
  <div className="flex flex-col items-center space-y-2">
    <Icon size={32} />
    <span>{text}</span>
  </div>
);

export default function OurSolution() {
    return (
      <div className="text-BLUE bg-OFFWHITE text-center font-serif py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 space-y-16 sm:space-y-24">
        <section>
          <img className="w-16 sm:w-20 md:w-24 lg:w-28 mx-auto mb-6" src={STAR} alt="Decorative curl" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">Is this you?</h2>
          <img className="lg:mt-12 lg:mb-24 w-[60vw] mt-12 mb-20 sm:max-w-[40vw] md:max-w-[30vw] lg:max-w-[20vw] mx-auto mb-6 sm:mb-8 shadow-BLUE shadow-2xl rounded-lg transform skew-y-2 skew-x-3 sm:skew-y-3 sm:skew-x-6" src={LOSER} alt="Full inbox example" />
          <p className="text-xl sm:text-2xl md:text-3xl">Let's face it, second place is just the first loser.</p>
        </section>
        
        <section>
          <img className="w-16 sm:w-20 md:w-24 lg:w-28 mx-auto mb-6" src={STAR} alt="Decorative curl" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">You need a coach.</h2>
          <img className="lg:mt-12 lg:mb-24 w-[60vw] mt-12 mb-20 sm:max-w-[50vw] md:max-w-[30vw] lg:max-w-[20vw]  mx-auto mb-6 sm:mb-8 shadow-BLUE shadow-2xl rounded-lg transform skew-y-2 skew-x-3 sm:skew-y-3 sm:skew-x-6" src={WINNER} alt="Clear inbox example" />
          <p className="text-xl sm:text-2xl md:text-3xl p-3 font-sans">Imagine if every decision you made fueled your performance, not hindered it. Our coaching is your secret weapon to crushing the competition.</p>
        </section>

      <section>
        <img className="w-16 sm:w-24 md:w-32 mx-auto mb-8" src={STAR} alt="Decorative curl" />
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">How We'll Help You</h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 p-3 font-sans">Extremely tailored science-based nutritional coaching for your specific goal.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-lg sm:text-xl md:text-2xl mb-16  font-sans">
          <FeatureItem Icon={FlaskConical} text="Backed by science" />
          <FeatureItem Icon={MessageCircleMore} text="24/7 Communication" />
          <FeatureItem Icon={Dumbbell} text="No Equipment Needed" />
          <FeatureItem Icon={Handshake} text="Join A Community" />
          <FeatureItem Icon={Earth} text="From anywhere" />
          <FeatureItem Icon={PersonStanding} text="Personalized" />
        </div>
      </section>

      <section>
        <img className="w-16 sm:w-24 md:w-32 mx-auto mb-8" src={STAR} alt="Decorative curl" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">And the best part? Free coaching call.</h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 p-3 font-sans">Don't gamble on your goals. Get expert advice for free. We can help you plan the perfect path forward if you give us a call. </p>
        {/* Call-to-action button linking to Calendly */}
        <a href={CALENDLY_LINK}>
            <button className="px-10 py-3 w-auto fit-content bg-BLUE text-OFFWHITE rounded-full text-2xl sm:text-3xl md:text-4xl p-3 sm:w-auto sm:px-8 transition-colors  hover:bg-OFFWHITE hover:text-BLUE hover:border ">Free Call</button>
        </a>
      </section>
    </div>
  );
}