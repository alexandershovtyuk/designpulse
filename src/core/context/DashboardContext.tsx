// /core/context/DashboardContext.tsx

import React from 'react';
import { createContext, useContext, useState } from 'react';
import type { Sprint, ProjectConfig, ProjectDebugConfig } from '@/core/types';
import { mockSprints } from '@/mock/data';

export const DashboardContext = createContext<{
  sprints: Sprint[];
  currentSprintId: string;
  setCurrentSprintId: (id: string) => void;
  config: ProjectConfig;
  debug: ProjectDebugConfig;
}>({
  sprints: [],
  currentSprintId: '',
  setCurrentSprintId: () => {},
  config: {
    teamType: 'scrum',
    theme: 'light',
    language: 'ru',
    slaThresholdHours: 72,
  },
  debug: {
    delay: 2000,
    simulateError: false,
    returnEmptyData: false,
    lastUpdateTimestamp: new Date().toISOString(),
  },
});

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSprintId, setCurrentSprintId] = useState('s1');

  return (
    <DashboardContext.Provider
      value={{
        sprints: mockSprints,
        currentSprintId,
        setCurrentSprintId,
        config: {
          teamType: 'scrum',
          theme: 'light',
          language: 'ru',
          slaThresholdHours: 72,
        },
        debug: {
          delay: 1000,
          simulateError: false,
          returnEmptyData: false,
          lastUpdateTimestamp: new Date().toISOString(),
        },
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
