import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { Field } from "jamsrui/field";

export const InputPrefixSuffix = () => {
  return (
    <div className="space-y-4">
      <Field>
        <Field.Label>Amount</Field.Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input />
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Discount</Field.Label>
        <InputGroup variant="solid">
          <InputGroup.Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Website</Field.Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
