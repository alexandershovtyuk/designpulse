// /core/ui/SprintSelector.tsx

import { useDashboard } from '../context/DashboardContext';

export const SprintSelector = () => {
  const { sprints, currentSprintId, setCurrentSprintId } = useDashboard();

  return (
    <select
      className="border rounded px-2 py-1 text-sm"
      value={currentSprintId}
      onChange={(e) => setCurrentSprintId(e.target.value)}
    >
      {sprints.map((s) => (
        <option key={s.id} value={s.id}>
          {s.name} ({s.startDate} — {s.endDate})
        </option>
      ))}
    </select>
  );
};
