import { Card, CardContent } from '@/core/ui/primitives/card';
import { ArrowRightCircle } from '@/lib/icons';

export function SprintPredictabilityWidget({ percentage }: { percentage: number }) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-start p-4 space-y-2">
        <div className="flex items-center space-x-2 text-muted-foreground text-sm uppercase tracking-wide">
          <ArrowRightCircle className="w-4 h-4" />
          <span>Predictability</span>
        </div>
        <div className="text-4xl font-bold leading-tight">
          {percentage}%
        </div>
        <p className="text-sm text-muted-foreground">
          Avg. planned vs. complete match
        </p>
      </CardContent>
    </Card>
  );
}
