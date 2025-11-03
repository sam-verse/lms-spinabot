
import React from 'react';
// Bootstrap Icons CDN should be included in index.html for these to work

const Footer = () => {
  return (

    <footer className="bg-white text-black pt-12 pb-0 px-0">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start px-9">
          {/* Brand Section */}
          <div className="flex flex-col items-start md:items-start md:justify-start col-span-1 mb-6 md:mb-0">
            <img src="/logo.png" alt="Connectek Logo" className="w-32 mb-4" />
            <p className="mb-6 font-medium text-lg">Master your
              <br />
              <span> Competitive Exams</span></p>
            <div className="flex gap-6 mb-0 mt-2">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 cursor-pointer">
                <i className="bi bi-twitter-x text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 cursor-pointer">
                <i className="bi bi-linkedin text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 cursor-pointer">
                <i className="bi bi-youtube text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 cursor-pointer">
                <i className="bi bi-facebook text-lg"></i>
              </a>
            </div>
          </div>

          {/* EduPlatform */}
          <div>
            <h3 className="text-base font-bold mb-3">EduPlatform</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-black hover:underline">About</a></li>
              <li><a href="#" className="text-black hover:underline">What We Offer</a></li>
              <li><a href="#" className="text-black hover:underline">Free Courses</a></li>
              <li><a href="#" className="text-black hover:underline">Catalog</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-base font-bold mb-3">Community</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-black hover:underline">Learners</a></li>
              <li><a href="#" className="text-black hover:underline">Blog</a></li>
              <li><a href="#" className="text-black hover:underline">Tech Blog</a></li>
              <li><a href="#" className="text-black hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Our Platform */}
          <div>
            <h3 className="text-base font-bold mb-3">Our Platform</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-black hover:underline">FAQ</a></li>
              <li><a href="#" className="text-black hover:underline">Support</a></li>
              <li><a href="#" className="text-black hover:underline">Careers</a></li>
              <li><a href="#" className="text-black hover:underline">Affiliates</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-black mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white w-full px-6 py-3">
            <p className="mb-2 md:mb-0">© 2026 All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Accessibility</a>
              <a href="#" className="hover:underline">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;