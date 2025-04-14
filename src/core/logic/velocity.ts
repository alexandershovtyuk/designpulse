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
