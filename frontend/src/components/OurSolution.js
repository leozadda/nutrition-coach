import React from 'react';
import { Infinity, PlugZap, Filter, Users, Lock, DollarSign } from 'lucide-react';

const FeatureItem = ({ Icon, text }) => (
  <div className="flex flex-col items-center space-y-2">
    <Icon size={32} />
    <span>{text}</span>
  </div>
);

export default function OurSolution() {
  return (
    <div className="text-BLUE bg-OFFWHITE text-center font-serif p-4 sm:p-8 md:p-16 space-y-24">
      <section>
        <img className="w-16 sm:w-24 md:w-32 mx-auto mb-8" src="https://www.juststop.io/images/marketing/curl-1.svg" alt="Decorative curl" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">Does your inbox look like this?</h2>
        <img className="w-full max-w-2xl mx-auto mb-8" src="https://www.juststop.io/images/marketing/inbox-full.png" alt="Full inbox example" />
        <p className="text-xl sm:text-2xl md:text-3xl">Ours, too. It's awful. And it needs to stop. The thing is, cold sales emails do no good for anyone. So, we figured it's time someone did something about it.</p>
      </section>
      
      <section>
        <img className="w-16 sm:w-24 md:w-32 mx-auto mb-8" src="https://www.juststop.io/images/marketing/curl-2.svg" alt="Decorative curl" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">Fix it in just a few seconds</h2>
        <img className="w-full max-w-2xl mx-auto mb-8" src="https://www.juststop.io/images/marketing/inbox-clear.png" alt="Clear inbox example" />
        <p className="text-xl sm:text-2xl md:text-3xl">Sign up and authorize your email accounts so Stop can start filtering out sales emails. That's it. That's all you have to do.</p>
      </section>

      <section>
        <img className="w-16 sm:w-24 md:w-32 mx-auto mb-8" src="https://www.juststop.io/images/marketing/curl-3.svg" alt="Decorative curl" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">Here's how we do it</h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-12">Stop filters through mass mailers as well as any sales or cold emailers. And once Stop has identified a bad actor's domain, it also sends any other addresses from that domain straight to spam.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-lg sm:text-xl md:text-2xl mb-16">
          <FeatureItem Icon={Infinity} text="Unlimited accounts" />
          <FeatureItem Icon={PlugZap} text="Plug n' play" />
          <FeatureItem Icon={Filter} text="Automatic filtering" />
          <FeatureItem Icon={Users} text="Community" />
          <FeatureItem Icon={Lock} text="Private and secure" />
          <FeatureItem Icon={DollarSign} text="Free to use" />
        </div>
      </section>

      <section>
        <img className="w-16 sm:w-24 md:w-32 mx-auto mb-8" src="https://www.juststop.io/images/marketing/curl-4.svg" alt="Decorative curl" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">And the best part? It's totally free</h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">We wanted to solve this problem for ourselves, so why not share it with the world. We're trying to build a community, not a customer base.</p>
        <button className="bg-BLUE text-OFFWHITE rounded-2xl text-2xl sm:text-3xl md:text-4xl p-3 w-full sm:w-auto sm:px-8 hover:bg-blue-700 transition-colors">Free Call</button>
      </section>
    </div>
  );
}