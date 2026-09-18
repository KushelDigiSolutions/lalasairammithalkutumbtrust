"use client";
import { useState } from 'react';

export default function PujaForm() {
  const [formData, setFormData] = useState({
    pujaType: 'Satyanarayan Katha',
    date: '',
    phone: '',
    notes: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Phone validation: exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Build WhatsApp message
    const text = `🙏 *Jai Lala Sai Ram*\n\n*Puja Booking Request*\n\n*Puja Type:* ${formData.pujaType}\n*Preferred Date:* ${formData.date}\n*Phone Number:* ${formData.phone}\n*Special Requirements:*\n${formData.notes || 'None'}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/919897973446?text=${encodedText}`, '_blank');
  };

  return (
    <form className="space-y-4 md:space-y-6 w-full" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="pujaType" className="block text-sm font-medium text-gray-700 mb-1">Select Puja Type</label>
        <select 
          id="pujaType" 
          required
          value={formData.pujaType}
          onChange={(e) => setFormData({...formData, pujaType: e.target.value})}
          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base bg-white cursor-pointer"
        >
          <option>Satyanarayan Katha</option>
          <option>Navagraha Shanti</option>
          <option>Maha Mrityunjaya Havan</option>
          <option>Rudrabhishek</option>
          <option>Vehicle (Vahan) Puja</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="w-full">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
          <input 
            type="date" 
            id="date" 
            required
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base cursor-pointer" 
          />
        </div>
        <div className="w-full">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({...formData, phone: e.target.value});
              setError('');
            }}
            className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base cursor-pointer`} 
            placeholder="10-digit mobile number" 
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements (Optional)</label>
        <textarea 
          id="notes" 
          rows="3" 
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-sm md:text-base cursor-pointer" 
          placeholder="Any specific requests..."
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-saffron text-white px-6 py-3 sm:py-4 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg text-base md:text-lg flex justify-center items-center gap-2 break-words cursor-pointer"
      >
        <span>Submit Booking Request</span>
        <span className="text-xl">💬</span>
      </button>
    </form>
  );
}
