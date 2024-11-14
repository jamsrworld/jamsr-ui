import { Repeater } from "@jamsr-ui/react";

export const RepeaterDefault = () => {
  return (
    <Repeater count={5}>
      <div className="p-2">I am repeated</div>
    </Repeater>
  );
};
