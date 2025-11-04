import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { week: 'Week 1', average: 68, yourScore: 70 },
  { week: 'Week 2', average: 72, yourScore: 76 },
  { week: 'Week 3', average: 79, yourScore: 84 },
  { week: 'Week 4', average: 83, yourScore: 88 },
  { week: 'Week 5', average: 87, yourScore: 94 },
  { week: 'Week 6', average: 90, yourScore: 98 },
];

const PerformanceChart = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Performance Trend</CardTitle>
        <CardDescription>Your average score over time</CardDescription>
      </CardHeader>
      <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                {/* explicit colors instead of CSS vars to ensure lines render even when theme vars are absent */}
                <CartesianGrid strokeDasharray="8 6" stroke="#E5E7EB" />
                <XAxis dataKey="week" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                {/* legend moved below chart for better spacing */}
            <Line
              type="monotone"
              dataKey="average"
              stroke="#B0B7C3"
              strokeWidth={3}
              strokeDasharray="8 6"
              dot={false}
              name="Average Score"
            />
            <Line
              type="monotone"
              dataKey="yourScore"
              stroke="#388BFF"
              strokeWidth={2}
              dot={{ r: 5, stroke: '#388BFF', fill: '#fff', strokeWidth: 2 }}
              name="Your Score"
            >
              {/* show numeric value above each point to match reference */}
              <LabelList dataKey="yourScore" position="top" formatter={(val) => val} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
            {/* Custom legend placed outside the chart to control spacing */}
            <div className="flex justify-center gap-7 pb-2">
              <div className="flex items-center gap-2 text-gray-400 text-base">
                                <img src="/analytics/marker2.svg" alt="marker" className="h-4 w-4" />

                <span>Average Score</span>
              </div>
              <div className="flex items-center gap-2 text-blue-500 text-base">
               <img src="/analytics/marker.svg" alt="marker" className="h-4 w-4" />
                <span>Your Score</span>
              </div>
            </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
