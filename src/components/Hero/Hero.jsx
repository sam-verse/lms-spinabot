import React from 'react';
import { Users, TrendingUp, Clock, Trophy, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6 items-center gap-2">
            <Trophy className="w-4 h-4" />
            India's Leading Exam Prep Platform
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Master Your{' '}
            <br />
            <span style={{color: '#F98F14'}}>Competitive Exams</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Grow with 10,000+ courses from top organizations.
          </p>
          
          <div className="flex gap-4 mb-12">
            <button style={{backgroundColor: '#F98F14'}} className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors">
              Join for free
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2 active:border-orange-700" style={{border: '2px solid #F98F14'}}>
              ▶ Watch Demo
            </button>
          </div>
          
          <div className="flex gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8" style={{color: '#F98F14'}} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" style={{color: '#F98F14'}} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Clock className="w-8 h-8" style={{color: '#F98F14'}} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">10,000</div>
              <div className="text-sm text-gray-600">Course Hours</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-100 h-100 rounded-lg overflow-hidden">
              <img 
                src="/hero-img.png" 
                alt="Student learning illustration"
                className="w-full h-full object-cover"
              />
             
              {/* <div className="absolute top-12 left-8 w-20 h-20 bg-blue-600 rounded-full opacity-80"></div> */}
              {/* <div className="absolute bottom-8 right-8 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;