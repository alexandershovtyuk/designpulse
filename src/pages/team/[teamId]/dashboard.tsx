import { TeamNav } from '@/core/ui/layout/TeamNav';
import { LayoutSection } from '@/core/layout/LayoutSection';
import { SprintPredictabilityWidget } from '@/core/ui/widgets/SprintPredictabilityWidget';
import { NextSprintRecommendationWidget } from '@/core/ui/widgets/NextSprintRecommendationWidget';
import { VelocityChart } from '@/core/ui/charts/VelocityChart';
import { CycleTimeWidget } from '@/core/ui/widgets/CycleTimeWidget';
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
          <SprintPredictabilityWidget percentage={predictability} />
          <NextSprintRecommendationWidget value={suggestion} />
          <CycleTimeWidget value={cycleTime} />
        </div>
      </LayoutSection>
    </>
  );
}
