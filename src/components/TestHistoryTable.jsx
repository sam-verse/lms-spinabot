import React from "react";

const testHistoryData = [
  {
    name: "UPSC Prelims Mock Test - 15",
    date: "Oct 14, 2025",
    score: "144/200",
    percentage: 72,
    rank: "#1245",
    time: "108 min",
  },
  {
    name: "General Studies - Topic Test",
    date: "Oct 12, 2025",
    score: "85/100",
    percentage: 85,
    rank: "#452",
    time: "58 min",
  },
  {
    name: "CSAT Full Length Test - 3",
    date: "Oct 10, 2025",
    score: "156/200",
    percentage: 78,
    rank: "#892",
    time: "115 min",
  },
  {
    name: "Modern History Deep Dive",
    date: "Oct 8, 2025",
    score: "88/100",
    percentage: 88,
    rank: "#234",
    time: "52 min",
  },
  {
    name: "Current Affairs - September",
    date: "Oct 6, 2025",
    score: "42/50",
    percentage: 84,
    rank: "#567",
    time: "28 min",
  },
];

export default function TestHistoryTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-semibold text-gray-800 text-lg">Recent Test Attempts</div>
          <div className="text-sm text-gray-400">Your complete test history and performance</div>
        </div>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-200 rounded-md text-sm bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v14m0 0l-4-4m4 4l4-4M4 21h16"/></svg>
          Export Report
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-white text-gray-500 border-b">
              <th className="py-3 px-4 font-medium">Test Name</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Score</th>
              <th className="py-3 px-4 font-medium">Percentage</th>
              <th className="py-3 px-4 font-medium">Rank</th>
              <th className="py-3 px-4 font-medium">Time</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {testHistoryData.map((test, idx) => (
              <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{test.name}</td>
                <td className="py-3 px-4 text-gray-500 whitespace-nowrap flex items-center gap-1">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  {test.date}
                </td>
                <td className="py-3 px-4 text-gray-900 font-medium whitespace-nowrap">{test.score}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-block min-w-[36px] text-center px-2 py-0.5 rounded-full text-sm font-semibold ${test.percentage >= 80 ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-700'}`}>
                    {test.percentage}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-900 font-medium whitespace-nowrap">{test.rank}</td>
                <td className="py-3 px-4 text-gray-500 whitespace-nowrap flex items-center gap-1">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  {test.time}
                </td>
                <td className="py-3 px-4">
                  <button className="px-4 py-1.5 rounded-md border border-gray-200 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
