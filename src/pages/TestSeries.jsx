import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { CheckCircle, GraduationCap, BookOpen, Users, Clock, ChevronRight, Trophy } from 'lucide-react';

const examCategories = [
  {
    title: 'All Competitive Exams',
    subtitle: 'UPSC,SSC,RRB,State police',
    iconBg: 'bg-[linear-gradient(to_bottom,_#0C63E5,_#362290)]',
    cardBg: 'bg-blue-50',
    btn: 'bg-[linear-gradient(to_bottom,_#0C63E5,_#362290)]',
  },
  {
    title: 'Banking',
    subtitle: 'UPSC,SSC,RRB,State police',
  iconBg: 'bg-[linear-gradient(to_bottom,_#01A44F,_#009A7B)]',
  cardBg: 'bg-green-50',
  btn: 'bg-[linear-gradient(to_bottom,_#01A44F,_#009A7B)]',
  },
  {
    title: 'Engineering',
    subtitle: 'UPSC,SSC,RRB,State police',
  iconBg: 'bg-[linear-gradient(to_bottom,_#F34200,_#E90004)]',
  cardBg: 'bg-red-50',
  btn: 'bg-[linear-gradient(to_bottom,_#F34200,_#E90004)]',
  },
  {
    title: 'Pharmacy',
    subtitle: 'UPSC,SSC,RRB,State police',
  iconBg: 'bg-[linear-gradient(to_bottom,_#E2007D,_#A221E9)]',
  cardBg: 'bg-purple-50',
  btn: 'bg-[linear-gradient(to_bottom,_#E2007D,_#A221E9)]',
  },
];

const features = [
  {
    img: '/test/t1.png',
    title: 'Performance Analytics',
    desc: 'Track your progress with detailed analytics and insights',
  },
  {
    img: '/test/t2.png',
    title: 'Peer Comparison',
    desc: 'Compare your performance with fellow aspirants',
  },
  {
    img: '/test/t3.png',
    title: 'Expert Solutions',
    desc: 'Detailed explanations from subject matter experts',
  },
  {
    img: '/test/t4.png',
    title: 'Real Exam Experience',
    desc: 'Simulate actual exam conditions and timing',
  },
];

const testSeries = [
  {
    tag: 'UPSC',
    title: 'UPSC Prelims Mock Tests',
    desc: 'Comprehensive mock tests covering all UPSC Prelims topics with detailed analysis',
    tests: '50 Tests',
    duration: '3 hours each',
    features: [
      'Detailed Solutions',
      'Performance Analytics',
      'All India Ranking',
      'Previous Year Questions',
    ],
    price: '₹ 4,999',
    btn: 'Start Testing',
    color: 'bg-yellow-400',
  },
  {
    tag: 'SSC',
    title: 'SSC CGL Test Series',
    desc: 'Complete test series for SSC CGL with tier-wise preparation and analysis',
    tests: '40 Tests',
    duration: '2 hours each',
    features: [
      'Tier-wise Tests',
      'Speed Analysis',
      'Weakness Identification',
      'Expert Feedback',
    ],
    price: '₹ 2,999',
    btn: 'Start Testing',
    color: 'bg-yellow-400',
  },
  {
    tag: 'Banking',
    title: 'Banking PO Mock Tests',
    desc: 'Specialized mock tests for Banking PO exams with quantitative focus',
    tests: '35 Tests',
    duration: '3 hours each',
    features: [
      'Sectional Tests',
      'Full Length Mocks',
      'Time Management',
      'Score Prediction',
    ],
    price: '₹ 3,999',
    btn: 'Start Testing',
    color: 'bg-yellow-400',
  },
];

function TestSeries() {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate('/competative_Exams');
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
  <Header />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-500 py-14 px-2 md:px-0 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Master Your Exam with Our Test Series</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">Practice with India's most comprehensive test series platform. Get detailed analytics, expert solutions, and compete with thousands of aspirants.</p>
        <div className="flex justify-center gap-4 mb-2">
          <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md shadow hover:bg-blue-50 transition">
            <Trophy className="inline-block mr-2" />
            Start Practicing</button>
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-900 transition">
            <img src="/graph.svg" alt="graph" className="inline-block mr-2" />
            View Analytics</button>
        </div>
      </section>
      {/* Exam Category */}
     <div className="bg-white min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1">
          <h2 className="text-5xl font-bold text-center mt-12 mb-6">Choose Your Exam Category</h2>
          <p className="text-center text-gray-600 mb-8">Select from our comprehensive collection of test series for various 
            <br />competitive exams</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-2">
            {examCategories.map((cat, i) => (
              <div
                key={i}
                className={`${cat.cardBg} rounded-2xl border border-gray-200 shadow flex flex-col justify-between p-6 min-h-[200px] h-full relative`}
                style={{ boxShadow: '0 4px 16px 0 rgba(31,38,135,0.10)' }}
              >
                <div className="flex flex-row items-center gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${cat.iconBg}`}>
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="font-semibold text-xl text-black leading-tight truncate">{cat.title}</div>
                    <div className="text-gray-600 text-sm truncate">{cat.subtitle}</div>
                  </div>
                </div>
                <div className="flex gap-8 text-gray-700 text-sm mt-4 mb-2 ml-16">
                  <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" />2500 Tests</span>
                  <span className="flex items-center gap-2"><Users className="w-4 h-4" />25k+ students</span>
                </div>
                <button
                  className={`w-full py-3 mt-2 rounded-lg font-semibold text-white text-lg ${cat.btn} hover:opacity-90 transition flex items-center justify-center gap-2`}
                  onClick={handleExplore}
                >
                  Explore Tests
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
       
      </div>
      {/* Why Choose Section */}
      <section className="bg-[#F4F4F4] py-14">
        <h2 className="text-5xl font-bold text-center mb-2">Why Choose Our Test Series?</h2>
        <p className="text-center text-gray-600 text-xl mb-10">Experience the most comprehensive and effective test preparation platform</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#F6F7FF] px-10 py-5 flex flex-col items-center text-center gap-3 shadow-md border border-gray-200 min-h-[140px] max-w-[420px] w-full mx-auto"
              style={{ boxShadow: '0 2px 8px 0 rgba(31,38,135,0.08)' }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray mb-2 shadow-sm overflow-hidden">
                <img src={f.img} alt={f.title} className="w-8 h-8 object-contain" />
              </div>
              <div className="font-semibold text-xl mb-1 text-black">{f.title}</div>
              <div className="font-light text-md text-gray-600 text-base leading-snug">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Popular Test Series */}
      <section className="py-12">
        <h2 className="text-5xl font-bold text-center mb-2">Popular Test Series</h2>
        <p className="text-center text-gray-600 mb-8 text-xl">Most enrolled test series by our students</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testSeries.map((test, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col" style={{minWidth: 320, maxWidth: 370}}>
              {/* Top-right badge bubble - exact style from image */}
              <div className="absolute -top-7 -right-14 w-40 h-20 rounded-full opacity-40" style={{background: '#F98F14', borderRadius: '100px 100px 100px 100px / 60px 60px 60px 60px'}}></div>
              <span className="absolute top-4 right-2 px-3 py-1 rounded-full text-xs font-regular text-white" style={{background: '#F98F14', zIndex: 10}}>
                {test.tag}
              </span>
              <h3 className="text-lg font-semibold text-black leading-tight mb-3 pr-20">{test.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{test.desc}</p>
              <div className="flex items-center justify-start gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <img src="/target.svg" alt="Target" className="w-4 h-4" />
                  <span className="text-base font-semibold text-black">{test.tests}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/clock.svg" alt="clock" className="w-4 h-4" />
                  <span className="text-base font-semibold text-black">{test.duration}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-base font-bold text-black mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {test.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-base text-gray-700">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FA8F14" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 15 10"/></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold" style={{color: '#F98F14'}}>{test.price}</div>
                <button className="text-white px-8 py-2 rounded font-bold text-base hover:opacity-90 transition-opacity" style={{backgroundColor: '#F98F14'}}>
                  {test.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-500 py-14 px-2 md:px-0 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Ace Your Exam?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">Join thousands of successful students who achieved their goals with our test series</p>
        <div className="flex justify-center gap-4 mb-2">
     <button className="bg-white text-blue-600 text-lg px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors focus:outline-white focus:ring-2 focus:ring-white">
            Register Now
          </button>
          <button className="border-2 border-blue-200 text-blue-200 bg-transparent rounded-md font-bold hover:bg-blue-200 hover:text-blue-600 transition-colors">
            Explore Courses
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TestSeries;
