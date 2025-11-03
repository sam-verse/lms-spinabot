import React from "react";
import { Radar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const radarData = {
	labels: ["History", "Geography", "Polity", "Economy", "Science"],
	datasets: [
		{
			label: "Average",
			data: [70, 72, 75, 65, 68],
			backgroundColor: "rgba(163,163,163,0.2)",
			borderColor: "#a3a3a3",
			pointBackgroundColor: "#a3a3a3",
			pointBorderColor: "#a3a3a3",
			borderWidth: 2,
			fill: true,
		},
		{
			label: "Your Score",
			data: [85, 78, 92, 68, 75],
			backgroundColor: "rgba(59,130,246,0.2)",
			borderColor: "#2563eb",
			pointBackgroundColor: "#2563eb",
			pointBorderColor: "#2563eb",
			borderWidth: 2,
			fill: true,
		},
	],
};

const radarOptions = {
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
	},
	scales: {
		r: {
			angleLines: { color: "#e5e7eb" },
			grid: { color: "#e5e7eb" },
			pointLabels: { color: "#6b7280", font: { size: 14 } },
			min: 0,
			max: 100,
			ticks: { stepSize: 25, color: "#6b7280" },
		},
	},
};

const subjects = [
	{ name: "History", avg: 85, peer: 70, diff: 15 },
	{ name: "Geography", avg: 78, peer: 72, diff: 6 },
	{ name: "Polity", avg: 92, peer: 75, diff: 17 },
	{ name: "Economy", avg: 68, peer: 65, diff: 3 },
	{ name: "Science", avg: 75, peer: 68, diff: 7 },
];

export default function PeerComparison() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
			{/* Radar Chart Card */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
				<div className="font-semibold text-gray-800 text-lg mb-1">Subject-wise Performance</div>
				<div className="text-sm text-gray-500 mb-6">Comprehensive analysis across subjects</div>
				<div className="w-full flex items-center justify-center" style={{ minHeight: 320 }}>
					<Radar data={radarData} options={radarOptions} />
				</div>
				<div className="flex gap-6 justify-center text-xs mt-4">
					<span className="flex items-center gap-1 text-gray-400"><span className="w-3 h-3 inline-block rounded-full bg-gray-400"></span> Average</span>
					<span className="flex items-center gap-1 text-blue-600"><span className="w-3 h-3 inline-block rounded-full bg-blue-600"></span> Your Score</span>
				</div>
			</div>

			{/* Subject Breakdown Card */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
				<div className="font-semibold text-gray-800 text-lg mb-1">Detailed Subject Breakdown</div>
				<div className="text-sm text-gray-500 mb-6">Your performance vs. average</div>
				<div className="space-y-6">
					{subjects.map((sub) => (
						<div key={sub.name}>
							<div className="flex justify-between items-center mb-1">
								<span className="font-semibold text-gray-800">{sub.name}</span>
								<span className="text-xs text-gray-500">Avg:</span>
								<span className="font-bold text-green-600 text-sm">{sub.avg}%</span>
							</div>
							<div className="flex items-center gap-2 mb-1">
								<span className="text-xs text-gray-400">↑ {sub.diff}% above average</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="flex-1 bg-gray-200 rounded h-3 relative">
									<div className="bg-gray-900 h-3 rounded absolute left-0 top-0" style={{ width: `${sub.avg}%` }}></div>
									<div className="bg-blue-600 h-3 rounded absolute left-0 top-0" style={{ width: `${sub.peer}%`, opacity: 0.5 }}></div>
								</div>
								<span className="text-xs text-gray-500">{sub.peer}%</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
