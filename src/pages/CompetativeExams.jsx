import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4 items-center">
      <div
        className={`h-11 w-11 rounded-lg flex items-center justify-center ${accent}`}
      >
        <img src={icon} alt="stat" className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{title}</span>
        <span className="text-xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
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
      className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${map[level]}`}
    >
      {level}
    </span>
  );
}

export default function CompetativeExams() {
  const navigate = useNavigate();
  const handleStartQuiz = () => navigate("/quiz");
  return (
    <div className="bg-[#F6F7FB] min-h-screen pb-10">
      {/* Top Bar */}
      <header className="bg-white/90 backdrop-blur border-b border-gray-100 px-6 md:px-10 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>
              <a href="#" className="text-blue-600">
                Test Series
              </a>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </nav>
          </div>
        </div>
        <div className="bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold">
          KS
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-8 px-4 md:px-6">
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
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 w-28">Select Exam Type</span>
            <div className="flex-1">
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700">
                <option>UPSC CSE Prelims</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 w-28">
              Filter by Test Type
            </span>
            <div className="flex-1">
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700">
                <option>Daily Knowledge Base check</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
          <StatCard
            title="Total Tests"
            value="156"
            icon="/graph.svg"
            accent="bg-blue-50"
          />
          <StatCard
            title="Total Questions"
            value="12.5K"
            icon="/graph.svg"
            accent="bg-green-50"
          />
          <StatCard
            title="Avg. Time"
            value="90m"
            icon="/clock.svg"
            accent="bg-indigo-50"
          />
          <StatCard
            title="Price"
            value="₹2,999"
            icon="/enroll-icon.svg"
            accent="bg-orange-50"
          />
          <StatCard
            title="Difficulty Mix"
            value="Easy–Hard"
            icon="/target.svg"
            accent="bg-purple-50"
          />
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 flex items-center gap-2 text-sm">
            <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold">
              Available Tests
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
              Syllabus Coverage
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          {/* Left - Test cards */}
          <div className="flex-1 space-y-5">
            {testData.map((test, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                {/* Header Row */}
                <div className="flex items-center gap-2">
                  <span className="text-[17px] font-semibold text-gray-900">
                    {test.title}
                  </span>
                  <LevelBadge level={test.level} />
                  <span className="ml-2 text-xs text-gray-400">
                    {test.type}
                  </span>
                  <span className="ml-auto hidden md:inline text-[11px] text-gray-500">
                    👥 {test.attempts} attempts
                  </span>
                </div>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {test.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </div>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-[13px] text-gray-500">Questions</div>
                    <div className="mt-0.5 font-semibold text-gray-900">
                      {test.questions}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-[13px] text-gray-500">Duration</div>
                    <div className="mt-0.5 font-semibold text-gray-900">
                      {test.duration}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-[13px] text-gray-500">Marks</div>
                    <div className="mt-0.5 font-semibold text-gray-900">
                      {test.marks}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-[13px] text-gray-500">Avg Score</div>
                    <div className="mt-0.5 font-semibold text-gray-900">
                      {test.avgScore} %
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="md:hidden text-xs text-gray-500">
                    👥 {test.attempts} attempts
                  </span>
                  <button
                    className={`ml-auto px-4 py-2 rounded-md text-sm font-semibold text-white ${
                      test.action.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : test.action.color === "indigo"
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : "bg-gray-400"
                    } ${
                      test.action.disabled
                        ? "opacity-60 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={test.action.disabled}
                    onClick={
                      test.action.label === "Start Quiz" &&
                      !test.action.disabled
                        ? handleStartQuiz
                        : undefined
                    }
                  >
                    {test.action.label}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Sidebar */}
          <aside className="w-full lg:w-[360px] lg:sticky lg:top-20 h-fit space-y-5">
            {/* Test Series Package */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm text-gray-500">Test Series Package</div>
              <div className="mt-1 text-3xl font-bold text-gray-900">
                ₹2,999
              </div>
              <div className="text-xs text-gray-500">One-time payment</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-green-600">
                  <span>✔</span>
                  <span className="text-gray-700">Access to all 156 tests</span>
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <span>✔</span>
                  <span className="text-gray-700">
                    Detailed performance analytics
                  </span>
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <span>✔</span>
                  <span className="text-gray-700">Expert video solutions</span>
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <span>✔</span>
                  <span className="text-gray-700">
                    All India Rank & comparison
                  </span>
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <span>✔</span>
                  <span className="text-gray-700">1 year validity</span>
                </li>
              </ul>
              <button className="mt-5 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg">
                Register to Enroll
              </button>
              <div className="mt-3 flex items-center justify-center gap-5 text-xs text-gray-500">
                <button className="hover:text-gray-700">Share</button>
                <button className="hover:text-gray-700">Brochure</button>
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
    </div>
  );
}
