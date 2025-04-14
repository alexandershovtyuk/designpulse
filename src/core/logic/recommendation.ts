import { Sprint } from '@/core/types';
import { calculateVelocity } from '@/core/logic/velocity';

export function getNextSprintRecommendation(sprints: Sprint[], windowSize = 3): number {
  const recent = sprints.slice(-windowSize);
  const completedVelocities = recent.map((s) => calculateVelocity(s.completedTasks));
  const total = completedVelocities.reduce((a, b) => a + b, 0);

  return completedVelocities.length > 0
    ? Math.round(total / completedVelocities.length)
    : 0;
}
