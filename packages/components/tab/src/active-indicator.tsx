import { m } from "framer-motion";

export const ActiveIndicator = () => {
  return (
    <m.div
      className="absolute inset-0 -z-1 size-full rounded-inherit bg-content3"
      layoutId="activeTab"
    />
  );
};
