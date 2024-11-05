import { Input } from "@jamsr-ui/react";

export const InputNumberOnly = () => {
  return (
    <div className="grid gap-4">
      <Input label="Amount" isNumberInput startContent="$" />
      <Input label="Percentage" isNumberInput endContent="%" />
      <Input
        label="Current Date"
        isNumberInput
        decimalPrecision={0}
        placeholder="Without decimal precision"
      />
    </div>
  );
};
