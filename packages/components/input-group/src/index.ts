import { InputGroup as InputGroupBase } from "./input-group";
import {
  InputGroupContext,
  useInputGroupContext,
  useInputGroupContextOpt,
} from "./input-group-context";
import { InputGroupInput } from "./input-group-input";
import { InputGroupPrefix } from "./input-group-prefix";
import { InputGroupSuffix } from "./input-group-suffix";
import { InputGroupTextArea } from "./input-group-textarea";

export { InputGroupContext, useInputGroupContext, useInputGroupContextOpt };

export const InputGroup = Object.assign(InputGroupBase, {
  Root: InputGroupBase,
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
  Input: InputGroupInput,
  TextArea: InputGroupTextArea,
});

export namespace InputGroup {
  export interface Props extends InputGroupBase.Props {}
  export interface Prefix extends InputGroupPrefix.Props {}
  export interface Suffix extends InputGroupSuffix.Props {}
  export interface Input extends InputGroupInput.Props {}
  export interface TextArea extends InputGroupTextArea.Props {}
}
