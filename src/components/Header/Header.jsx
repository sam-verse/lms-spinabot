
import React, { useState, useEffect } from 'react';
import AuthModal from '../Auth/AuthModal';
import Dropdown from '../ui/Dropdown';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');
  const [user, setUser] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

  // persist user to localStorage so sibling components (like Hero) can read login state
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('user', JSON.stringify(user));
        // notify other components in same tab that user changed
        try { window.dispatchEvent(new CustomEvent('user-change', { detail: user })); } catch (e) {}
      } catch (e) {
        // ignore
      }
    } else {
      try {
        localStorage.removeItem('user');
        try { window.dispatchEvent(new CustomEvent('user-change', { detail: null })); } catch (e) {}
      } catch (e) {}
    }
  }, [user]);


  // read persisted user on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {}
  }, []);

  const getUserInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Close drawer on Escape for better accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && mobileNavOpen) setMobileNavOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileNavOpen]);

  return (
    <>
      <header className="bg-white py-4 px-4 md:px-9 flex items-center border-b border-gray-200 relative shadow-sm">
        {/* Logo left */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="h-12 w-auto object-contain drop-shadow-sm cursor-pointer" />
          </Link>
        </div>
        {/* Centered nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          <Link to="/courses" className="text-gray-600 hover:text-gray-900 font-medium">Courses</Link>
          <Link to="/test-series" className="text-gray-600 hover:text-gray-900 font-medium">Test Series</Link>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
        </nav>
        {/* Mobile hamburger (right) - visible only on small screens. Positioned absolute to ensure visibility on all layouts */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50">
          <button
            onClick={() => setMobileNavOpen(prev => !prev)}
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            className="p-2 rounded-md bg-transparent"
          >
            <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {/* User avatar right */}
        {user ? (
          // Hide avatar on small screens; show on md and larger
          <div className="hidden md:flex items-center ml-4">
              <div className="flex items-center ml-4">
                {/* use shared Dropdown component for user menu */}
                {/* eslint-disable-next-line */}
                <Dropdown
                  align="right"
                  trigger={
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
                      <span className="text-white font-semibold text-sm">{getUserInitials(user.name)}</span>
                    </div>
                  }
                >
                  <div className="flex items-center gap-3 px-4 py-3 border-b">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">{getUserInitials(user.name)}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-base">{user.name}</div>
                      <div className="text-gray-500 text-xs">{user.email}</div>
                    </div>
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Settings</a>
                  <div className="border-t border-gray-100"></div>
                  <button onClick={handleLogout} className="bg-red-500/20 block w-full text-left px-4 py-2 text-sm text-red-600">Logout</button>
                </Dropdown>
              </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2 ml-4">
            <button 
              onClick={handleLogin}
              className="login-btn bg-transparent text-black px-3 py-1 rounded-lg transition-colors hover:bg-gray-100"
            >
              Log in
            </button>
            <button 
              onClick={handleSignup}
              className="signup-btn bg-black text-white px-4 py-1 rounded-lg transition-colors hover:bg-gray-800"
            >
              Sign up
            </button>
          </div>
        )}
  {/* Mobile nav overlay with blur (clicking overlay closes drawer) */}
  <div onClick={() => setMobileNavOpen(false)} className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-200 ${mobileNavOpen ? 'block opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden={!mobileNavOpen}></div>
  {/* Mobile nav drawer with rounded corners and shadow */}
  <div id="mobile-nav" aria-hidden={!mobileNavOpen} className={`fixed top-0 left-0 w-64 h-full bg-white shadow-2xl rounded-r-2xl z-50 transform transition-transform duration-300 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{boxShadow:'0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link to="/" onClick={() => setMobileNavOpen(false)}>
              <img src="/logo.png" alt="logo" className="h-10 w-auto object-contain cursor-pointer" />
            </Link>
          </div>
          {user && (
            <div className="flex items-center gap-3 px-4 py-4 border-b">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                {getUserInitials(user.name)}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-base">{user.name}</div>
                <div className="text-gray-500 text-xs">{user.email}</div>
              </div>
            </div>
          )}
          <nav className="flex flex-col gap-2 px-4 py-6">
            <Link to="/courses" onClick={() => setMobileNavOpen(false)} className="text-gray-700 py-2 px-2 rounded hover:bg-blue-50 font-medium transition-colors active:bg-blue-100 focus:bg-blue-100">Courses</Link>
            <Link to="/test-series" onClick={() => setMobileNavOpen(false)} className="text-gray-700 py-2 px-2 rounded hover:bg-blue-50 font-medium transition-colors active:bg-blue-100 focus:bg-blue-100">Test Series</Link>
            <a href="#" className="text-gray-700 py-2 px-2 rounded hover:bg-blue-50 font-medium transition-colors active:bg-blue-100 focus:bg-blue-100">Pricing</a>
            <a href="#" className="text-gray-700 py-2 px-2 rounded hover:bg-blue-50 font-medium transition-colors active:bg-blue-100 focus:bg-blue-100">Contact</a>
          </nav>
          <div className="flex flex-col gap-2 px-4 pb-6">
            {user ? (
              <button onClick={handleLogout} className="w-full bg-red-50 text-red-600 py-2 rounded font-semibold hover:bg-red-100 transition-colors">Logout</button>
            ) : (
              <>
                <button onClick={() => { setMobileNavOpen(false); handleLogin(); }} className="w-full bg-gray-100 text-black py-2 rounded font-medium mb-1 hover:bg-gray-200 transition-colors">Log in</button>
                <button onClick={() => { setMobileNavOpen(false); handleSignup(); }} className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-900 transition-colors">Sign up</button>
              </>
            )}
          </div>
        </div>
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