"use client";

import { Stepper } from "@jamsr-ui/react";
import { useState } from "react";

export const StepperEvents = () => {
  const [lastEvent, setLastEvent] = useState("no-event");
  return (
    <div>
      <Stepper
        onIncrease={() => setLastEvent("onIncrease")}
        onDecrease={() => setLastEvent("onDecrease")}
      />
      <div className="text-xs text-foreground-secondary">
        Last Event: {lastEvent}
      </div>
    </div>
  );
};
