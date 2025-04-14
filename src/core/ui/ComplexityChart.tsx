// /core/ui/ComplexityChart.tsx

import React from 'react';
import { useDashboard } from '../context/DashboardContext';

export const ComplexityChart = () => {
  const { sprints, currentSprintId } = useDashboard();
  const sprint = sprints.find((s) => s.id === currentSprintId);
  const tasks = sprint?.committedTasks || [];

  const groups = [1, 2, 3, 5, 8, 13].map((sp) => {
    const total = tasks.filter((t) => t.storyPoints === sp).length;
    const completed = tasks.filter((t) => t.storyPoints === sp && t.status === 'Done').length;
    return { sp, total, completed };
  });

  return (
    <div className="bg-white border rounded p-4">
      <h3 className="font-semibold text-sm mb-2">Complexity Distribution</h3>
      <ul className="text-sm text-muted-foreground space-y-1">
        {groups.map((g) => (
          <li key={g.sp}>
            <span className="text-xs font-mono text-blue-600">SP {g.sp}</span>: {g.completed}/{g.total} completed
          </li>
        ))}
      </ul>
    </div>
  );
};
