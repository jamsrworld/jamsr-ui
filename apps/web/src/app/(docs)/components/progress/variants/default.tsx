import { CircularProgress, LinearProgress } from "@jamsr-ui/react";

export const CircularProgressDefault = () => {
  return <CircularProgress />;
};

export const CircularProgressValue = () => {
  return <CircularProgress value={50} />;
};

export const LinearProgressDefault = () => {
  return <LinearProgress isIntermediate />;
};
