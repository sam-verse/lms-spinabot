import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Award, BookOpen, Clock, Play, Users, CheckCircle, Share2, Download } from 'lucide-react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CustomSelect from '../components/Forms/CustomSelect';

const testData = [
  {
    title: "General Studies Paper - I",
    type: "Topic-wise Test",
    tags: ["History", "Geography", "Polity", "Economy"],
    level: "Medium",
    questions: 100,
    duration: "120 min",
    marks: 200,
    avgScore: 68,
    attempts: 1245,
    action: { label: "Start Quiz", color: "blue", disabled: false },
  },
  {
    title: "CSAT - Full Length Mock Test 1",
    type: "Mock Test",
    tags: ["Comprehension", "Logical Reasoning", "Quantitative Aptitude"],
    level: "Hard",
    questions: 80,
    duration: "120 min",
    marks: 200,
    avgScore: 62,
    attempts: 892,
    action: { label: "Start Quiz", color: "blue", disabled: false },
  },
  {
    title: "Modern Indian History - Deep Dive",
    type: "Topic-wise Test",
    tags: ["Modern History", "Freedom Struggle", "Post-Independence"],
    level: "Easy",
    questions: 50,
    duration: "60 min",
    marks: 100,
    avgScore: 74,
    attempts: 2156,
    action: { label: "View Results", color: "indigo", disabled: false },
  },
  {
    title: "UPSC Prelims Grand Test 2024",
    type: "Grand Test",
    tags: ["All Subjects"],
    level: "Hard",
    questions: 100,
    duration: "120 min",
    marks: 200,
    avgScore: 58,
    attempts: 3421,
    action: { label: "Coming Soon", color: "gray", disabled: true },
  },
];

function StatCard({ icon, title, value, accent }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{title}</span>
        <span className="text-2xl md:text-3xl font-semibold text-gray-900">{value}</span>
      </div>
      <div className={`h-12 w-12 rounded-lg flex items-center justify-center`}>
        {typeof icon === 'string' ? (
          <img src={icon} alt="stat" className="h-8 w-8" />
        ) : (
          icon
        )}
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="bg-white border border-gray-200 text-gray-700 px-2 py-0.5 rounded-md text-xs shadow-sm">
      {children}
    </span>
  );
}

function LevelBadge({ level }) {
  const map = {
    Easy: "bg-green-100 text-green-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-600",
  };
  return (
    <span
      className={`ml-2 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${map[level]}`}
    >
      {level}
    </span>
  );
}

function SelectField({ children, id, placeholder }) {
  // Preserve the original gray select styling used previously on this page
  const graySelectClass = 'w-full bg-gray-100 border border-gray-100 rounded-lg px-4 py-1 text-sm text-gray-700 appearance-none pr-10 shadow-sm';
  return (
    <CustomSelect id={id} placeholder={placeholder} selectClassName={graySelectClass}>
      {children}
    </CustomSelect>
  );
}

function TabButton({ label, activeClassName = "text-gray-800", inactiveClassName = "text-gray-500", right = false }) {
  // local state handled at parent; to keep this self-contained for now we'll rely on CSS :focus/active behavior
  return (
    <button
      className={`z-10 py-2 px-4 sm:px-6 text-sm font-semibold select-none focus:outline-none ${inactiveClassName}`}
      onMouseDown={(e) => e.preventDefault()}
    >
      {label}
    </button>
  );
}

function CompetativeExams() {
  const navigate = useNavigate();
  const handleStartQuiz = () => navigate("/quiz");
  const [activeTab, setActiveTab] = useState('available');
  const sidebarRef = useRef(null);
  const [enableSticky, setEnableSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const checkSticky = () => {
      const headerEl = document.querySelector('header');
      const hh = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 0;
      setHeaderHeight(hh);

      const sidebarEl = sidebarRef.current;
      if (!sidebarEl) return;

      const sidebarH = Math.ceil(sidebarEl.getBoundingClientRect().height);
      const avail = window.innerHeight - hh;

      // enable sticky only when sidebar height fits in available viewport space
      setEnableSticky(sidebarH <= avail && window.innerWidth >= 1024);
    };

    // run initially and on resize/orientation change
    checkSticky();
    window.addEventListener('resize', checkSticky);
    window.addEventListener('orientationchange', checkSticky);
    // also recalc after images/fonts load
    window.addEventListener('load', checkSticky);
    return () => {
      window.removeEventListener('resize', checkSticky);
      window.removeEventListener('orientationchange', checkSticky);
      window.removeEventListener('load', checkSticky);
    };
  }, []);
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Header />

  <div className="max-w-7xl mx-auto mt-8 px-4 md:px-6 mb-12 lg:mb-20">
        {/* Page Title */}
        <div>
          <h1 className="text-[22px] md:text-3xl font-bold text-gray-900">
            Competitive Exams Test Series
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Comprehensive test series for UPSC, SSC, RRB, State PSC, and more
          </p>
        </div>

        {/* Filters Row */}
        <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="examType" className="text-xs text-gray-500 mb-2 block">Select Exam Type</label>
            <SelectField id="examType">
              <option>UPSC CSE Mains</option>
              <option>SSC CGL</option>
              <option>State PSC</option>
              <option>UPSC CSE Prelims</option>
              <option>UPSC CSE Mains</option>
              <option>SSC CGL</option>
              <option>State PSC</option>
              <option>UPSC CSE Prelims</option>
            </SelectField>
          </div>
          <div>
            <label htmlFor="testType" className="text-xs text-gray-500 mb-2 block">Filter by Test Type</label>
            <SelectField id="testType">
              <option>Daily Knowledge Base check</option>
            </SelectField>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          <StatCard
            title="Total Tests"
            value="156"
            icon="/analytics/analytics1.svg"
            accent="bg-blue-50"
          />
          <StatCard
            title="Total Questions"
            value="12.5K"
            icon={<BookOpen className="h-8 w-8 text-green-600" />}
            accent="bg-green-50"
          />
          <StatCard
            title="Avg. Time"
            value="90m"
            icon={<Clock className="h-8 w-8 text-[#9810FA]" />}
            accent="bg-indigo-50"
          />
          <StatCard
            title="Price"
            value="₹2,999"
            icon={<Award className="h-8 w-8 text-[#F54900]" />}
            accent="bg-orange-50"
          />
    
        </div>

        {/* Tabs moved into left column so the pill width matches the cards area */}

        {/* Main content */}
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          {/* Left - Test cards */}
          <div className="flex-1 space-y-5">
            {/* Tabs - sliding pill like Analytics (placed inside left column so it only spans card area) */}
            <div className="mb-4">
              <div className="relative bg-gray-200 rounded-xl p-1 overflow-hidden max-w-full">
                {(() => {
                  const tabs = [
                    { key: 'available', label: 'Available Tests' },
                    { key: 'syllabus', label: 'Syllabus Coverage' },
                  ];
                  const activeIndex = Math.max(0, tabs.findIndex(t => t.key === activeTab));
                  const sliderWidth = `${100 / tabs.length}%`;
                  const sliderTransform = `translateX(${activeIndex * 100}%)`;
                  return (
                    <>
                      <div
                        aria-hidden
                        className="absolute top-1 bottom-1 left-1 bg-white rounded-xl shadow-sm"
                        style={{ width: sliderWidth, transform: sliderTransform, transition: 'transform 220ms cubic-bezier(.2,.8,.2,1)' }}
                      />

                      <div className="relative grid grid-cols-2" style={{ userSelect: 'none' }}>
                        {tabs.map((t) => (
                          <button
                            key={t.key}
                            role="tab"
                            aria-pressed={activeTab === t.key}
                            onClick={() => setActiveTab(t.key)}
                            onMouseDown={(e) => e.preventDefault()}
                            className={`z-10 py-1 px-4 sm:px-6 text-sm font-semibold select-none focus:outline-none ${activeTab === t.key ? 'text-gray-800' : 'text-gray-500'}`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>

            {testData.map((test, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                {/* Header Row */}
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg md:text-2xl font-semibold text-gray-900 leading-tight">
                        {test.title}
                      </h3>
                      <LevelBadge level={test.level} />
                      <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block ml-2" aria-hidden />
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{test.type}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2 rounded-md">
                  {test.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </div>

                {/* Metrics - larger rounded boxes like screenshot */}
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="bg-gray-50 rounded-xl px-6 py-4 text-center min-w-[150px]">
                      <div className="text-[12px] text-gray-500">Questions</div>
                      <div className="mt-2 font-semibold text-gray-900">{test.questions}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-6 py-4 text-center min-w-[150px]">
                      <div className="text-[12px] text-gray-500">Duration</div>
                      <div className="mt-2 font-semibold text-gray-900">{test.duration}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-6 py-4 text-center min-w-[150px]">
                      <div className="text-[12px] text-gray-500">Marks</div>
                      <div className="mt-2 font-semibold text-gray-900">{test.marks}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-6 py-4 text-center min-w-[150px]">
                      <div className="text-[12px] text-gray-500">Avg Score</div>
                      <div className="mt-2 font-semibold text-gray-900">{test.avgScore} %</div>
                    </div>
                  </div>

                  <hr className="my-5 border-t border-gray-100" />

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                     <Users className="h-5 w-5"/> 
                      <span>{test.attempts} attempts</span>
                    </div>

                    <button
                      className={`ml-auto inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white shadow-sm ${
                        test.action.color === "blue"
                          ? "bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600"
                          : test.action.color === "indigo"
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : "bg-gray-400"
                      } ${test.action.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={test.action.disabled}
                      onClick={
                        test.action.label === "Start Quiz" && !test.action.disabled
                          ? handleStartQuiz
                          : undefined
                      }
                    >
                      <Play className="h-4 w-4" />
                      {test.action.label}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Sidebar */}
          <aside
            ref={sidebarRef}
            className={`w-full lg:w-[360px] ${enableSticky ? 'lg:sticky' : ''} h-fit space-y-5`}
            style={enableSticky ? { top: headerHeight } : undefined}
          >
            {/* Test Series Package */}
            <div
              className="rounded-2xl border border-gray-100 shadow-xl p-6"
              style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 100%)' }}
            >
              <div className="flex items-start justify-between">
                <div className="text-sm text-gray-500">Test Series Package</div>
              </div>

              <div className="text-center my-4">
                <div className="text-3xl md:text-4xl font-regular text-gray-900">₹2,999</div>
                <div className="text-xs text-gray-500 mt-1">One-time payment</div>
              </div>

              <hr className="border-t border-gray-200 my-4" />

              <ul className="mt-2 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Access to all 156 tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Detailed performance analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Expert video solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>All India Rank & comparison</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>1 year validity</span>
                </li>
              </ul>

              <div className="mt-6">
                <button className="mx-auto block w-[90%] max-w-xs px-6 py-2 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
                  Register to Enroll
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-8 text-xs text-gray-500">
                <button aria-label="Share" className="hover:text-gray-700 flex flex-row gap-2 items-center">
                  <Share2 className="h-5 w-5 text-gray-400 mb-1" />
                  <span>Share</span>
                </button>

                <button aria-label="Download Brochure" className="hover:text-gray-700 flex flex-row gap-2 items-center">
                  <Download className="h-5 w-5 text-gray-400 mb-1" />
                  <span>Brochure</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="font-semibold text-gray-800">Quick Stats</div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enrolled Students</span>
                  <span className="font-semibold text-gray-900">28,542</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-semibold text-gray-900">⭐ 4.8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-emerald-600">87%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Attempts</span>
                  <span className="font-semibold text-gray-900">1.2M+</span>
                </div>
              </div>
            </div>

            {/* Recommended */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="font-semibold text-gray-800">
                Recommended For You
              </div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">
                      SSC CGL Complete Series
                    </div>
                    <div className="text-xs text-gray-500">40 tests</div>
                  </div>
                  <div className="font-semibold text-gray-900">₹1,999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">
                      Banking PO Mock Tests
                    </div>
                    <div className="text-xs text-gray-500">30 tests</div>
                  </div>
                  <div className="font-semibold text-gray-900">₹999</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompetativeExams;
