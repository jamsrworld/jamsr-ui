import { EmailIcon } from "@jamsrui/icons";
import { Field } from "jamsrui/field";
import { InputGroup } from "jamsrui/input-group";

export const InputWithIcon = () => {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <InputGroup.Input placeholder="Enter your email" type="email" />
      </InputGroup>
    </Field>
  );
};
