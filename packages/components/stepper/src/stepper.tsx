import { MinusIcon, PlusIcon } from "@jamsr-ui/shared-icons";
import {
  AnimatePresence,
  m,
  type MotionProps,
  type Variants,
} from "framer-motion";
import { useState } from "react";
import { useStepper, type UseStepperProps } from "./use-stepper";

export type StepperProps = UseStepperProps;

type Action = "increase" | "decrease";

export const Stepper = (props: StepperProps) => {
  const {
    Component,
    getBaseProps,
    getButtonProps,
    getValueProps,
    maxValue,
    minValue,
    setValue,
    value,
  } = useStepper(props);
  const [action, setAction] = useState<Action | null>(null);

  const handleIncrement = () => {
    if (value < maxValue) {
      setAction("increase");
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > minValue) {
      setAction("decrease");
      setValue(value - 1);
    }
  };

  const variants: Variants = {
    initial: (action: Action) => {
      return {
        y: action === "increase" ? 24 : -24,
      };
    },
    animate: {
      y: 0,
    },
    exit: (action: Action) => ({
      y: action === "increase" ? -24 : 24,
    }),
  };

  const valueProps: MotionProps = {
    variants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
  };

  const canIncrease = value < maxValue;
  const canDecrease = value > minValue;

  return (
    <Component {...getBaseProps()}>
      <button
        disabled={!canDecrease}
        type="button"
        onClick={handleDecrement}
        {...getButtonProps()}
      >
        <MinusIcon width={20} height={20} />
      </button>
      <AnimatePresence mode="popLayout" initial={false} custom={action}>
        {/* @ts-expect-error framer-error */}
        <m.div key={value} custom={action} {...getValueProps()} {...valueProps}>
          {value}
        </m.div>
      </AnimatePresence>
      <button
        disabled={!canIncrease}
        type="button"
        onClick={handleIncrement}
        {...getButtonProps()}
      >
        <PlusIcon width={20} height={20} />
      </button>
    </Component>
  );
};
