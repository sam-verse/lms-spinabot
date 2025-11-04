import React, { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Clock, Target, TrendingUp, RefreshCw, RotateCcw, ChartColumn, Download, Share2, Award, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import questions from "./questions";

export default function TestCompleted() {
  const navigate = useNavigate();
  const handleViewAnalytics = () => {
    navigate("/analytics");
  };
  const [tcTab, setTcTab] = useState("question");
  // Make page values data-driven via a single object
  const testResult = {
    scorePercent: 72,
    scoreRaw: "144/200",
    allIndiaRank: "#1,245",
    percentile: "95.6%",
    kpis: [
      { id: "correct", label: "Correct", value: 72, Icon: CheckCircle, iconClass: "text-green-600", valueClass: "text-3xl" , shadow: "shadow-lg"},
      { id: "incorrect", label: "Incorrect", value: 18, Icon: XCircle, iconClass: "text-red-500", valueClass: "text-3xl", shadow: "shadow-lg" },
      { id: "unattempted", label: "Unattempted", value: 10, Icon: AlertTriangle, iconClass: "text-gray-600", valueClass: "text-3xl", shadow: "shadow-lg" },
      { id: "time", label: "Time Taken", value: "108m", Icon: Clock, iconClass: "text-blue-600", valueClass: "text-3xl", shadow: "shadow-lg" },
      { id: "totalQuestions", label: "Total Questions", value: 100, Icon: Target, iconClass: "text-[#9810FA]", valueClass: "text-3xl", shadow: "shadow-lg" },
      { id: "percentileTop", label: "Percentile", value: "Top 95.6%", Icon: TrendingUp, iconClass: "text-[#F54900]", valueClass: "text-2xl", shadow: "shadow-sm" },
    ],
  };
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Header */}
      <Header />

      {/* Gradient Banner */}
      <section className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 py-9 text-center text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-3xl md:text-3xl font-regular flex items-center justify-center gap-2 mb-3">
            <Award size={28} className="text-white" />
            Test Completed!
          </div>
          <div className="mt-1 text-[15px] opacity-95 font-sm font-light">
            UPSC Prelims Mock Test - General Studies
          </div>
          <div className="text-xs font-light mt-1 opacity-90">October 14, 2025</div>
        </div>
      </section>

      {/* Score and KPI Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mt-8 px-4">
        {/* Score Card */}
        <div
          className="col-span-1 md:col-span-2 rounded-2xl shadow-lg p-6"
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 100%)',
            // border: '1px solid #BEDBFF'
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-regular text-[#D08700] leading-none">
              {testResult.scorePercent}%
            </div>
            <div className="mt-2 text-[13px] font-semibold text-gray-800">
              Your Score
            </div>
            <div className="mt-1 text-2xl font-semibold text-black">{testResult.scoreRaw}</div>
          </div>
          <div className="mt-6 space-y-3 w-full">
            <div className="w-full bg-white rounded-lg px-4 py-3 flex items-center justify-between border border-gray-100">
              <div className="text-sm text-gray-500">All India Rank</div>
              <div className="font-semibold text-black">{testResult.allIndiaRank}</div>
            </div>
            <div className="w-full bg-white rounded-lg px-4 py-3 flex items-center justify-between border border-gray-100">
              <div className="text-sm text-gray-500">Percentile</div>
              <div className="font-semibold text-black">{testResult.percentile}</div>
            </div>
          </div>
        </div>

        {/* KPI grid */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {testResult.kpis.map((k) => {
              const Icon = k.Icon;
              return (
                <div key={k.id} className={`bg-white rounded-2xl ${k.shadow} border border-gray-100 p-5 text-center`} style={{ borderRadius: '10%' }}>
                  <div className="flex items-center justify-center mb-2">
                    <div className="rounded-full inline-flex items-center justify-center w-12 h-12">
                      <Icon size={28} className={k.iconClass} />
                    </div>
                  </div>
                  <div className={`${k.valueClass} font-regular text-black`}>{k.value}</div>
                  <div className="text-[13px] text-gray-600 mt-1">{k.label}</div>
                </div>
              );
            })}
          </div>
      </div>

      {/* Actions & Segmented Tabs */}
      <div className="max-w-5xl mx-auto mt-8 px-4">
  <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={() => { /* optional handler */ }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-white shadow-lg text-sm"
            style={{ background: 'linear-gradient(90deg,#2563eb 0%,#8b5cf6 100%)' }}
          >
              <RotateCcw size={16} className="text-white" />

            <span>Retake Test</span>
          </button>

          <button
            className="bg-white border border-gray-200 text-gray-800 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-2 shadow-sm text-sm"
            onClick={handleViewAnalytics}
          >
          <ChartColumn size={16} className="text-gray-800" />
            <span>View Analytics</span>
          </button>

          <button className="bg-white border border-gray-200 text-gray-800 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-2 shadow-sm text-sm">
                        <Download size={16} className="text-gray-800" />

            <span>Download Report</span>
          </button>

          <button className="bg-white border border-gray-200 text-gray-800 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-2 shadow-sm text-sm">
            <Share2 size={16} className="text-gray-800" />
            <span>Share Result</span>
          </button>
        </div>

        {/* Segmented control (interactive sliding pill like Analytics) */}
        <div className="mb-6">
          <div className="relative bg-gray-100 rounded-full p-1 overflow-hidden">
            {(() => {
              const tabs = [
                { key: "question", label: "Question-wise Review" },
                { key: "topic", label: "Topic-wise Analysis" },
                { key: "difficulty", label: "Difficulty Analysis" },
              ];
              const activeIndex = Math.max(0, tabs.findIndex((t) => t.key === tcTab));
              const sliderWidth = `${100 / tabs.length}%`;
              const sliderTransform = `translateX(${activeIndex * 100}%)`;
              return (
                <>
                  <div
                    aria-hidden
                    className="absolute top-1 bottom-1 left-0 bg-white rounded-full shadow-sm"
                    style={{ width: sliderWidth, transform: sliderTransform, transition: "transform 220ms cubic-bezier(.2,.8,.2,1)" }}
                  />

                  <div className="relative grid grid-cols-3" style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}>
                    {tabs.map((t) => (
                      <button
                        key={t.key}
                        role="tab"
                        aria-pressed={tcTab === t.key}
                        onClick={() => setTcTab(t.key)}
                        onMouseDown={(e) => e.preventDefault()}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setTcTab(t.key);
                          }
                        }}
                        className={`z-10 py-2 px-3 sm:px-6 text-sm font-semibold select-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 ${tcTab === t.key ? "text-gray-800" : "text-gray-500"}`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Detailed Question Review (data-driven) */}
        {questions.map((q) => (
          <div key={q.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#00A63E] text-white rounded-full w-8 h-8 font-regular flex items-center justify-center ">{q.number}</span>
              <span className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{q.subject}</span>
              <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded">{q.difficulty}</span>
              <span className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{q.marks} marks</span>
            </div>
            <div className="font-semibold text-[15px] mb-3">{q.question}</div>
            <div className="flex flex-col gap-2 mb-3">
              {q.options.map((opt) => (
                <div
                  key={opt.text}
                  className={opt.correct ? "bg-green-50 border border-green-400 rounded-lg px-4 py-2 flex items-center justify-between" : "bg-white border border-gray-200 rounded-lg px-4 py-2"}
                >
                  <span>{opt.text}</span>
                  {opt.correct && (
                    <svg width="20" height="20" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-700 mb-2">
              Your Answer: <span className={`${q.userAnswerCorrect ? "text-green-600" : "text-red-600"} font-semibold`}>{q.userAnswer}</span>
            </div>
            <div className="bg-blue-50 rounded px-4 py-2 text-sm text-blue-700">Explanation: {q.explanation}</div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => navigate('/')}
          className="mx-auto mb-12 block bg-white hover:bg-gray-50 text-gray-800 px-5 py-3 font-semibold flex items-center gap-3 shadow-md border border-gray-200"
          // style={{ borderRadius: '10%' }}
        >
          <ArrowLeft size={16} className="text-gray-700" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
