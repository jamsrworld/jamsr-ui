import { RHFCheckbox } from "./rhf-checkbox";
import { RHFField as RHFFieldRoot } from "./rhf-field";
import { RHFFieldError } from "./rhf-field-error";
import { RHFInput } from "./rhf-input";
import { RHFInputGroupInput } from "./rhf-input-group-input";
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
  NumberField: RHFNumberField,
  RadioGroup: RHFRadioGroup,
  Select: RHFSelect,
  OtpInput: RHFOtpInput,
  InputGroupInput: RHFInputGroupInput,
});

export namespace RHFField {
  export interface FieldError extends RHFFieldError.Props {}
}
