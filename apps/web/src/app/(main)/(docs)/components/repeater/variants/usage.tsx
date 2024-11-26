import { Repeater } from "@jamsr-ui/react";

export const RepeaterUsage = () => {
  return (
    <Repeater repeat={5}>
      <div className="p-2">I am repeated</div>
    </Repeater>
  );
};
