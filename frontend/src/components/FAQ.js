import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-BLUE last:border-b-0">
      <button
        className="flex justify-between items-center w-full text-left py-4 px-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl">{question}</h3>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && (
        <p className="text-lg sm:text-xl pb-4 px-2">{answer}</p>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqData = [
    {
      question: "Is Stop really free?",
      answer: "Absolutely. We built Stop to solve a problem in our day-to-day lives and we just wanted to share it with the world. Ridding the world of bad sales emails benefits everyone, and we want you to join our mission."
    },
    {
      question: "What about emails that I do want?",
      answer: "Don't worry. You'll still get the emails that you need. Our filter is built so that only sales emails and mass emails will get filtered. We still recommend that you check your spam and junk for the first week to make sure the right mail is getting filtered. If you see something in there that shouldn't be, just drag it back to your inbox and Stop will remove that sender from the naughty list."
    },
    {
      question: "Does Stop read my emails?",
      answer: "Nope, nope, nope. We never ever access or store any of the content of your emails in any form whatsoever. Your emails are yours forever and always and that is our number one priority. We only scan your emails for senders, not content. Read more about privacy and security here."
    }
  ];

  return (
    <div className="bg-OFFWHITE text-BLUE p-4 sm:p-8 md:p-16 font-serif">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-9xl mb-8 text-center">FAQ</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}