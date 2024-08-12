import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    sex: '',
    ip: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Fetch IP address when component mounts
    fetchIpAddress();
  }, []);

  const fetchIpAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setFormData(prevState => ({
        ...prevState,
        ip: response.data.ip
      }));
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.name.trim())) {
      tempErrors.name = "Name should be 2-50 characters long and contain only letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Phone number is invalid. Use format: +1234567890";
    }

    // Age validation
    if (!formData.age) {
      tempErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 120) {
      tempErrors.age = "Age must be between 18 and 120";
    }

    if (!formData.sex) tempErrors.sex = "Please select a sex";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5001/subscribe', formData);
        console.log('Subscription successful:', response.data);
        setSubmitStatus('success');
      } catch (error) {
        console.error('Subscription failed:', error.response ? error.response.data : error);
        setSubmitStatus('error');
      }
    }
  };

  if (submitStatus === 'success' || submitStatus === 'error') {
    return (
      <div className="flex flex-col justify-center items-center bg-BLUE px-8 py-16 sm:p-8 md:p-16 lg:py-24 font-serif text-center min-h-screen">
        {submitStatus === 'success' ? (
          <>
            <h2 className="text-OFFWHITE text-4xl sm:text-6xl lg:text-9xl mb-4">Congrats!</h2>
            <p className="text-OFFWHITE text-xl sm:text-2xl font-sans">Please check your email (including spam folder) to schedule the call.</p>
          </>
        ) : (
          <>
            <h2 className="text-OFFWHITE text-4xl sm:text-6xl lg:text-9xl mb-4">Yikes!</h2>
            <p className="text-OFFWHITE text-xl sm:text-2xl font-sans">Something failed. We apologize.</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-BLUE px-8 py-16 sm:p-8 md:p-16 lg:py-24 font-serif min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-OFFWHITE text-3xl sm:text-xl lg:text-5xl mb-2">First Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={` text-BLUE text-xl sm:text-xl lg:text-3xl w-full p-2 border ${errors.name ? 'border-YELLOW' : 'border-BLUE'} rounded-lg font-sans`} required />
          {errors.name && <p className="text-YELLOW italic  m-1  text-sm font-sans">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-OFFWHITE text-3xl sm:text-xl lg:text-5xl mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`text-BLUE text-xl sm:text-xl lg:text-3xl w-full p-2 border ${errors.email ? 'border-YELLOW' : 'border-BLUE'} rounded-lg font-sans`} required />
          {errors.email && <p className="text-YELLOW  m-1  italic text-sm font-sans">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-OFFWHITE text-3xl sm:text-xl lg:text-5xl mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`text-BLUE text-xl sm:text-xl lg:text-3xl w-full p-2 border ${errors.phone ? 'border-YELLOW' : 'border-BLUE'} font-sans rounded-lg`} required />
          {errors.phone && <p className="text-YELLOW  m-1  italic text-sm font-sans">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="age" className="block text-OFFWHITE text-3xl sm:text-xl lg:text-5xl mb-2">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className={`text-BLUE text-xl sm:text-xl lg:text-3xl w-full p-2 border ${errors.age ? 'border-YELLOW' : 'border-BLUE'} font-sans rounded-lg`} min="0" required />
          {errors.age && <p className="text-YELLOW  m-1  italic text-sm font-sans">{errors.age}</p>}
        </div>

        <div>
          <label className="block text-OFFWHITE text-3xl sm:text-xl lg:text-5xl mb-2">Sex</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="sex" value="male" checked={formData.sex === 'male'} onChange={handleChange} className="form-radio accent-BLUE text-OFFWHITE" />
              <span className="ml-2 text-OFFWHITE text-xl sm:text-xl lg:text-3xl">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="sex" value="female" checked={formData.sex === 'female'} onChange={handleChange} className="form-radio accent-BLUE text-OFFWHITE" />
              <span className="ml-2 text-OFFWHITE text-xl sm:text-xl lg:text-3xl">Female</span>
            </label>
          </div>
          {errors.sex && <p className="text-YELLOW  italic m-1 text-sm font-sans">{errors.sex}</p>}
        </div>

        <div className='grid justify-center'>
          <button type="submit" className="my-7 lg:my-10 px-10 py-2 w-auto fit-content bg-OFFWHITE text-BLUE text-2xl sm:text-3xl lg:text-5xl rounded-full hover:bg-BLUE hover:text-OFFWHITE hover:border transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}