import React, { useState } from 'react';
import { Plus, Minus,  } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-BLUE last:border-b-0">
      <button
        className="flex justify-between items-center w-full text-left py-4 px-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl sm:text-2xl md:text-3xl">{question}</h3>
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </button>
      {isOpen && (
        <p className="text-m sm:text-xl pb-4 px-2  font-sans">{answer}</p>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqData = [
    {
      question: "Do I have to eat weird food?",
      answer: "Nope! You can still eat foods you like. We just help you pick the good stuff."
    },
    {
      question: "Will this take a lot of time?",
      answer: "Not at all. We'll work together in a way that fits your busy life. You can pick how much time you want to spend each day or week."
    },
    {
      question: "What if I don't see results?",
      answer: "We believe in you and your ability to improve. If you don't see the results you want, we'll work together to figure out why. We might change some things to help you get better. Plus, if you’re not happy after trying really hard, we can talk about getting your money back."
    }
  ];

  return (
    <div className="bg-OFFWHITE text-BLUE py-16 px-8 lg:py-24 sm:p-8 md:p-16 font-serif">
      <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-9xl mb-8 text-center">FAQ</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}