import { DesignTask } from '@/core/types';

export function calculateCycleTime(task: DesignTask): number | null {
  const inProgress = task.statusHistory.find(s => s.status === 'In Progress');
  const done = task.statusHistory.find(s => s.status === 'Done');

  if (!inProgress || !done) return null;

  const start = new Date(inProgress.timestamp);
  const end = new Date(done.timestamp);

  return (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
}

export function averageCycleTime(tasks: DesignTask[]): number {
  const durations = tasks
    .map(calculateCycleTime)
    .filter((d): d is number => d !== null);

  if (durations.length === 0) return 0;
  const total = durations.reduce((a, b) => a + b, 0);
  return Math.round((total / durations.length) * 10) / 10;
}
