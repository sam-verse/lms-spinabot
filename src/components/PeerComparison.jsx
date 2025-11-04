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
			// stronger grey fill for the 'Average' polygon (increased opacity)
			backgroundColor: "rgba(156, 163, 175, 0.17)",
			borderColor: "#909294ff",
			pointBackgroundColor: "#9ca3af",
			pointBorderColor: "#ffffff",
			borderWidth: 2,
			pointRadius: 4,
			pointHoverRadius: 6,
			fill: true,
		},
		{
			label: "Your Score",
			data: [85, 78, 92, 68, 75],
			// stronger blue fill and slightly stronger border for 'Your Score' (increased opacity)
			backgroundColor: "#3b83f68e",
			borderColor: "#3B82F6",
			pointBackgroundColor: "#3B82F6",
			pointBorderColor: "#ffffff",
			borderWidth: 3,
			pointRadius: 5,
			pointHoverRadius: 7,
			fill: true,
		},
	],
};

const radarOptions = {
	responsive: true,
	// allow the chart to expand inside its container
	maintainAspectRatio: false,
	plugins: {
		// disable built-in legend because we render a custom legend below the chart
		legend: {
			display: false,
		},
		tooltip: {
			// subtle tooltip styling
			backgroundColor: "rgba(17,24,39,0.95)",
			titleColor: "#fff",
			bodyColor: "#e5e7eb",
		},
	},
	scales: {
		r: {
			angleLines: { color: "#e5e7eb" },
			grid: { color: "#e5e7eb" },
			// axis labels (the subject names)
			pointLabels: { color: "#6b7280", font: { size: 13 } },
			min: 0,
			max: 100,
			ticks: {
				stepSize: 25,
				color: "#9ca3af",
				// show the tick labels (0/25/50/75/100) but subtle
				backdropColor: "transparent",
				font: { size: 11 },
			},
		},
	},
	elements: {
		point: {
			// default point size (dataset overrides apply per-dataset)
			radius: 3,
		},
		line: {
			// smoothness of the radar lines (0 = straight)
			tension: 0.15,
		},
	},
	layout: {
		padding: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
};

const subjects = [
	// swapped so `avg` is the lower benchmark and `peer` is the higher student score
	{ name: "History", avg: 70, peer: 85 },
	{ name: "Geography", avg: 72, peer: 78 },
	{ name: "Polity", avg: 75, peer: 92 },
	{ name: "Economy", avg: 65, peer: 68 },
	{ name: "Science", avg: 68, peer: 75 },
];

export default function PeerComparison() {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-18">
			{/* Radar Chart Card */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
				<div className="font-semibold text-gray-800 text-lg mb-1">Subject-wise Performance</div>
				<div className="text-sm text-gray-500 mb-6">Comprehensive analysis across subjects</div>
				<div className="w-full flex items-center justify-center" style={{ minHeight: 400, height: 400 }}>
					<Radar data={radarData} options={radarOptions} />
				</div>
				<div className="flex gap-6 justify-center text-xs mt-4">
					<span className="flex items-center gap-1 text-gray-400"><span className="w-3 h-3 inline-block  bg-gray-400"></span> Average</span>
					<span className="flex items-center gap-1 text-[#3B82F6]"><span className="w-3 h-3 inline-block  bg-blue-600"></span> Your Score</span>
				</div>
			</div>

			{/* Subject Breakdown Card (styled to match reference design) */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
				<div className="font-semibold text-gray-800 text-lg mb-1">Detailed Subject Breakdown</div>
				<div className="text-sm text-gray-500 mb-6">Your performance vs. average</div>

				<div className="space-y-5">
					{subjects.map((sub) => (
						<div key={sub.name}>
							{/* header: subject name + avg stack + student pill */}
							<div className="flex items-center justify-between mb-1">
								<div className="font-semibold text-gray-800">{sub.name}</div>

								<div className="flex items-center gap-3">
									<div className="text-right text-[11px] text-gray-500 leading-tight">
										<div className="text-gray-500">Avg:</div>
										<div className="font-semibold text-[13px] text-black">{sub.avg}%</div>
									</div>

									<div className="ml-2 inline-flex items-center justify-center bg-[#ECFDF5] text-[#16A34A] rounded-full px-3 py-1 text-sm font-semibold">
										{sub.peer}%
									</div>
								</div>
							</div>

							{/* progress bar with student fill and avg marker */}
							<div className="relative h-3 rounded-full bg-gray-200 overflow-visible">
								{/* show increase/decrease percentage under the bar */}
								{/* compute difference inline and render arrow + text */}

								{/* student score fill (dark) */}
								<div
									className="absolute left-0 top-0 h-3 rounded-full"
									style={{ width: `${sub.peer}%`, background: '#05040A' }}
								/>

								{/* crisp avg marker: thin white line with subtle border */}
								<div
									className="absolute top-0 flex items-center"
									style={{ left: `${sub.avg}%`, transform: 'translateX(-50%)' }}
								>
									<div className="w-px h-3 bg-white border border-gray-300 rounded-sm" />
								</div>
							</div>

							<div className="text-xs text-gray-400 mt-1">
								{sub.peer > sub.avg
									? `↑ ${sub.peer - sub.avg}% above average`
									: sub.peer < sub.avg
									? `↓ ${sub.avg - sub.peer}% below average`
									: `No change`}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
