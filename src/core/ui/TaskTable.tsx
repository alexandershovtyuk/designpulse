// /core/ui/TaskTable.tsx

import { useDashboard } from '../context/DashboardContext';

export const TaskTable = () => {
  const { sprints, currentSprintId } = useDashboard();
  const sprint = sprints.find((s) => s.id === currentSprintId);
  const tasks = sprint?.committedTasks || [];

  return (
    <div className="bg-white border rounded p-4">
      <h3 className="font-semibold text-sm mb-2">Tasks</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-1 px-2">Key</th>
            <th className="py-1 px-2">Summary</th>
            <th className="py-1 px-2">Assignee</th>
            <th className="py-1 px-2">Status</th>
            <th className="py-1 px-2 text-right">SP</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.key} className="border-b last:border-0">
              <td className="py-1 px-2 font-mono text-xs text-blue-600">{t.key}</td>
              <td className="py-1 px-2">{t.summary}</td>
              <td className="py-1 px-2 text-muted-foreground">{t.assignee}</td>
              <td className="py-1 px-2">{t.status}</td>
              <td className="py-1 px-2 text-right">{t.storyPoints ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
