
import React from 'react';
import Header from '../components/Header';
import CustomerProblem from '../components/CustomerProblem';
import OurSolution from '../components/OurSolution';
import WhyTrustUs from '../components/WhyTrustUs';
import FAQ from '../components/FAQ';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

export default function HomePage(){
  return (
    <div className="">
      <Header/>
      <CustomerProblem/>
      <OurSolution/>
      <WhyTrustUs/>
      <FAQ/>
      <SignUp/>
      <Footer/>
    </div>
  );
};