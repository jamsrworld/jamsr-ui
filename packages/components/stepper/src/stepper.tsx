import { MinusIcon, PlusIcon } from "@jamsr-ui/shared-icons";
import { m, MotionProps } from "framer-motion";
import { useStepper, type UseStepperProps } from "./use-stepper";

export type StepperProps = UseStepperProps;
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

  const handleIncrement = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > minValue) {
      setValue(value - 1);
    }
  };

  const valueProps: MotionProps = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0",
    },
    exit: {
      y: "100%",
    },
  };

  return (
    <Component {...getBaseProps()}>
      <button type="button" onClick={handleDecrement} {...getButtonProps()}>
        <MinusIcon width={20} height={20} />
      </button>
      <m.div key={value} {...getValueProps()} {...valueProps}>
        {value}
      </m.div>
      <button type="button" onClick={handleIncrement} {...getButtonProps()}>
        <PlusIcon width={20} height={20} />
      </button>
    </Component>
  );
};
