import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Don't Just Prepare. Excel.
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Join thousands of successful students who have achieved their dream careers with our expert guidance and comprehensive courses
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 text-lg px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors focus:outline-white focus:ring-2 focus:ring-white">
            Register Now
          </button>
          <button className="border-2 border-white text-white bg-transparent rounded-md font-bold transition-colors hover:bg-background hover:text-white-600 hover:border-white-300 px-8 py-3 focus:outline-white focus:ring-2 focus:ring-white">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;