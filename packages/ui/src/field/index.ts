import {
  FieldContent,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from "./field";

export const Field = Object.assign(FieldRoot, {
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
  Label: FieldLabel,
  Content: FieldContent,
});

export namespace Field {
  export type Props = FieldRoot.Props;
  export type Variants = {
    orientation?: "vertical" | "horizontal";
  };
}
