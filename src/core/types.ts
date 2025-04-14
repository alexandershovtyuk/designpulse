// /core/types.ts

export type DesignTask = {
    key: string;
    summary: string;
    status: string;
    assignee: string;
    storyPoints?: number;
    epic?: string;
    created: string;
    updated: string;
    statusHistory: {
      status: string;
      enteredAt: string;
      leftAt?: string;
    }[];
  };
  
  export type Sprint = {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    goal?: string;
    committedTasks: DesignTask[];
    completedTasks: DesignTask[];
  };
  
  export type ProjectConfig = {
    teamType: 'scrum' | 'kanban';
    theme: 'light' | 'dark';
    language: 'ru';
    slaThresholdHours: number;
  };
  
  export type ProjectDebugConfig = {
    delay?: number;
    simulateError?: boolean;
    returnEmptyData?: boolean;
    lastUpdateTimestamp?: string;
  };
  