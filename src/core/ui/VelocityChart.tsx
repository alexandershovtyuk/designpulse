import React from 'react';
import { Card, CardContent } from '@/core/ui/card';
import { useDashboard } from '@/core/context/DashboardContext';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LabelList,
} from 'recharts';

export const VelocityChart = () => {
  const { sprints, currentSprintId } = useDashboard();

  const now = new Date();
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - 3);

  const recentSprints = sprints
    .filter((s) => {
      if (!s.startDate) return false;
      const start = new Date(s.startDate);
      return start >= cutoff;
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  const data = recentSprints.map((s, i, arr) => {
    const committed = s.committedTasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);
    const completed = s.completedTasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);

    const window = arr.slice(Math.max(0, i - 2), i + 1);
    const rollingAvgVelocity =
      window.reduce((sum, sprint) => {
        return sum + sprint.completedTasks.reduce((s, t) => s + (t.storyPoints || 0), 0);
      }, 0) / window.length;

    const predictability = committed > 0 ? Math.round((completed / committed) * 1000) / 10 : null;

    const name = s.name;

    const period =
      new Date(s.startDate).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }) +
      ' • ' +
      (s.endDate
        ? new Date(s.endDate).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })
        : 'TBD');

    return {
      id: s.id,
      name,
      period,
      committed,
      completed,
      rollingAvgVelocity: Math.round(rollingAvgVelocity * 10) / 10,
      predictability,
      isCurrent: s.id === currentSprintId,
    };
  });

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-2">Velocity per Sprint (Last 3 Months)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barGap={8}>
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} allowDecimals={false} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || !payload[0]) return null;
                const p = payload[0].payload;
                return (
                  <div className="bg-white p-3 shadow-md rounded text-sm w-56">
                    <div className="font-medium text-black mb-1">{p.name}</div>
                    <div className="text-gray-500 mb-1">{p.period}</div>
                    <div className="text-gray-700">Committed: {p.committed} SP</div>
                    <div className="text-gray-700">Completed: {p.completed} SP</div>
                    <div className="text-gray-700">Velocity avg (3): {p.rollingAvgVelocity}</div>
                    {p.predictability !== null && (
                      <div className="text-gray-700">Predictability avg (3): {p.predictability}%</div>
                    )}
                  </div>
                );
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar
              dataKey="committed"
              fill="#cbd5e1"
              name="Committed SP"
              radius={[4, 4, 0, 0]}
              className="transition-all"
            >
              <LabelList dataKey="committed" position="top" fontSize={10} fill="#64748b" />
            </Bar>
            <Bar
              dataKey="completed"
              fill="#3b82f6"
              name="Completed SP"
              radius={[4, 4, 0, 0]}
              className="transition-all"
            >
              <LabelList dataKey="completed" position="top" fontSize={10} fill="#1e40af" />
            </Bar>
            <Line
              type="monotone"
              dataKey="rollingAvgVelocity"
              stroke="#94a3b8"
              strokeDasharray="4 4"
              dot={false}
              name="Velocity avg (3)"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
