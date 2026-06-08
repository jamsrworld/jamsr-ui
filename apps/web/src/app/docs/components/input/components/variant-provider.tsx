"use client";

import { Field } from "jamsrui/field";
import { Input } from "jamsrui/input";
import { Select } from "jamsrui/select";
import { useState } from "react";

const variantItems: Record<NonNullable<Input.Variants["variant"]>, string> = {
  solid: "Solid",
  bordered: "Bordered",
};

const sizeItems: Record<NonNullable<Input.Variants["size"]>, string> = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
};

const radiusItems: Record<NonNullable<Input.Variants["radius"]>, string> = {
  none: "None",
  sm: "Small",
  md: "Medium",
  lg: "Large",
  full: "Full",
};

export const InputVariantProvider = (props: {
  children: (variant: Input.Variants) => React.ReactNode;
}) => {
  const [variant, setVariant] = useState<Input.Variants["variant"]>("solid");
  const handleOnChangeVariant = (value: Input.Variants["variant"] | null) => {
    if (value) setVariant(value);
  };

  const [size, setSize] = useState<Input.Variants["size"]>("md");
  const handleOnChangeSize = (value: Input.Variants["size"] | null) => {
    if (value) setSize(value);
  };

  const [radius, setRadius] = useState<Input.Variants["radius"]>("md");
  const handleOnChangeRadius = (value: Input.Variants["radius"] | null) => {
    if (value) setRadius(value);
  };

  return (
    <div className="grid grid-cols-4 size-full grow">
      <div className="col-span-3 flex justify-center items-center">
        {props.children({
          variant,
          size,
          radius,
        })}
      </div>
      <div className="col-span-1 ps-4 h-full border-l border-border flex flex-col gap-4 items-center ">
        <Field className="w-full">
          <Field.Label>Variant</Field.Label>
          <Select
            size="sm"
            items={variantItems}
            value={variant}
            onValueChange={handleOnChangeVariant}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="bordered">Bordered</Select.Item>
              <Select.Item value="solid">Solid</Select.Item>
            </Select.Content>
          </Select>
        </Field>

        <Field className="w-full">
          <Field.Label>Size</Field.Label>
          <Select
            size="sm"
            items={sizeItems}
            value={size}
            onValueChange={handleOnChangeSize}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="sm">Small</Select.Item>
              <Select.Item value="md">Medium</Select.Item>
              <Select.Item value="lg">Large</Select.Item>
            </Select.Content>
          </Select>
        </Field>

        <Field className="w-full">
          <Field.Label>Radius</Field.Label>
          <Select
            size="sm"
            items={radiusItems}
            value={radius}
            onValueChange={handleOnChangeRadius}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="none">None</Select.Item>
              <Select.Item value="sm">Small</Select.Item>
              <Select.Item value="md">Medium</Select.Item>
              <Select.Item value="lg">Large</Select.Item>
              <Select.Item value="full">Full</Select.Item>
            </Select.Content>
          </Select>
        </Field>
      </div>
    </div>
  );
};
