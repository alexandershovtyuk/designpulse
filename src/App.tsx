import Dashboard from './pages/team/[teamId]/dashboard';
import { DashboardProvider } from '@/core/context/DashboardContext';
import { mockSprints } from '@/mock/data';

export default function App() {
  return (
    <DashboardProvider sprints={mockSprints} currentSprintId={mockSprints.at(-1)?.id}>
      <Dashboard />
    </DashboardProvider>
  );
}
