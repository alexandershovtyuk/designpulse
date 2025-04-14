import { TeamNav } from '@/core/ui/TeamNav';
import { LayoutSection } from '@/core/layout/LayoutSection';
import { SprintPredictability } from '@/core/ui/SprintPredictability';
import { NextSprintRecommendation } from '@/core/ui/NextSprintRecommendation';
import { VelocityChart } from '@/core/ui/VelocityChart';
import { CycleTimeWidget } from '@/core/ui/CycleTimeWidget';
import { mockSprints } from '@/mock/data';
import { calculatePredictability } from '@/core/logic/predictability';
import { getNextSprintRecommendation } from '@/core/logic/recommendation';
import { averageCycleTime } from '@/core/logic/cycle-time';

const lastSprint = mockSprints.at(-1);
const previousSprints = mockSprints.slice(-4, -1);

const predictability = calculatePredictability(
  lastSprint.committedTasks,
  lastSprint.completedTasks
);

const suggestion = getNextSprintRecommendation(previousSprints);
const cycleTime = averageCycleTime(lastSprint.completedTasks);

export default function Dashboard() {
  return (
    <>
      <TeamNav />

      <LayoutSection title="Velocity & Predictability">
        <div className="space-y-4">
          <VelocityChart />
        </div>

        <div className="space-y-4">
          <SprintPredictability percentage={predictability} />
          <NextSprintRecommendation value={suggestion} />
          <CycleTimeWidget value={cycleTime} />
        </div>
      </LayoutSection>
    </>
  );
}
