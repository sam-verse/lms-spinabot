import React from "react";

const testHistoryData = [
  {
    name: "UPSC Prelims Mock Test 1",
    date: "Oct 1, 2025",
    score: "78%",
    rank: "#650",
    percentile: "90%",
    status: "Completed",
  },
  {
    name: "UPSC Prelims Mock Test 2",
    date: "Oct 8, 2025",
    score: "81%",
    rank: "#678",
    percentile: "92%",
    status: "Completed",
  },
  {
    name: "UPSC Prelims Mock Test 3",
    date: "Oct 15, 2025",
    score: "75%",
    rank: "#700",
    percentile: "88%",
    status: "Completed",
  },
  {
    name: "UPSC Prelims Mock Test 4",
    date: "Oct 22, 2025",
    score: "83%",
    rank: "#620",
    percentile: "94%",
    status: "Completed",
  },
  {
    name: "UPSC Prelims Mock Test 5",
    date: "Oct 29, 2025",
    score: "85%",
    rank: "#600",
    percentile: "96%",
    status: "Completed",
  },
];

export default function TestHistoryTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="font-semibold text-gray-800 mb-4 text-lg">Test History</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-500">
              <th className="py-3 px-4 font-medium">Test Name</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Score</th>
              <th className="py-3 px-4 font-medium">Rank</th>
              <th className="py-3 px-4 font-medium">Percentile</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {testHistoryData.map((test, idx) => (
              <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">{test.name}</td>
                <td className="py-3 px-4">{test.date}</td>
                <td className="py-3 px-4 text-green-600 font-bold">{test.score}</td>
                <td className="py-3 px-4 text-purple-600 font-bold">{test.rank}</td>
                <td className="py-3 px-4 text-orange-500 font-bold">{test.percentile}</td>
                <td className="py-3 px-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    {test.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
