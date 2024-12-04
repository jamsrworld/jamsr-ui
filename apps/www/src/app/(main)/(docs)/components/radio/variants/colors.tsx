import { Radio, RadioGroup, type RadioProps } from "@jamsr-ui/react";

export const RadioColors = () => {
  const colors: RadioProps["color"][] = [
    "default",
    "danger",
    "primary",
    "secondary",
    "success",
    "warning",
  ];
  return (
    <RadioGroup label="Colors" name="color">
      {colors.map((color) => (
        <Radio
          key={color}
          color={color}
          name="color"
          value={color}
          className="capitalize"
        >
          {color}
        </Radio>
      ))}
    </RadioGroup>
  );
};
