import React, { useState, useEffect } from 'react';
import { Smartphone, Mail, ArrowLeft, RotateCcw, Loader, Check } from 'lucide-react';

const VerifyDetails = ({ formData, onUpdate, onNext, onBack, onSwitchToLogin }) => {
  const [localData, setLocalData] = useState({
    mobileOTP: formData.mobileOTP || '',
    emailOTP: formData.emailOTP || ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [verified, setVerified] = useState({
    mobile: false,
    email: false
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setLocalData({
        ...localData,
        [name]: value
      });
      
      // Auto-verify when 6 digits are entered
      if (value.length === 6) {
        setTimeout(() => {
          setVerified({
            ...verified,
            [name === 'mobileOTP' ? 'mobile' : 'email']: true
          });
        }, 500);
      }
    }
  };

  const handleVerify = (type) => {
    const otpValue = type === 'mobile' ? localData.mobileOTP : localData.emailOTP;
    if (otpValue.length === 6) {
      // Simulate verification
      setTimeout(() => {
        setVerified({
          ...verified,
          [type]: true
        });
      }, 1000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localData.mobileOTP.length === 6 && localData.emailOTP.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        onUpdate(localData);
        setIsLoading(false);
        onNext();
      }, 1000);
    }
  };

  const handleResend = () => {
    setTimeLeft(30);
    setCanResend(false);
    setLocalData({ mobileOTP: '', emailOTP: '' });
    setVerified({ mobile: false, email: false });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h2 className="text-xl font-bold text-gray-900 text-center mb-1">Verify Your Details</h2>
      <p className="text-gray-500 text-center mb-4">We Have send OTP to verify your phone and email</p> */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black">
            <Smartphone className="w-4 h-4" />
          </span>
          <input
            type="text"
            name="mobileOTP"
            placeholder="Phone OTP"
            value={localData.mobileOTP}
            onChange={handleChange}
            required
            maxLength="6"
            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-gray-700 placeholder-gray-400 ${
              verified.mobile ? 'border-green-300 focus:ring-green-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {verified.mobile && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />
          )}
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black">
            <Mail className="w-4 h-4" />
          </span>
          <input
            type="text"
            name="emailOTP"
            placeholder="Email OTP"
            value={localData.emailOTP}
            onChange={handleChange}
            required
            maxLength="6"
            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-gray-700 placeholder-gray-400 ${
              verified.email ? 'border-green-300 focus:ring-green-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {verified.email && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-white flex-1 border border-gray-300 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading || localData.mobileOTP.length !== 6 || localData.emailOTP.length !== 6}
            className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Continue'}
          </button>
        </div>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        Already have account?{' '}  
        <button onClick={onSwitchToLogin} className="text-blue-600 hover:text-blue-700 font-semibold transition-colors bg-white p-0 m-0 outline-none focus:outline-none focus:ring-0 hover:outline-none active:outline-none shadow-none border-none" style={{ outline: 'none', boxShadow: 'none', border: 'none', WebkitTapHighlightColor: 'transparent', WebkitFocusRingColor: 'transparent' }} onFocus={e => e.target.blur()}>
          Sign in here
        </button>
      </div>
    </div>
  );
};

export default VerifyDetails;