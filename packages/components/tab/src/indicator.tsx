import { m } from "motion/react";
import { useTabsContext } from "./tabs-context";

export const TabIndicator = () => {
  const { getCursorProps } = useTabsContext();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return <m.div {...(getCursorProps as any)()} layoutId="indicator" />;
};
