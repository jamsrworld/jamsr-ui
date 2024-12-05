import { LinearProgress } from "@jamsr-ui/linear-progress";
import { Repeater } from "@jamsr-ui/repeater";
import { Skeleton } from "@jamsr-ui/skeleton";
import { TableCell, TableRow } from "@jamsr-ui/table";

export const LoadingSkeleton = ({ linear }: { linear?: boolean }) => {
  return (
    <TableRow>
      <TableCell
        className="pointer-events-none !bg-transparent p-0"
        colSpan={100}
        aria-label="Loading..."
      >
        <div className="relative w-full">
          {linear ? (
            <LinearProgress isIntermediate />
          ) : (
            <div className="gap-1">
              <Repeater repeat={6}>
                <Skeleton className="h-12 w-full" />
              </Repeater>
            </div>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};
