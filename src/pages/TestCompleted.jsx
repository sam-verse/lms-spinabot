import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

export default function TestCompleted() {
  const navigate = useNavigate();
  const handleViewAnalytics = () => {
    navigate("/analytics");
  };
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Header */}
      <Header />

      {/* Gradient Banner */}
      <section className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 py-9 text-center text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            Test Completed!
          </div>
          <div className="mt-1 text-[15px] opacity-95 font-medium">
            UPSC Prelims Mock Test - General Studies
          </div>
          <div className="text-xs mt-1 opacity-90">October 14, 2025</div>
        </div>
      </section>

      {/* Score and KPI Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mt-8 px-4">
        {/* Score Card */}
        <div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-extrabold text-yellow-500 leading-none">
              72%
            </div>
            <div className="mt-2 text-[15px] font-semibold text-gray-800">
              Your Score
            </div>
            <div className="mt-1 text-2xl font-bold text-gray-900">144/200</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-600">
            <div className="bg-gray-50 rounded-xl px-3 py-2 flex items-center justify-between border border-gray-100">
              <span>All India Rank</span>
              <span className="font-bold text-gray-900">#1,245</span>
            </div>
            <div className="bg-green-50 rounded-xl px-3 py-2 flex items-center justify-between border border-green-100">
              <span className="text-green-700">Percentile</span>
              <span className="font-bold text-green-700">95.6%</span>
            </div>
          </div>
        </div>

        {/* KPI grid */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <div className="text-3xl font-extrabold text-green-500">72</div>
            <div className="text-[13px] text-gray-600 mt-1">Correct</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <div className="text-3xl font-extrabold text-red-500">18</div>
            <div className="text-[13px] text-gray-600 mt-1">Incorrect</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <div className="text-3xl font-extrabold text-gray-800">10</div>
            <div className="text-[13px] text-gray-600 mt-1">Unattempted</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <div className="text-3xl font-extrabold text-blue-600">108m</div>
            <div className="text-[13px] text-gray-600 mt-1">Time Taken</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <div className="text-3xl font-extrabold text-indigo-600">100</div>
            <div className="text-[13px] text-gray-600 mt-1">
              Total Questions
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <div className="text-2xl font-extrabold text-orange-500">
              Top 95.6%
            </div>
            <div className="text-[13px] text-gray-600 mt-1">Percentile</div>
          </div>
        </div>
      </div>

      {/* Actions & Segmented Tabs */}
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="flex flex-wrap gap-3 mb-5">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold shadow-sm">
            Retake Test
          </button>
          <button
            className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
            onClick={handleViewAnalytics}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3h18v14H3z" />
              <path d="M3 17l6-6 4 4 8-8" />
            </svg>{" "}
            View Analytics
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3v14" />
              <path d="M5 10l7 7 7-7" />
            </svg>{" "}
            Download Report
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 12v8h16v-8" />
              <path d="M16 6l-4-4-4 4" />
              <path d="M12 2v14" />
            </svg>{" "}
            Share Result
          </button>
        </div>

        {/* Segmented control */}
        <div className="relative bg-gray-100 rounded-full h-8 flex items-center text-[13px] font-semibold text-gray-600 mb-6">
          <div className="absolute left-0 top-0 h-8 w-1/3 bg-indigo-600 rounded-full transition-all"></div>
          <div className="grid grid-cols-3 w-full relative z-[1]">
            <button className="text-white">Question-wise Review</button>
            <button className="text-gray-600">Topic-wise Analysis</button>
            <button className="text-gray-600">Difficulty Analysis</button>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              1
            </span>
            <span className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
              Geography
            </span>
            <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded">
              Easy
            </span>
            <span className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
              2 marks
            </span>
          </div>
          <div className="font-semibold text-[15px] mb-3">
            Which of the following is the longest river in India?
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <div className="bg-green-50 border border-green-400 rounded-lg px-4 py-2 flex items-center justify-between">
              <span>Ganga</span>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              Yamuna
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              Godavari
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              Narmada
            </div>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            Your Answer:{" "}
            <span className="text-green-600 font-semibold">Ganga</span>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded px-4 py-2 text-sm text-blue-700">
            Explanation: The Ganga is the longest river in India, flowing for
            approximately 2,525 kilometers from the Gangotri glacier to the Bay
            of Bengal.
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              2
            </span>
            <span className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
              History
            </span>
            <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded">
              Easy
            </span>
            <span className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
              2 marks
            </span>
          </div>
          <div className="font-semibold text-[15px] mb-3">
            In which year did India gain independence?
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <div className="bg-green-50 border border-green-400 rounded-lg px-4 py-2 flex items-center justify-between">
              <span>1947</span>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-700">
            Your Answer:{" "}
            <span className="text-green-600 font-semibold">1947</span>
          </div>
        </div>

        <button className="mx-auto mb-12 block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
