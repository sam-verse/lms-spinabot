import React from "react";

export default function Subject() {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto">
			<div className="font-semibold text-gray-800 text-lg mb-1">Cohort Comparison</div>
			<div className="text-sm text-gray-500 mb-6">How you compare with your peers and top performers</div>
			{/* Metric: Average Score */}
			<div className="mb-6">
				<div className="font-medium text-gray-700 mb-2">Average Score</div>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-blue-600 text-lg">&#128104;&#8205;&#127891;</span>
						<span className="text-gray-700 w-32">You</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-blue-600 h-3 rounded" style={{width:'75%'}}></div>
						</div>
						<span className="font-bold text-gray-700">75</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-gray-500 text-lg">&#128104;&#8205;&#128188;</span>
						<span className="text-gray-700 w-32">Average Peer</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-gray-500 h-3 rounded" style={{width:'67%'}}></div>
						</div>
						<span className="font-bold text-gray-700">67</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-yellow-500 text-lg">&#127942;</span>
						<span className="text-gray-700 w-32">Top Performers</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-yellow-400 h-3 rounded" style={{width:'92%'}}></div>
						</div>
						<span className="font-bold text-gray-700">92</span>
					</div>
				</div>
			</div>
			{/* Metric: Tests Completed */}
			<div className="mb-6">
				<div className="font-medium text-gray-700 mb-2">Tests Completed</div>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-blue-600 text-lg">&#128104;&#8205;&#127891;</span>
						<span className="text-gray-700 w-32">You</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-blue-200 h-3 rounded" style={{width:'47%'}}></div>
						</div>
						<span className="font-bold text-gray-700">47</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-gray-500 text-lg">&#128104;&#8205;&#128188;</span>
						<span className="text-gray-700 w-32">Average Peer</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-gray-400 h-3 rounded" style={{width:'33%'}}></div>
						</div>
						<span className="font-bold text-gray-700">33</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-yellow-500 text-lg">&#127942;</span>
						<span className="text-gray-700 w-32">Top Performers</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-yellow-400 h-3 rounded" style={{width:'85%'}}></div>
						</div>
						<span className="font-bold text-gray-700">85</span>
					</div>
				</div>
			</div>
			{/* Metric: Study Hours */}
			<div className="mb-6">
				<div className="font-medium text-gray-700 mb-2">Study Hours</div>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-blue-600 text-lg">&#128104;&#8205;&#127891;</span>
						<span className="text-gray-700 w-32">You</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-blue-200 h-3 rounded" style={{width:'65%'}}></div>
						</div>
						<span className="font-bold text-gray-700">156</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-gray-500 text-lg">&#128104;&#8205;&#128188;</span>
						<span className="text-gray-700 w-32">Average Peer</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-gray-400 h-3 rounded" style={{width:'45%'}}></div>
						</div>
						<span className="font-bold text-gray-700">128</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-yellow-500 text-lg">&#127942;</span>
						<span className="text-gray-700 w-32">Top Performers</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-yellow-400 h-3 rounded" style={{width:'98%'}}></div>
						</div>
						<span className="font-bold text-gray-700">245</span>
					</div>
				</div>
			</div>
			{/* Metric: Avg. Percentile */}
			<div className="mb-6">
				<div className="font-medium text-gray-700 mb-2">Avg. Percentile</div>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-blue-600 text-lg">&#128104;&#8205;&#127891;</span>
						<span className="text-gray-700 w-32">You</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-blue-600 h-3 rounded" style={{width:'88%'}}></div>
						</div>
						<span className="font-bold text-gray-700">88</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-gray-500 text-lg">&#128104;&#8205;&#128188;</span>
						<span className="text-gray-700 w-32">Average Peer</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-gray-500 h-3 rounded" style={{width:'72%'}}></div>
						</div>
						<span className="font-bold text-gray-700">72</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-yellow-500 text-lg">&#127942;</span>
						<span className="text-gray-700 w-32">Top Performers</span>
						<div className="flex-1 mx-2 bg-gray-200 rounded h-3 relative">
							<div className="bg-yellow-400 h-3 rounded" style={{width:'98%'}}></div>
						</div>
						<span className="font-bold text-gray-700">98</span>
					</div>
				</div>
			</div>
			{/* Performance Insight */}
			<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8 flex items-center gap-3">
				<span className="text-blue-500 text-xl">&#128200;</span>
				<div className="text-sm text-blue-700">
					<span className="font-semibold">Performance Insight</span><br />
					You're performing <span className="font-bold text-blue-600">11% better</span> than the average peer and are in the <span className="font-bold text-purple-600">top 12%</span> of all test takers. Keep pushing to reach the top performers' level!
				</div>
			</div>
		</div>
	);
}
