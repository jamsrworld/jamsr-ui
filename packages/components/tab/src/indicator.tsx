import { m } from "framer-motion";
import { useTabsContext } from "./tabs-context";

export const TabIndicator = () => {
  const { getCursorProps } = useTabsContext();
  // @ts-expect-error framer type error
  return <m.div {...getCursorProps()} layoutId="indicator" />;
};
