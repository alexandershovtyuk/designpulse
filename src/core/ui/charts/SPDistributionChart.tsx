import { Card, CardContent } from '@/core/ui/primitives/card';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Sprint, Task } from '@/core/types';

interface SPDistributionChartProps {
  sprints: Sprint[];
}

const sizeCategories = [
  { label: 'XS', range: [1, 1], color: '#93c5fd' },     // blue-300
  { label: 'S', range: [2, 2], color: '#38bdf8' },      // sky-400
  { label: 'M', range: [3, 5], color: '#34d399' },      // emerald-400
  { label: 'L', range: [8, 8], color: '#facc15' },      // yellow-400
  { label: 'XL', range: [13, 100], color: '#f472b6' }   // pink-400
];

export const SPDistributionChart = ({
  sprints,
}: SPDistributionChartProps) => {
  const allTasks: Task[] = sprints.flatMap((s) => [...s.committedTasks, ...s.completedTasks]);

  const distribution = sizeCategories.map(({ label, range, color }) => {
    const totalSP = allTasks
      .filter((t) => t.storyPoints && t.storyPoints >= range[0] && t.storyPoints <= range[1])
      .reduce((sum, t) => sum + (t.storyPoints || 0), 0);
    return { label, value: totalSP, color };
  });

  const total = distribution.reduce((sum, d) => sum + d.value, 0);

  const chartData = [
    distribution.reduce((acc, item) => {
      acc[item.label] = item.value;
      return acc;
    }, {} as Record<string, number>),
  ];

  return (
    <Card className="w-full">
      <CardContent className="p-4 space-y-6">
        <h3 className="font-semibold text-sm">Story Point Distribution (3 months)</h3>

        {/* Horizontal Stacked Bar Chart */}
        <ResponsiveContainer width="100%" height={48}>
          <BarChart layout="vertical" data={chartData}>
            <XAxis type="number" domain={[0, total]} hide />
            <YAxis type="category" dataKey="label" hide />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || !payload[0]) return null;
                const p = payload[0].payload;
                return (
                  <div className="bg-white p-3 shadow-md rounded text-sm w-52">
                    {distribution.map((d) => (
                      <div key={d.label} className="text-gray-700">
                        {d.label}: {p[d.label]} SP
                      </div>
                    ))}
                  </div>
                );
              }}
            />
            {sizeCategories.map((cat) => (
              <Bar
                key={cat.label}
                dataKey={cat.label}
                stackId="a"
                fill={cat.color}
                radius={[4, 4, 4, 4]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Tooltip
              formatter={(value: number, name: string) => {
                const percent = ((value as number) / total * 100).toFixed(1);
                return [`${value} SP (${percent}%)`, name];
              }}
            />
            <Pie
              data={distribution}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={70}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {distribution.map((entry) => (
                <Cell key={entry.label} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
