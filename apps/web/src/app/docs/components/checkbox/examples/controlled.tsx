"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";
import { useState } from "react";

export const CheckboxControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Checkbox
        checked={isChecked}
        onCheckedChange={setIsChecked}
      />
      <Field.Label>
        {isChecked
          ? "I agree to receive marketing emails"
          : "Agree to receive marketing emails"}
      </Field.Label>
    </Field>
  );
};
