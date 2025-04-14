import { Card, CardContent } from '@/core/ui/primitives/card';
import { Clock } from '@/lib/icons';

export const CycleTimeWidget = () => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-start p-4 space-y-2">
        <div className="flex items-center space-x-2 text-muted-foreground text-sm uppercase tracking-wide">
          <Clock className="w-4 h-4" />
          <span>Cycle Time</span>
        </div>
        <div className="text-3xl font-bold leading-tight">
          ⏱ 3.8 days
        </div>
        <p className="text-sm text-muted-foreground">
          Avg. time in development cycle
        </p>
      </CardContent>
    </Card>
  );
};