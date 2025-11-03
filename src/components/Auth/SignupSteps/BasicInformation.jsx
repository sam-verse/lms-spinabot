import React, { useState } from 'react';
import { User, Phone, Mail, Loader } from 'lucide-react';

const BasicInformation = ({ formData, onUpdate, onNext, onSwitchToLogin }) => {
  const [localData, setLocalData] = useState({
    name: formData.name || '',
    phone: formData.phone || '',
    email: formData.email || ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onUpdate(localData);
      setIsLoading(false);
      onNext();
    }, 1000);
  };

  const handleChange = (e) => {
    setLocalData({
      ...localData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative mx-1">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={localData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-700 placeholder-gray-400"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="relative mx-1">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit phone number"
              value={localData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-700 placeholder-gray-400"
            />
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="relative mx-1 ">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={localData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-700 placeholder-gray-400"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Continue to Verification'
          )}
        </button>
      </form>

      <div className="pl-1 mt-4 text-left text-sm text-gray-600">
        Already have an account?{' '}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          style={{ outline: 'none', boxShadow: 'none', WebkitTapHighlightColor: 'transparent' }}
          onFocus={e => e.target.blur()}
        >
          Sign in here
        </a>
      </div>
    </div>
  );
};

export default BasicInformation;