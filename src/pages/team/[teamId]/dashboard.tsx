import { TeamNav } from '@/core/ui/layout/TeamNav';
import { LayoutSection } from '@/core/layout/LayoutSection';
import { SprintPredictabilityWidget } from '@/core/ui/widgets/SprintPredictabilityWidget';
import { NextSprintRecommendationWidget } from '@/core/ui/widgets/NextSprintRecommendationWidget';
import { VelocityChart } from '@/core/ui/charts/VelocityChart';
import { SPDistributionChart } from '@/core/ui/charts/SPDistributionChart';
import { CycleTimeWidget } from '@/core/ui/widgets/CycleTimeWidget';
import { mockSprints } from '@/mock/data';
import {
  getRollingAverageVelocity,
  getRollingPredictability
} from '@/core/logic/velocity';
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
const rollingVelocity = getRollingAverageVelocity(mockSprints);
const rollingPredictability = getRollingPredictability(mockSprints);

export default function Dashboard() {
  return (
    <>
      <div class="container mx-auto">
        
        <nav class="py-10 flex">
          <img src="/dplogo.png" class="w-12 h-12 flex-none mr-5" alt="Design Pulse" className="h-6" />
          <TeamNav />
        </nav>
        <LayoutSection title="Velocity & Predictability">
          <div className="space-y-4">
            <VelocityChart
              sprints={mockSprints}
              rollingVelocity={rollingVelocity}
              rollingPredictability={rollingPredictability}
            />
            {/* <SPDistributionChart sprints={mockSprints} /> */}
          </div>
          <div className="space-y-4">
            <SprintPredictabilityWidget percentage={predictability} />
            <NextSprintRecommendationWidget value={suggestion} />
            <CycleTimeWidget value={cycleTime} />
          </div>
        </LayoutSection>
      </div>
    </>
  );
}
