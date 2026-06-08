import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxRadius = () => {
  const radiusExamples = [
    { value: "none", label: "None" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "full", label: "Full" },
  ] as { value: Checkbox.Props["radius"]; label: string }[];

  return (
    <div className="grid gap-4">
      {radiusExamples.map((item) => (
        <Field
          key={item.value}
          orientation="horizontal"
        >
          <Checkbox radius={item.value} />
          <Field.Label>{item.label}</Field.Label>
        </Field>
      ))}
    </div>
  );
};
