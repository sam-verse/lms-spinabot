import React from 'react';
import { FileText, Clock, Check, Link,CircleCheckBig 

 } from 'lucide-react';

const TestSeries = () => {
  const testSeries = [
    {
      id: 1,
      title: "UPSC Prelims Mock Tests",
      badge: "UPSC",
      badgeColor: "text-white",
      badgeStyle: {backgroundColor: '#F98F14'},
      description: "Comprehensive mock tests covering all UPSC Prelims topics with detailed analysis",
      tests: "50 Tests",
      duration: "3 hours each",
      features: [
        "Detailed Solutions",
        "Performance Analytics", 
        "All India Ranking",
        "Previous Year Questions"
      ],
      price: "₹ 4,999"
    },
    {
      id: 2,
      title: "SSC CGL Test Series",
      badge: "SSC",
      badgeColor: "text-white",
      badgeStyle: {backgroundColor: '#F98F14'},
      description: "Complete test series for SSC CGL with tier-wise preparation and analysis",
      tests: "40 Tests",
      duration: "2 hours each", 
      features: [
        "Tier-wise Tests",
        "Speed Analysis",
        "Weakness Identification",
        "Expert Feedback"
      ],
      price: "₹ 2,999"
    },
    {
      id: 3,
      title: "Banking PO Mock Tests",
      badge: "Banking",
      badgeColor: "text-white",
      badgeStyle: {backgroundColor: '#F98F14'},
      description: "Specialized mock tests for Banking PO exams with quantitative focus",
      tests: "35 Tests",
      duration: "3 hours each",
      features: [
        "Sectional Tests",
        "Full Length Mocks", 
        "Time Management",
        "Score Prediction"
      ],
      price: "₹ 3,999"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Test Series & Mock Exams</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Practice with our comprehensive test series designed to simulate real exam conditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testSeries.map(test => (
            <div key={test.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden" style={{minWidth: 320, maxWidth: 370}}>
              {/* Top-right badge bubble - exact style from image */}
              <div className="absolute -top-7 -right-14 w-40 h-20 rounded-full opacity-40" style={{background: '#F98F14', borderRadius: '100px 100px 100px 100px / 60px 60px 60px 60px'}}></div>
              <span className="absolute top-4 right-2 px-3 py-1 rounded-full text-xs font-regular text-white" style={{background: '#F98F14', zIndex: 10}}>
                {test.badge}
              </span>
              <h3 className="text-lg font-semibold text-black leading-tight mb-3 pr-20">{test.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{test.description}</p>
              <div className="flex items-center justify-start gap-8 mb-4">
                <div className="flex items-center gap-2">
                  {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100"> */}
                    <img src="/target.svg" alt="Target" className="w-4 h-4" />
                  {/* </span> */}
                  <span className="text-base font-semibold text-black">{test.tests}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100"> */}
                    <img src="/clock.svg" alt="clock" className="w-4 h-4" />
                  {/* </span> */}
                  <span className="text-base font-semibold text-black">{test.duration}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-base font-bold text-black mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {test.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-base text-gray-700">
                      {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100"> */}
                       <CircleCheckBig color="#FA8F14" strokeWidth={2.25} />
                      {/* </span> */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold" style={{color: '#F98F14'}}>{test.price}</div>
                <button className="text-white px-8 py-2 rounded font-bold text-base hover:opacity-90 transition-opacity" style={{backgroundColor: '#F98F14'}}>
                  Start Testing
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center gap-2 mx-auto">
            <img src="/up-arrow.svg" alt="Growth" />
            View All Test Series
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestSeries;