import React from 'react';

const Header = () => {
  return (
  <header className="bg-white py-4 px-9 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
  <img src="/logo.png" alt="logo" className="h-12 w-auto object-contain" />
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Courses</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Test Series</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
      </nav>

      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-sm">KS</span>
      </div>
    </header>
  );
};

export default Header;