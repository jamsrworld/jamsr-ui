import { Field } from "jamsrui/field";
import { Textarea } from "jamsrui/textarea";

export const TextareaVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Field.Label>Bordered</Field.Label>
        <Textarea
          size="sm"
          variant="bordered"
        />
      </Field>
      <Field>
        <Field.Label>Solid</Field.Label>
        <Textarea
          size="md"
          variant="solid"
        />
      </Field>
    </div>
  );
};
