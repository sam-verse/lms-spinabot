import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthModal = ({ isOpen, onClose, defaultTab = 'login', onAuthSuccess }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handler for outside click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      style={{ WebkitBackdropFilter: 'blur(6px)', backdropFilter: 'blur(6px)' }}
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm mx-4 relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {/* Tab Headers - exact match to reference image */}
        <div className="bg-white px-6 pt-6 pb-0">
          <div className="flex w-full border-b border-gray-200">
            <button
              className={`bg-white flex-1 text-center text-lg font-semibold pb-3 transition-all duration-200 relative ${
                activeTab === 'login'
                  ? 'text-black'
                  : 'text-gray-400'
              }`}
              style={{ 
                outline: 'none !important', 
                boxShadow: 'none !important',
                border: 'none',
                WebkitTapHighlightColor: 'transparent',
                WebkitFocusRingColor: 'transparent'
              }}
              onFocus={(e) => e.target.blur()}
              onClick={() => setActiveTab('login')}
            >
              Login
              {activeTab === 'login' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              className={`bg-white flex-1 text-center text-lg font-semibold pb-3 transition-all duration-200 relative ${
                activeTab === 'signup'
                  ? 'text-black'
                  : 'text-gray-400'
              }`}
              style={{ 
                outline: 'none !important', 
                boxShadow: 'none !important',
                border: 'none',
                WebkitTapHighlightColor: 'transparent',
                WebkitFocusRingColor: 'transparent'
              }}
              onFocus={(e) => e.target.blur()}
              onClick={() => setActiveTab('signup')}
            >
              Sign up
              {activeTab === 'signup' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
          </div>
        </div>
        <div className="p-6 pt-4">
          {/* Tab Content: fixed height to match login size, allow internal scroll for larger content */}
          <div className="h-[420px] overflow-y-auto">
            {activeTab === 'login' ? (
              <LoginForm onSuccess={onAuthSuccess} onSwitchToSignup={() => setActiveTab('signup')} />
            ) : (
              <SignupForm onSuccess={onAuthSuccess} onSwitchToLogin={() => setActiveTab('login')} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;