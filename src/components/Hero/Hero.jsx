import React, { useEffect, useState } from 'react';
import { Users, TrendingUp, Clock, Trophy, Lightbulb } from 'lucide-react';

const Hero = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // gifPath will be the first available GIF path or null
  const [gifPath, setGifPath] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      setLoggedIn(!!raw);
    } catch (e) {
      setLoggedIn(false);
    }

    // probe whether a landing GIF exists & is loadable; try common filenames and pick the first that loads
    try {
      const candidates = ['/heropage.gif', '/homepage.gif', '/home-hero.gif'];
      let found = false;
      candidates.forEach((candidate) => {
        if (found) return;
        const img = new Image();
        img.src = candidate;
        img.onload = () => {
          if (!found) {
            found = true;
            setGifPath(candidate);
          }
        };
        img.onerror = () => {
          // no-op for this candidate
        };
      });
      // if none load after a short timeout, leave gifPath as null (fallback will be used)
      setTimeout(() => {
        if (!found) setGifPath(null);
      }, 800);
    } catch (err) {
      setGifPath(null);
    }

    const onStorage = (e) => {
      if (e.key === 'user') {
        setLoggedIn(!!e.newValue);
      }
    };

    const onUserChange = (e) => {
      // custom event dispatched by Header when user logs in/out
      try {
        setLoggedIn(!!e?.detail);
      } catch (err) {
        setLoggedIn(false);
      }
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('user-change', onUserChange);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('user-change', onUserChange);
    };
  }, []);
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
                src={loggedIn ? '/hero-img.png' : (gifPath ? gifPath : '/hero-img.png')}
                alt={loggedIn ? 'Student learning illustration' : 'Landing hero animation'}
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