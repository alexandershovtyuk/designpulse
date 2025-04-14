// /core/ui/SLAWidget.tsx

import { useDashboard } from '../context/DashboardContext';

export const SLAWidget = () => {
  const { sprints, currentSprintId, config } = useDashboard();
  const sprint = sprints.find((s) => s.id === currentSprintId);
  const tasks = sprint?.committedTasks || [];

  const rows = tasks.map((t) => {
    const inReview = t.statusHistory.find((s) => s.status === 'In Review');
    const done = t.statusHistory.find((s) => s.status === 'Done');
    const duration = inReview && done
      ? (new Date(done.enteredAt).getTime() - new Date(inReview.enteredAt).getTime()) / 3600000
      : null;
    return {
      key: t.key,
      summary: t.summary,
      withinSLA: duration !== null ? duration <= config.slaThresholdHours : null,
    };
  });

  const total = rows.filter(r => r.withinSLA !== null).length;
  const passed = rows.filter(r => r.withinSLA === true).length;
  const compliance = total > 0 ? Math.round((passed / total) * 100) : 0;

  return (
    <div className="bg-white border rounded p-4">
      <h3 className="font-semibold text-sm mb-2">SLA Compliance</h3>
      <div className="text-3xl font-bold text-green-600">{compliance}%</div>
      <p className="text-muted-foreground text-xs mt-1">
        Review → Done ≤ {config.slaThresholdHours}h<br/>
        {passed}/{total} tasks within SLA
      </p>
    </div>
  );
};