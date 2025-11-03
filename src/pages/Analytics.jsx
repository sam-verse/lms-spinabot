import React, { useState } from "react";
import TestHistoryTable from "../components/TestHistoryTable";
import { Line, Bar } from "react-chartjs-2";
import Subject from "../components/Subject";
import PeerComparison from "../components/PeerComparison";
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

  // Bar chart data for Percentile Progress
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Percentile",
        data: [65, 70, 75, 85, 90, 97],
        backgroundColor: "#a78bfa",
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          color: "#a78bfa",
          font: { size: 14 },
          padding: 24,
        },
      },
      title: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#a78bfa",
        bodyColor: "#a78bfa",
        borderColor: "#a78bfa",
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
        max: 100,
        ticks: { stepSize: 25, color: "#6b7280" },
      },
    },
  };
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <nav className="flex gap-8 text-lg font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Courses</a>
            <a href="#" className="hover:text-blue-600">Test Series</a>
            <a href="#" className="hover:text-blue-600">Pricing</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold shadow-sm hidden md:block">Browse Tests</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold shadow-sm">Take New Test</button>
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">KS</div>
        </div>
      </header>

      {/* Title & Stat Cards */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Test Performance Dashboard</div>
        <div className="text-gray-600 mb-6">Track your progress and analyze your performance</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Tests Taken</div>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-xs text-green-600 mt-1">+2 this month</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Avg. Score</div>
            <div className="text-2xl font-bold text-green-600">81%</div>
            <div className="text-xs text-green-600 mt-1">+11% improvement</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Avg. Rank</div>
            <div className="text-2xl font-bold text-purple-600">#678</div>
            <div className="text-xs text-purple-600 mt-1">Top 7%</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Percentile</div>
            <div className="text-2xl font-bold text-orange-500">92%</div>
            <div className="text-xs text-orange-500 mt-1">+15% growth</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            className={`px-6 py-2 rounded-full font-semibold shadow-sm ${activeTab === "overview" ? "bg-gray-100 text-gray-800" : "bg-white text-gray-500 border"}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold shadow-sm ${activeTab === "history" ? "bg-gray-100 text-gray-800" : "bg-white text-gray-500 border"}`}
            onClick={() => setActiveTab("history")}
          >
            Test History
          </button>
          <button
            className="bg-white text-gray-500 px-6 py-2 rounded-full font-semibold shadow-sm border"
            onClick={() => setActiveTab("subject")}
          >
            Subject Analysis
          </button>
          <button
            className="bg-white text-gray-500 px-6 py-2 rounded-full font-semibold shadow-sm border"
            onClick={() => setActiveTab("peer")}
          >
            Peer Comparison
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="font-semibold text-gray-800 mb-2">Performance Trend</div>
                <div className="text-xs text-gray-500 mb-2">Your score progression over time</div>
                <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center">
                  <Line data={lineData} options={lineOptions} />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                  <span>Week 5</span>
                  <span>Week 6</span>
                </div>
                <div className="flex gap-6 justify-center text-xs mt-1">
                  <span className="flex items-center gap-1 text-gray-400"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#a3a3a3" strokeWidth="2" fill="none"/><line x1="2" y1="8" x2="14" y2="8" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4 2"/></svg> Average Score</span>
                  <span className="flex items-center gap-1 text-blue-600"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#2563eb" strokeWidth="2" fill="#2563eb"/></svg> Your Score</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="font-semibold text-gray-800 mb-2">Percentile Progress</div>
                <div className="text-xs text-gray-500 mb-2">Your percentile rank over time</div>
                <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center">
                  <Bar data={barData} options={barOptions} />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                  <span>Week 5</span>
                  <span>Week 6</span>
                </div>
                <div className="flex gap-6 justify-center text-xs mt-1">
                  <span className="flex items-center gap-1 text-purple-400"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="3" width="10" height="10" rx="2" fill="#a78bfa"/></svg> Percentile</span>
                </div>
              </div>
            </div>
            {/* Focus & Strength Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">Topics to Focus On <span className="text-orange-500">&#9888;</span></div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Indian Economy: Banking Sector</span>
                      <span className="text-orange-500 font-bold">48%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-orange-400 h-2 rounded" style={{width:'48%'}}></div></div>
                    <div className="text-xs text-gray-500 mt-1">Low accuracy in industry policy</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Modern History: World Wars</span>
                      <span className="text-orange-500 font-bold">53%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-orange-400 h-2 rounded" style={{width:'53%'}}></div></div>
                    <div className="text-xs text-gray-500 mt-1">Needs review of important events</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Geography: Climate Zones</span>
                      <span className="text-orange-500 font-bold">39%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-orange-400 h-2 rounded" style={{width:'39%'}}></div></div>
                    <div className="text-xs text-gray-500 mt-1">Improve conceptual understanding</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Polity: Constitutional Amendments</span>
                      <span className="text-orange-500 font-bold">52%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-orange-400 h-2 rounded" style={{width:'52%'}}></div></div>
                    <div className="text-xs text-gray-500 mt-1">Review key amendment details</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">Your Strengths <span className="text-green-500">&#10003;</span></div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ancient Indian History</span>
                      <span className="text-green-600 font-bold">89%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-green-400 h-2 rounded" style={{width:'89%'}}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Indian Polity: Fundamental Rights</span>
                      <span className="text-green-600 font-bold">88%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-green-400 h-2 rounded" style={{width:'88%'}}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Geography: Rivers and Mountains</span>
                      <span className="text-green-600 font-bold">85%</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 w-full"><div className="bg-green-400 h-2 rounded" style={{width:'85%'}}></div></div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-blue-600 text-center">Keep up the great work!<br />Maintain strengths & review new topics</div>
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
    </div>
  );
}
