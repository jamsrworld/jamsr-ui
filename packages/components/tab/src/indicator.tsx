import { MotionDiv } from "@jamsr-ui/motion";
import { useTabsContext } from "./tabs-context";

export const TabIndicator = () => {
  const { getCursorProps } = useTabsContext();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return <MotionDiv {...(getCursorProps as any)()} layoutId="indicator" />;
};
