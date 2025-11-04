import React, { useState } from "react";
import Header from "../components/Header/Header";
import TestHistoryTable from "../components/TestHistoryTable";
import PercentileChart from "../components/Charts/PercentileChart";
import PerformanceChart from "../components/Charts/PerformanceChart";
import Subject from "../components/Subject";
import PeerComparison from "../components/PeerComparison";
import Footer from "../components/Footer/Footer";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("overview");

  // Small helper to render change with lucide icon based on + or -
  // iconColor controls icon; textClass controls the change text color (so we can keep orange/green text separately)
  const Change = ({ text, textClass, iconPositive = "text-green-600", iconNegative = "text-red-500", forceSign } = {}) => {
    // forceSign: 'positive' | 'negative' | undefined
    if (!text || typeof text !== "string") return null;
    const trimmed = text.trim();
    const isPlus = forceSign === "positive" ? true : forceSign === "negative" ? false : trimmed.startsWith("+");
    const isMinus = forceSign === "negative" ? true : forceSign === "positive" ? false : trimmed.startsWith("-");
    const Icon = isPlus ? TrendingUp : isMinus ? TrendingDown : null;
    const iconClass = isPlus ? iconPositive : isMinus ? iconNegative : "text-gray-500";
    // if caller didn't provide a textClass, use the iconClass so text color matches icon
    const finalTextClass = textClass ? textClass : iconClass;
    return (
      <div className={`text-xs ${finalTextClass} mt-1 flex items-center gap-1`}>
        {Icon && <Icon size={12} className={`${iconClass}`} />}
        <span>{trimmed}</span>
      </div>
    );
  };

  // KPI stats data - central source of truth for stat cards
  const stats = [
    { id: "tests", title: "Tests Taken", value: "5", change: "+2 this month", iconType: "doc", iconBg: "bg-blue-50", valueClass: "text-blue-600" },
    { id: "avgScore", title: "Avg. Score", value: "81%", change: "+11% improvement", iconType: "score", iconBg: "bg-green-50", valueClass: "text-green-600" },
    { id: "avgRank", title: "Avg. Rank", value: "#678", change: "Top 7%", iconType: "rank", iconBg: "bg-purple-50", valueClass: "text-purple-600", forceSign: "positive" },
    { id: "percentile", title: "Percentile", value: "92%", change: "+15% growth", iconType: "bars", iconBg: "bg-orange-50", valueClass: "text-orange-500" },
  ];

  const renderIcon = (type, valueClass) => {
    // use currentColor in SVG so Tailwind classes like text-<color> control color
    switch (type) {
      // prefer using external analytics SVG files (placed in public/analytics)
      case "doc":
        return <img src="/analytics/analytics1.svg" alt="analytics-1" className="h-5 w-5 md:h-6 md:w-6" />;
      case "score":
        return <img src="/analytics/analytics2.svg" alt="analytics-2" className="h-5 w-5 md:h-6 md:w-6" />;
      case "rank":
        return <img src="/analytics/analytics3.svg" alt="analytics-3" className="h-5 w-5 md:h-6 md:w-6" />;
      case "bars":
        return <img src="/analytics/analytics4.svg" alt="analytics-4" className="h-5 w-5 md:h-6 md:w-6" />;
      default:
        return null;
    }
  };
  // Topics data for focus and strengths
  const focusTopics = [
    { title: 'Indian Economy - Banking Sector', percent: 48, attempts: 12, note: 'Focus on RBI monetary policy' },
    { title: 'Modern History - World Wars', percent: 52, attempts: 8, note: 'Review causes and consequences' },
    { title: 'Geography - Climate Zones', percent: 58, attempts: 15, note: 'Practice more map-based questions' },
    { title: 'Polity - Constitutional Amendments', percent: 62, attempts: 10, note: 'Memorize key amendment numbers' },
  ];

  const strengths = [
    { title: 'Ancient Indian History', percent: 92, attempts: 18 },
    { title: 'Indian Polity - Fundamental Rights', percent: 88, attempts: 22 },
    { title: 'Geography - Rivers and Mountains', percent: 85, attempts: 20 },
  ];
  // Line chart data for Performance Trend
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Average Score",
        data: [60, 62, 65, 68, 70, 70],
        borderColor: "#a3a3a3",
        backgroundColor: "rgba(163,163,163,0.1)",
        borderDash: [6, 6],
        tension: 0,
        pointRadius: 0,
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Your Score",
        data: [60, 63, 68, 73, 77, 80],
        borderColor: "#2563eb",
        backgroundColor: "#fff",
        tension: 0,
        pointRadius: 4,
        pointBackgroundColor: "#2563eb",
        pointBorderColor: "#2563eb",
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          color: "#6b7280",
          font: { size: 14 },
          padding: 24,
        },
      },
      title: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#2563eb",
        bodyColor: "#2563eb",
        borderColor: "#2563eb",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { color: "#e5e7eb" },
        ticks: { color: "#6b7280" },
      },
      y: {
        grid: { color: "#e5e7eb" },
        min: 0,
        max: 90,
        ticks: { stepSize: 20, color: "#6b7280" },
      },
    },
  };

  // Bar chart data for Percentile Progress is now rendered by `PercentileChart` component
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header />

      {/* Title & Stat Cards */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Test Performance Dashboard</div>
        <div className="text-gray-600 mb-6">Track your progress and analyze your performance</div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">{s.title}</div>
                <div className={`text-2xl font-bold ${s.valueClass}`}>{s.value}</div>
                {s.forceSign ? <Change text={s.change} forceSign={s.forceSign} /> : <Change text={s.change} />}
              </div>
              <div className={`ml-0 md:ml-4 flex items-center justify-center w-10 h-10 rounded-lg self-end md:self-center`}>
                {renderIcon(s.iconType, s.valueClass)}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs - sliding pill */}
        <div className="mb-6">
          <div className="relative bg-gray-100 rounded-full p-1 overflow-hidden">
            {/* slider background */}
            {(() => {
              const tabs = [
                { key: "overview", label: "Overview" },
                { key: "history", label: "Test History" },
                { key: "subject", label: "Subject Analysis" },
                { key: "peer", label: "Peer Comparison" },
              ];
              const activeIndex = Math.max(0, tabs.findIndex((t) => t.key === activeTab));
              const sliderWidth = `${100 / tabs.length}%`;
              const sliderTransform = `translateX(${activeIndex * 100}%)`;
              return (
                <>
                  <div
                    aria-hidden
                    className="absolute top-1 bottom-1 left-0 bg-white rounded-full shadow-sm"
                    style={{ width: sliderWidth, transform: sliderTransform, transition: "transform 220ms cubic-bezier(.2,.8,.2,1)" }}
                  />

                  <div className="relative grid grid-cols-4" style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}>
                    {tabs.map((t) => (
                      <button
                        key={t.key}
                        role="tab"
                        aria-pressed={activeTab === t.key}
                        onClick={() => setActiveTab(t.key)}
                        // Prevent text selection on mouse down and remove mobile tap highlight
                        onMouseDown={(e) => e.preventDefault()}
                        // allow keyboard activation via Enter/Space when mouse down is prevented
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveTab(t.key);
                          }
                        }}
                        className={`z-10 py-2 px-3 sm:px-6 text-sm font-semibold select-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 ${activeTab === t.key ? "text-gray-800" : "text-gray-500"}`}
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

        {/* Tab Content */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <PerformanceChart />
                <PercentileChart />
            </div>
            {/* Focus & Strength Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Topics to Focus On - left */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-gray-800">Topics to Focus On</div>
                      <div className="text-sm text-gray-500">Areas needing improvement</div>
                    </div>
                    <div className="flex items-center">
                      {/* <div className="border border-orange-200 rounded-full w-10 h-10 flex items-center justify-center"> */}
                        <AlertCircle size={25} className="text-[#F54900]" />
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {focusTopics.map((t) => (
                      <div key={t.title} className="bg-[#FFD6A7]/20 rounded-xl p-4 border border-orange-300">
                        <div className="flex items-start justify-between">
                          <div className="font-medium text-gray-800">{t.title}</div>
                          <div className="text-sm text-[#CA3500] font-semibold bg-orange-100 px-3 py-1 rounded-full">{t.percent}%</div>
                        </div>
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="bg-black h-3" style={{ width: `${t.percent}%` }} />
                          </div>
                          <div className="text-xs text-gray-500 mt-2">{t.attempts} attempts</div>
                          <div className="text-xs text-[#CA3500] mt-1">💡 {t.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              {/* Your Strengths - right */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-gray-800">Your Strengths</div>
                    <div className="text-sm text-gray-500">Topics you excel in</div>
                  </div>
                  <div className="flex items-center">
                    {/* <div className="border border-green-200 rounded-full w-10 h-10 flex items-center justify-center"> */}
                      <CheckCircle size={25} className="text-green-600" />
                    {/* </div> */}
                  </div>
                </div>
                <div className="space-y-4">
                  {strengths.map((s) => (
                    <div key={s.title} className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <div className="flex items-start justify-between">
                        <div className="font-medium text-gray-800">{s.title}</div>
                        <div className="text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">{s.percent}%</div>
                      </div>
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div className="bg-black h-3" style={{ width: `${s.percent}%` }} />
                        </div>
                        <div className="text-xs text-gray-500 mt-2">{s.attempts} attempts</div>
                      </div>
                    </div>
                  ))}

                  <div className="mt-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center text-sm text-blue-600">🎯 Keep up the great work!<div className="text-xs text-blue-500">Maintain consistency in these topics</div></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "subject" && (
          <div className="mb-12">
            <Subject />
          </div>
        )}
        {activeTab === "history" && (
          <div className="mb-12">
            <TestHistoryTable />
          </div>
        )}
        {activeTab === "peer" && (
          <div className="mb-12">
            <PeerComparison />
          </div>
        )}
      </div>
      {/* Footer rendered outside the max-width container so it spans full width */}
      <Footer />
    </div>
  );
}
