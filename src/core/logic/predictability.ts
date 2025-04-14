import { DesignTask } from '@/core/types';

export function calculateVelocity(tasks: DesignTask[]): number {
  return tasks.reduce((sum, t) => sum + (t.storyPoints || 0), 0);
}

export function calculatePredictability(
  committedTasks: DesignTask[],
  completedTasks: DesignTask[]
): number {
  const committed = calculateVelocity(committedTasks);
  const completed = calculateVelocity(completedTasks);
  return committed ? Math.round((completed / committed) * 100) : 0;
} 
