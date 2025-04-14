import { TeamNav } from '@/core/ui/TeamNav';
import { LayoutSection } from '@/core/layout/LayoutSection';
import { SprintPredictability } from '@/core/ui/SprintPredictability';
import { NextSprintRecommendation } from '@/core/ui/NextSprintRecommendation';
import { VelocityChart } from '@/core/ui/VelocityChart';
import { CycleTimeWidget } from '@/core/ui/CycleTimeWidget';
import { mockSprints } from '@/mock/data';
import { calculateVelocity, getRollingAverageVelocity } from '@/core/logic/velocity';

const lastSprint = mockSprints.at(-1);
const previousSprints = mockSprints.slice(-4, -1);

const getCommittedSP = (sprint) => calculateVelocity(sprint.committedTasks);
const getCompletedSP = (sprint) => calculateVelocity(sprint.completedTasks);

const calculatePredictability = (sprint) => {
  const committed = getCommittedSP(sprint);
  const completed = getCompletedSP(sprint);
  return committed ? Math.round((completed / committed) * 100) : 0;
};

const predictability = calculatePredictability(lastSprint);
const suggestion = getRollingAverageVelocity(previousSprints);

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
          <CycleTimeWidget value={3.8} />
        </div>
      </LayoutSection>
    </>
  );
}