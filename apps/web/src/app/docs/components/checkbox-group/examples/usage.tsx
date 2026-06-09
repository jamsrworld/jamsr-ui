"use client";

import { Checkbox, CheckboxGroup } from "ui/checkbox";
import { Field } from "ui/field";
import { Text } from "ui/text";
import React, { useId, useState } from "react";

export const CheckboxGroupUsage = (
  props: React.ComponentProps<typeof CheckboxGroup>,
) => {
  const [value, setValue] = useState<string[]>([]);
  const id = useId();
  return (
    <div>
      <CheckboxGroup
        aria-labelledby={id}
        value={value}
        onValueChange={setValue}
        {...props}
      >
        <label id={id}>How would you like to be notified?</label>
        <Field orientation="horizontal">
          <Checkbox
            name="notifications"
            value="email"
          />
          <Field.Content>
            <Field.Label>Email</Field.Label>
            <Field.Description>
              Get notified by email about new messages and updates.
            </Field.Description>
          </Field.Content>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            name="notifications"
            value="sms"
          />
          <Field.Content>
            <Field.Label>SMS</Field.Label>
            <Field.Description>
              Get notified by SMS about new messages and updates.
            </Field.Description>
          </Field.Content>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            name="notifications"
            value="push"
          />
          <Field.Content>
            <Field.Label>Push</Field.Label>
            <Field.Description>
              Get notified by push notifications about new messages and updates.
            </Field.Description>
          </Field.Content>
        </Field>
      </CheckboxGroup>

      <Text
        className="text-foreground-tertiary mt-5"
        variant="caption"
      >
        You selected: {value.join(", ")}
      </Text>
    </div>
  );
};
