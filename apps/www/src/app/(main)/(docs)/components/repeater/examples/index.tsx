"use client";

import { Repeater } from "@jamsr-ui/react";

export const RepeaterIndex = () => {
  return (
    <Repeater repeat={5}>
      {({ index, position }) => (
        <div key={index} className="p-2">
          I am repeated position:{position} index:{index}
        </div>
      )}
    </Repeater>
  );
};
