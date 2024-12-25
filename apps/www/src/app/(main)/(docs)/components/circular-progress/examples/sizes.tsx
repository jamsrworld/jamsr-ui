import { CircularProgress } from "@jamsr-ui/react";

export const CircularProgressSizes = () => {
  return (
    <div className="flex flex-col gap-6">
      <CircularProgress size={30} />
      <CircularProgress size={60} color="success" strokeWidth={6} />
      <CircularProgress size={90} color="secondary" strokeWidth={10} />
    </div>
  );
};
