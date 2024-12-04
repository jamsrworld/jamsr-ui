import { Kbd } from "@jamsr-ui/react";

export const KdbKeys = () => {
  return (
    <div className="flex gap-4">
      <Kbd keys={["command"]}>K</Kbd>
      <Kbd keys={["command", "shift"]}>N</Kbd>
      <Kbd keys={["option", "command"]}>P</Kbd>
    </div>
  );
};
