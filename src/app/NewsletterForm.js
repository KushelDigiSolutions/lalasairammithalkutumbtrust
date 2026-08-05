"use client";
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Strict email regex validation (must have @, domain, and proper extension)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    // Success logic
    setStatus('success');
    setEmail('');
    
    // Auto-hide success message after 4 seconds
    setTimeout(() => {
      setStatus(null);
    }, 4000);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full" noValidate>
        <input 
          type="email" 
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus(null); }}
          placeholder="Enter your email address" 
          className={`w-full sm:w-auto flex-grow px-5 sm:px-6 py-3 sm:py-4 rounded-full border ${
            status === 'error' ? 'border-red-500 ring-2 ring-red-500/50 focus:ring-red-500' : 'border-gray-300 focus:ring-amber-500'
          } focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 shadow-sm text-sm sm:text-base`}
          required
        />
        <button 
          type="submit" 
          className="bg-saffron text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto whitespace-nowrap text-sm sm:text-base"
        >
          Subscribe
        </button>
      </form>
      <div className="min-h-[24px] mt-2 text-center">
        {status === 'error' && (
          <span className="text-red-600 text-sm font-semibold">Please enter a valid email address (e.g., yourname@domain.com).</span>
        )}
        {status === 'success' && (
          <span className="text-green-600 text-sm font-bold">Thank you for subscribing to our newsletter! 🙏</span>
        )}
      </div>
    </div>
  );
}
