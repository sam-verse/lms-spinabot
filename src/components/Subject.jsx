
import React from "react";
import { User, Users, TrendingUp, Award } from "lucide-react";

const metrics = [
	{
		label: "Average Score",
		rows: [
			{
				label: "You",
				icon: <User size={18} className="text-[#0b71ff]" />,
				value: 75,
				bar: { color: "#0b1221", width: 75 },
				valueClass: "text-gray-900",
			},
			{
				label: "Average Peer",
				icon: <Users size={18} className="text-[#b1cdfd]" />,
				value: 67,
				bar: { color: "#0b1221", width: 67 },
				valueClass: "text-gray-900",
			},
			{
				label: "Top Performers",
				icon: (
					<Award size={18} className="text-[#ffb300]" />
				
				),
				value: 92,
				bar: { color: "#0b1221", width: 92 },
				valueClass: "text-[#ffa600]",
			},
		],
	},
	{
		label: "Tests Completed",
		rows: [
			{
				label: "You",
				icon: <User size={18} className="text-[#0b71ff]" />,
				value: 47,
				bar: { color: "#0b1221", width: 47 },
				valueClass: "text-gray-900",
			},
			{
				label: "Average Peer",
				icon: <Users size={18} className="text-[#b1cdfd]" />,
				value: 33,
				bar: { color: "#0b1221", width: 33 },
				valueClass: "text-gray-900",
			},
			{
				label: "Top Performers",
				icon: (
										<Award size={18} className="text-[#ffb300]" />

				),
				value: 85,
				bar: { color: "#0b1221", width: 85 },
				valueClass: "text-[#ffa600]",
			},
		],
	},
	{
		label: "Study Hours",
		rows: [
			{
				label: "You",
				icon: <User size={18} className="text-[#0b71ff]" />,
				value: 156,
				bar: { color: "#0b1221", width: 65 },
				valueClass: "text-gray-900",
			},
			{
				label: "Average Peer",
				icon: <Users size={18} className="text-[#b1cdfd]" />,
				value: 128,
				bar: { color: "#0b1221", width: 45 },
				valueClass: "text-gray-900",
			},
			{
				label: "Top Performers",
				icon: (
										<Award size={18} className="text-[#ffb300]" />

				),
				value: 245,
				bar: { color: "#0b1221", width: 98 },
				valueClass: "text-[#ffa600]",
			},
		],
	},
	{
		label: "Avg. Percentile",
		rows: [
			{
				label: "You",
				icon: <User size={18} className="text-[#0b71ff]" />,
				value: 88,
				bar: { color: "#0b1221", width: 88 },
				valueClass: "text-gray-900",
			},
			{
				label: "Average Peer",
				icon: <Users size={18} className="text-[#b1cdfd]" />,
				value: 72,
				bar: { color: "#0b1221", width: 72 },
				valueClass: "text-gray-900",
			},
			{
				label: "Top Performers",
				icon: (
					<Award size={18} className="text-[#ffb300]" />
				),
				value: 98,
				bar: { color: "#0b1221", width: 98 },
				valueClass: "text-[#ffa600]",
			},
		],
	},
];

export default function Subject() {
		return (
			<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-6xl mx-auto">
				<div className="font-semibold text-gray-800 text-lg mb-1">Cohort Comparison</div>
				<div className="text-sm text-gray-500 mb-6">How you compare with your peers and top performers</div>
				{metrics.map((metric) => (
					<div className="mb-8" key={metric.label}>
						<div className="font-medium text-gray-700 mb-2">{metric.label}</div>
						<div className="space-y-3">
							{metric.rows.map((row) => (
								<div className="flex flex-col gap-1" key={row.label}>
									<div className="flex items-center gap-2 mb-1">
										{row.icon}
										<div className="text-sm font-medium text-gray-700">{row.label}</div>
									</div>
									<div className="flex items-center gap-2">
															<div
																className={`rounded-full h-3 w-full border border-gray-200 ${row.label === 'You' ? 'bg-[#e3f0ff]' : row.label === 'Top Performers' ? 'bg-[#fff8e1]' : row.label === 'Average Peer' ? 'bg-gray-200' : 'bg-white'}`}
															>
																										<div
																											className="h-3 rounded-full"
																											style={{ width: `${row.label === 'Top Performers' ? 100 : row.bar.width}%`, background: row.bar.color }}
																										/>
															</div>
										<span className={`font-semibold ml-2 ${row.valueClass}`}>{row.value}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
				{/* Performance Insight */}
				<div className="mt-8">
									 <div
										 className="rounded-lg p-4 shadow-sm border"
										 style={{
											 background: 'linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 100%)',
											 borderColor: '#BEDBFF',
										 }}
									 >
						<div className="flex items-start gap-4">
							<TrendingUp size={25} className="text-blue-500" />
							<div className="text-sm text-slate-700">
								<div className="font-semibold text-slate-900 mb-1">Performance Insight</div>
								<div>
									You're performing <span className="font-bold text-green-600">11% better</span> than the average peer and are in the <span className="font-bold text-blue-600">top 12%</span> of all test takers. Keep pushing to reach the top performers' level!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
