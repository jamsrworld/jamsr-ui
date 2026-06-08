import { EmailIcon } from "@jamsrui/icons";
import { InputGroup } from "jamsrui/input-group";
import { Field } from "jamsrui/field";
import { Textarea } from "jamsrui/textarea";

export const TextareaWithIcon = () => {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Textarea
          placeholder="Enter your email"
          className="w-full"
        />
      </InputGroup>
    </Field>
  );
};
