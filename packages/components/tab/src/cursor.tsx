import { m } from "framer-motion";
import { useTabsContext } from "./tabs-context";

export const Cursor = () => {
  const { getCursorProps } = useTabsContext();
  // @ts-expect-error framer type error
  return <m.div {...getCursorProps()} layoutId="activeTab" />;
};
