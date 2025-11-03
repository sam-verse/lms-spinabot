import React, { useState } from 'react';
import AuthModal from '../Auth/AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
  };

  const handleSignup = () => {
    setAuthModalTab('signup');
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const getUserInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <header className="bg-white py-4 px-9 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-12 w-auto object-contain" />
        </div>
        
        {/* Navigation in the center */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Courses</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Test Series</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
        </nav>
        
        {user ? (
          // Show user avatar when authenticated
          <div className="flex items-center">
            <div className="relative group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white font-semibold text-sm">
                  {getUserInitials(user.name)}
                </span>
              </div>
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-20 ring-1 ring-black/5">
                <div className="py-2">
                  <div className="flex items-center gap-3 px-4 py-3 border-b">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                      {getUserInitials(user.name)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-base">{user.name}</div>
                      <div className="text-gray-500 text-xs">{user.email}</div>
                    </div>
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Settings</a>
                  <div className=" border-t border-gray-100"></div>
                  <button 
                    onClick={handleLogout}
                    className="bg-red-500/20 block w-full h-full text-left px-4 py-2 text-sm text-red-600"
                  >
                    Logout
                  </button>
                </div>
                {/* Dropdown arrow */}
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45 z-10 shadow-md"></div>
              </div>
            </div>
          </div>
        ) : (
          // Show login/signup buttons when not authenticated
          <div className="flex items-center gap-2">
            <button 
              onClick={handleLogin}
              className="login-btn bg-transparent text-black px-3 py-1 rounded transition-colors hover:bg-gray-100"
            >
              Log in
            </button>
            <button 
              onClick={handleSignup}
              className="signup-btn bg-black text-white px-4 py-1 rounded transition-colors hover:bg-gray-800"
            >
              Sign up
            </button>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Header;