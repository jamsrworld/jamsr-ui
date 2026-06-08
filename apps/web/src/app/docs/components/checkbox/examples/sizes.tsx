import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxSizes = () => {
  const checkboxExamples = [
    {
      size: "sm",
      label: "Agree to terms",
      description: "Smallest option for compact layouts.",
    },
    {
      size: "md",
      label: "Receive newsletters",
      description: "Standard size for general use.",
    },
    {
      size: "lg",
      label: "Enable notifications",
      description: "Larger size for better visibility.",
    },
  ] as const;
  return (
    <div className="flex flex-col gap-4">
      {checkboxExamples.map((item) => (
        <Field
          key={item.size}
          orientation="horizontal"
        >
          <Checkbox size={item.size} />
          <Field.Content>
            <Field.Label>{item.label}</Field.Label>
            <Field.Description>{item.description}</Field.Description>
          </Field.Content>
        </Field>
      ))}
    </div>
  );
};
