import React from 'react';

export default function EmailForm() {
  return (
    <div className="bg-OFFWHITE p-4 sm:p-8 md:p-16 font-serif">
      {/* Form container */}

      <form className="max-w-lg mx-auto space-y-6">
                
      {/* Name input */}
        <div>
          <label htmlFor="name" className="block text-BLUE text-lg sm:text-xl mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-BLUE rounded" required />
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email" className="block text-BLUE text-lg sm:text-xl mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-BLUE rounded" required />
        </div>

        {/* Phone number input */}
        <div>
          <label htmlFor="phone" className="block text-BLUE text-lg sm:text-xl mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 border border-BLUE rounded" />
        </div>

        {/* Age input */}
        <div>
          <label htmlFor="age" className="block text-BLUE text-lg sm:text-xl mb-2">Age</label>
          <input type="number" id="age" name="age" className="w-full p-2 border border-BLUE rounded" min="0" />
        </div>

        {/* Sex input */}
        <div>
          <label className="block text-BLUE text-lg sm:text-xl mb-2">Sex</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="sex" value="male" className="form-radio text-BLUE" />
              <span className="ml-2  text-BLUE">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="sex" value="female" className="form-radio text-BLUE" />
              <span className="ml-2 text-BLUE">Female</span>
            </label>
          </div>
        </div>

        {/* Monthly health spending input */}
        <div>
          <label htmlFor="health_spending" className="block text-BLUE text-lg sm:text-xl mb-2">How much do you spend on your health per month? (USD) </label>
          <input type="number" id="health_spending" name="health_spending" className="w-full p-2 border border-BLUE rounded" min="0" step="0.01" />
        </div>

        {/* Submit button */}
        <div>
          <button type="submit" className="w-full bg-BLUE text-OFFWHITE text-lg sm:text-xl py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}