import { Sprint, DesignTask } from '@/core/types';

export function calculateVelocity(tasks: DesignTask[]): number {
  return tasks.reduce((sum, task) => sum + (task.storyPoints || 0), 0);
}

export function getRollingAverageVelocity(sprints: Sprint[], windowSize = 3): number {
  const recent = sprints.slice(-windowSize);
  const velocities = recent.map((sprint) => calculateVelocity(sprint.completedTasks));
  const total = velocities.reduce((a, b) => a + b, 0);

  return velocities.length > 0
    ? Math.round((total / velocities.length) * 10) / 10
    : 0;
}

export function getRollingPredictability(sprints: Sprint[]): number {
  const last3 = sprints.slice(-3);
  const values = last3.map((sprint) => {
    const committed = sprint.committedTasks.reduce((sum, t) => sum + t.storyPoints, 0);
    const completed = sprint.completedTasks.reduce((sum, t) => sum + t.storyPoints, 0);
    return committed > 0 ? completed / committed : 0;
  });
  const average = values.reduce((sum, p) => sum + p, 0) / values.length;
  return Math.round(average * 100);
}
