"use client";

import { CloseIcon } from "@jamsrui/icons";
import { Description } from "jamsrui/description";
import { Field } from "jamsrui/field";
import { IconButton } from "jamsrui/icon-button";
import { InputGroup } from "jamsrui/input-group";
import { useState } from "react";

export const InputControlled = () => {
  const [value, setValue] = useState("");
  const onClear = () => setValue("");
  const hasValue = value.length > 0;
  return (
    <Field className="max-w-62 w-full">
      <Field.Label>Name</Field.Label>
      <InputGroup>
        <InputGroup.Input value={value} onValueChange={setValue} />
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
  );
};
