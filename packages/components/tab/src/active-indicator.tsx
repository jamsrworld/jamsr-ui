import { m } from "framer-motion";

export const ActiveIndicator = () => {
  return (
    // @ts-ignore
    <m.div
      data-slot="indicator"
      className="-z-1 rounded-inherit bg-content3 absolute inset-0 size-full"
      layoutId="activeTab"
    />
  );
};
