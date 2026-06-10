"use client";

import { CloseIcon } from "@/icons";
import { Description } from "ui/description";
import { Field } from "ui/field";
import { IconButton } from "ui/icon-button";
import { InputGroup } from "ui/input-group";
import { useState } from "react";
import { type Input } from "ui/input";

export const InputControlled = (props: Input.Variants) => {
  const [value, setValue] = useState("");
  const onClear = () => setValue("");
  const hasValue = value.length > 0;
  return (
    <div>
      <Field className="max-w-62 w-full">
        <Field.Label>Name</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Input
            value={value}
            onValueChange={setValue}
          />
          {hasValue && (
            <InputGroup.Suffix>
              <IconButton
                variant="light"
                radius="full"
                size="sm"
                label="Clear"
                onClick={onClear}
              >
                <CloseIcon className="size-4 text-foreground-secondary" />
              </IconButton>
            </InputGroup.Suffix>
          )}
        </InputGroup>
        <Description>Your name is: {value}</Description>
      </Field>
    </div>
  );
};
