import { RHFCheckbox } from "./rhf-checkbox";
import { RHFCheckboxGroup } from "./rhf-checkbox-group";
import { RHFField as RHFFieldRoot } from "./rhf-field";
import { RHFFieldError } from "./rhf-field-error";
import { RHFInput } from "./rhf-input";
import { RHFInputGroupInput } from "./rhf-input-group-input";
import { RHFInputGroupTextArea } from "./rhf-input-group-textarea";
import { RHFNumberField } from "./rhf-number-field";
import { RHFOtpInput } from "./rhf-otp-input";
import { RHFRadioGroup } from "./rhf-radio-group";
import { RHFSelect } from "./rhf-select";
import { RHFSwitch } from "./rhf-switch";
import { RHFTextArea } from "./rhf-textarea";

export const RHFField = Object.assign(RHFFieldRoot, {
  Root: RHFFieldRoot,
  FieldError: RHFFieldError,
  Input: RHFInput,
  TextArea: RHFTextArea,
  Switch: RHFSwitch,
  Checkbox: RHFCheckbox,
  CheckboxGroup: RHFCheckboxGroup,
  NumberField: RHFNumberField,
  RadioGroup: RHFRadioGroup,
  Select: RHFSelect,
  OtpInput: RHFOtpInput,
  InputGroupTextArea: RHFInputGroupTextArea,
  InputGroupInput: RHFInputGroupInput,
});

export namespace RHFField {
  export interface FieldError extends RHFFieldError.Props {}
}
