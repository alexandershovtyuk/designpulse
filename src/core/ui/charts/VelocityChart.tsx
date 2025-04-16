import { Card, CardContent } from '@/core/ui/primitives/card';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend
} from 'recharts';
import { Sprint } from '@/core/types';

interface VelocityChartProps {
  sprints: Sprint[];
  rollingVelocity: number;
  rollingPredictability: number;
}

export const VelocityChart = ({
  sprints,
  rollingVelocity,
  rollingPredictability
}: VelocityChartProps) => {
  const maxY = Math.max(
    ...sprints.map((s) => {
      const committed = s.committedTasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);
      const completed = s.completedTasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);
      return Math.max(committed, completed);
    })
  );

  const predictabilityY = Math.round((rollingPredictability / 100) * maxY);

  const data = sprints.map((sprint) => {
    const committed = sprint.committedTasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);
    const completed = sprint.completedTasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);
    const predictabilityPercent = committed > 0 ? Math.round((completed / committed) * 100) : 0;
    return {
      name: sprint.name,
      committed,
      completed,
      velocity: completed,
      predictabilityPercent
    };
  });

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-2">Velocity per Sprint</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barGap={4}>
            <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis fontSize={10} allowDecimals={false} tickLine={false} axisLine={false} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || !payload[0]) return null;
                const p = payload[0].payload;
                return (
                  <div className="bg-white p-3 shadow-md rounded text-sm w-56">
                    <div className="font-medium text-black mb-1">{p.name}</div>
                    <div className="text-gray-700">Committed: {p.committed} SP</div>
                    <div className="text-gray-700">Completed: {p.completed} SP</div>
                    <div className="text-gray-700">Velocity: {p.velocity} SP</div>
                    <div className="text-gray-700">Predictability: {p.predictabilityPercent}%</div>
                  </div>
                );
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={32}
              payload={[
                {
                  value: 'Committed SP',
                  type: 'square',
                  color: '#9ca3af',
                },
                {
                  value: 'Completed SP',
                  type: 'square',
                  color: '#6366f1',
                },
                {
                  value: 'Velocity avg (3)',
                  type: 'line',
                  color: '#60a5fa',
                },
                {
                  value: 'Predictability avg (3)',
                  type: 'line',
                  color: '#a78bfa',
                }
              ]}
            />
            <Bar
              dataKey="committed"
              fill="#e5e7eb"
              name="Committed SP"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="completed"
              fill="#6366f1"
              name="Completed SP"
              radius={[4, 4, 0, 0]}
            />
            <ReferenceLine
              y={rollingVelocity}
              stroke="#60a5fa"
              strokeDasharray="4 4"
              strokeWidth={1}
              ifOverflow="extendDomain"
            />
            <ReferenceLine
              y={predictabilityY}
              stroke="#a78bfa"
              strokeDasharray="4 4"
              strokeWidth={1}
              ifOverflow="extendDomain"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
