"use client";

import { Button, LinearProgress } from "@jamsr-ui/react";
import { MinusIcon, PlusIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";

export const LinearProgressControlled = () => {
  const [value, setValue] = useState(0);
  const OnIncrease = () => setValue(value + 10);
  const OnDecrease = () => setValue(value - 10);
  const CanIncrease = value < 100;
  const CanDecrease = value > 0;
  return (
    <div className="flex items-center gap-4">
      <Button isDisabled={!CanDecrease} onClick={OnDecrease} isIconOnly>
        <MinusIcon />
      </Button>
      <LinearProgress progress={value} />
      <Button isDisabled={!CanIncrease} onClick={OnIncrease} isIconOnly>
        <PlusIcon />
      </Button>
    </div>
  );
};
