import { LinearProgress } from "jamsrui/linear-progress";

export const LinearProgressUsage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <LinearProgress />
      <LinearProgress
        progress={20}
        color="warning"
      />
      <LinearProgress
        progress={80}
        color="error"
      />
    </div>
  );
};
