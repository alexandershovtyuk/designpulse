import { Card, CardContent } from '@/core/ui/card';
import { ArrowRightCircle } from '@/lib/icons';


export function NextSprintRecommendation({ value }: { value: number }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start p-4 space-y-2">
        <div className="flex items-center space-x-2 text-muted-foreground text-sm uppercase tracking-wide">
          <ArrowRightCircle className="w-4 h-4" />
          <span>Next Sprint Plan</span>
        </div>
        <div className="text-3xl font-bold leading-tight">
          ▶ {value} SP
        </div>
        <p className="text-sm text-muted-foreground">
          Recommended scope based on avg. velocity
        </p>
      </CardContent>
    </Card>
  );
}
