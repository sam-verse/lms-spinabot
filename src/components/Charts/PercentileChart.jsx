import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', percentile: 75 },
  { week: 'Week 2', percentile: 78 },
  { week: 'Week 3', percentile: 82 },
  { week: 'Week 4', percentile: 86 },
  { week: 'Week 5', percentile: 90 },
  { week: 'Week 6', percentile: 92 },
];

const PercentileChart = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Percentile Progress</CardTitle>
        <CardDescription>Your percentile rank over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 6 }}>
            {/* use explicit colors so chart renders consistently */}
            <CartesianGrid strokeDasharray="8 6" stroke="#E5E7EB" />
            <XAxis dataKey="week" stroke="#6B7280" tick={{ fill: '#6B7280', fontSize: 14 }} />
            <YAxis stroke="#6B7280" ticks={[0,25,50,75,100]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            />
            <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 1 }} />
            <Bar 
              dataKey="percentile" 
              fill="#8B5CF6" 
              radius={[6, 6, 0, 0]} 
              name="Percentile"
              barSize={42}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PercentileChart;
