import { m } from "framer-motion";
import { useTabsContext } from "./tabs-context";

export const Cursor = () => {
  const { getCursorProps } = useTabsContext();
  return (
    //  @ts-expect-error type error
    <m.div {...getCursorProps()} layoutId="activeTab" />
  );
};
