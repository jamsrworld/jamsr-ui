"use client";

import { MinusIcon, PlusIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { LinearProgress } from "jamsrui/linear-progress";
import { useState } from "react";

export const LinearProgressControlled = (props: LinearProgress.Props) => {
  const [value, setValue] = useState(10);
  const OnIncrease = () => setValue(value + 10);
  const OnDecrease = () => setValue(value - 10);
  const CanIncrease = value < 100;
  const CanDecrease = value > 0;
  return (
    <div className="flex w-full items-center gap-4">
      <IconButton
        label="Decrease"
        disabled={!CanDecrease}
        onClick={OnDecrease}
      >
        <MinusIcon />
      </IconButton>
      <LinearProgress
        isIntermediate={false}
        progress={value}
        {...props}
      />
      <IconButton
        label="Increase"
        disabled={!CanIncrease}
        onClick={OnIncrease}
      >
        <PlusIcon />
      </IconButton>
    </div>
  );
};
