import { TeamNav } from '@/core/ui/TeamNav';
import { LayoutSection } from "@/core/layout/LayoutSection";
import { SprintPredictability } from '@/core/ui/SprintPredictability';
import { NextSprintRecommendation } from '@/core/ui/NextSprintRecommendation';
import { VelocityChart } from '@/core/ui/VelocityChart';
import { CycleTimeWidget } from '@/core/ui/CycleTimeWidget';
import { mockSprints } from '@/mock/data';

const lastSprint = mockSprints[mockSprints.length - 1];
const previousSprints = mockSprints.slice(-4, -1);

const getCommittedSP = (sprint) =>
  sprint.committedTasks?.reduce((sum, t) => sum + (t.storyPoints || 0), 0) || 0;

const getCompletedSP = (sprint) =>
  sprint.completedTasks?.reduce((sum, t) => sum + (t.storyPoints || 0), 0) || 0;

const calculatePredictability = (sprint) => {
  const committed = getCommittedSP(sprint);
  const completed = getCompletedSP(sprint);
  return committed ? Math.round((completed / committed) * 100) : 0;
};

const getRollingVelocity = (sprints, count = 3) => {
  const completed = sprints.slice(-count).map(getCompletedSP);
  return Math.round(completed.reduce((a, b) => a + b, 0) / completed.length);
};

const predictability = calculatePredictability(lastSprint);
const suggestion = getRollingVelocity(previousSprints);

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
        </div>
      </LayoutSection>

      <LayoutSection title="SLA / Review">
        <CycleTimeWidget />
      </LayoutSection>
    </>
  );
}
