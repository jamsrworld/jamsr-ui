import { Field } from "jamsrui/field";
import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";

export const InputDisabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field disabled>
        <Field.Label>Enter your name</Field.Label>
        <Input />
      </Field>
      <Field disabled>
        <Field.Label>Enter your name</Field.Label>
        <InputGroup>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
