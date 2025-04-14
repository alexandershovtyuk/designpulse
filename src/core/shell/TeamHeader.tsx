// /core/shell/TeamHeader.tsx

import { SprintSelector } from '../ui/SprintSelector';

export const TeamHeader = () => (
  <header className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-2xl font-bold">DART FDS Team</h1>
      <p className="text-muted-foreground text-sm">Scrum • <SprintSelector /></p>
    </div>
  </header>
);
