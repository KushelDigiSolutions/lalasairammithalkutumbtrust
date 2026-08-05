"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name validation: alphabets and spaces only
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = 'Please enter a valid name (letters only).';
    }

    // Email validation: standard email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, clear errors and send
    setErrors({});
    const text = `🙏 *Jai Lala Sai Ram*\n\n*Name:* ${formData.name.trim()}\n*Email:* ${formData.email.trim()}\n\n*Message:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    // Replace the number with the actual WhatsApp number
    window.open(`https://wa.me/919897973446?text=${encodedText}`, '_blank');
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          id="name" 
          required 
          value={formData.name} 
          onChange={(e) => {
            setFormData({...formData, name: e.target.value});
            if (errors.name) setErrors({...errors, name: ''});
          }} 
          className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base`} 
          placeholder="Enter your full name" 
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input 
          type="email" 
          id="email" 
          required 
          value={formData.email} 
          onChange={(e) => {
            setFormData({...formData, email: e.target.value});
            if (errors.email) setErrors({...errors, email: ''});
          }} 
          className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base`} 
          placeholder="Enter your email" 
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          id="message" 
          rows="4" 
          required 
          value={formData.message} 
          onChange={(e) => setFormData({...formData, message: e.target.value})} 
          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base" 
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-saffron text-white px-6 py-3 sm:py-4 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg text-base md:text-lg flex justify-center items-center gap-2 cursor-pointer"
      >
        <span>Send via WhatsApp</span>
        <span className="text-xl">💬</span>
      </button>
    </form>
  );
}
