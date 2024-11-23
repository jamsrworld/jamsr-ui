/* eslint-disable @typescript-eslint/no-use-before-define */
import { useKeyPress } from "@jamsr-ui/hooks";
import { MinusIcon, PlusIcon } from "@jamsr-ui/shared-icons";
import { useStepper, type UseStepperProps } from "./use-stepper";

export type StepperProps = UseStepperProps;

const ARROW_KEYS = {
  ArrowDown: "ArrowDown",
  ArrowUp: "ArrowUp",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
};

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
    onIncrease,
    onDecrease,
  } = useStepper(props);

  const canIncrease = value < maxValue;
  const canDecrease = value > minValue;

  const handleIncrement = () => {
    if (canIncrease) {
      onIncrease?.();
      setValue(value + 1);
    }
  };
  const handleDecrement = () => {
    if (canDecrease) {
      onDecrease?.();
      setValue(value - 1);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === ARROW_KEYS.ArrowDown) handleDecrement();
    if (e.key === ARROW_KEYS.ArrowUp) handleIncrement();
    const nextElement =
      document.activeElement === decreaseRef.current
        ? increaseRef.current
        : decreaseRef.current;
    if (e.key === ARROW_KEYS.ArrowLeft) {
      nextElement?.focus();
    }
    if (e.key === ARROW_KEYS.ArrowRight) {
      nextElement?.focus();
    }
  };

  const keys = Object.values(ARROW_KEYS);
  const { ref: decreaseRef } = useKeyPress<HTMLButtonElement>(
    keys,
    handleKeyPress,
  );
  const { ref: increaseRef } = useKeyPress<HTMLButtonElement>(
    keys,
    handleKeyPress,
  );
  return (
    <Component {...getBaseProps()}>
      <button
        data-disabled={!canDecrease}
        aria-disabled={!canDecrease}
        type="button"
        onClick={handleDecrement}
        ref={decreaseRef}
        {...getButtonProps()}
      >
        <MinusIcon width={20} height={20} />
      </button>
      <div {...getValueProps()}>{value}</div>
      <button
        data-disabled={!canIncrease}
        aria-disabled={!canIncrease}
        type="button"
        onClick={handleIncrement}
        ref={increaseRef}
        {...getButtonProps()}
      >
        <PlusIcon width={20} height={20} />
      </button>
    </Component>
  );
};
