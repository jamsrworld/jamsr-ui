import { Input } from "@jamsr-ui/react";

export const InputNumberOnly = () => {
  return (
    <div className="grid gap-4">
      <Input label="Amount" isNumberInput startContent="$" />
      <Input label="Percentage" isNumberInput endContent="%" />
      <Input
        label="With decimal"
        isNumberInput
        decimalPrecision={0}
        placeholder="With decimal precision"
      />
      <Input
        label="Custom decimal precision"
        isNumberInput
        // Change value here to see the difference
        decimalPrecision={4}
        placeholder="Custom decimal precision"
      />
    </div>
  );
};
