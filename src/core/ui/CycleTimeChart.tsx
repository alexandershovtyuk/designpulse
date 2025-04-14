// /core/ui/CycleTimeChart.tsx

import { useDashboard } from '../context/DashboardContext';

export const CycleTimeChart = () => {
  const { sprints, currentSprintId } = useDashboard();
  const sprint = sprints.find((s) => s.id === currentSprintId);
  const tasks = sprint?.committedTasks || [];

  const rows = tasks.map((t) => {
    const inProgress = t.statusHistory.find((s) => s.status === 'In Progress');
    const done = t.statusHistory.find((s) => s.status === 'Done');
    const duration = inProgress && done
      ? (new Date(done.enteredAt).getTime() - new Date(inProgress.enteredAt).getTime()) / 3600000
      : 0;
    return {
      key: t.key,
      summary: t.summary,
      duration: Math.round(duration),
    };
  });

  return (
    <div className="bg-white border rounded p-4">
      <h3 className="font-semibold text-sm mb-2">Cycle Time (In Progress → Done)</h3>
      <ul className="text-sm text-muted-foreground space-y-1">
        {rows.map((r) => (
          <li key={r.key}>
            <span className="text-blue-600 font-mono text-xs mr-2">{r.key}</span>
            {r.summary} — <strong>{r.duration}h</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
