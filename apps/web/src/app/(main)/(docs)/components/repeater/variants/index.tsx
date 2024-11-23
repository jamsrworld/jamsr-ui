import { Repeater } from "@jamsr-ui/react";

export const RepeaterIndex = () => {
  return (
    <Repeater count={5}>
      {({ index, position }) => (
        <div key={index} className="p-2">
          I am repeated position:{position} index:{index}
        </div>
      )}
    </Repeater>
  );
};
