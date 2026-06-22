import {
  InputGroup as InputGroupRoot,
  InputGroupInput,
  InputGroupPrefix,
  InputGroupSuffix,
  InputGroupTextArea,
} from "./input-group";

import type { Input as LocalInput } from "../input";
import type { TextArea as LocalTextArea } from "../textarea";

export const InputGroup = Object.assign(InputGroupRoot, {
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
  Input: InputGroupInput,
  TextArea: InputGroupTextArea,
});

export namespace InputGroup {
  export interface Props extends InputGroupRoot.Props {}
  export interface Prefix extends InputGroupPrefix.Props {}
  export interface Suffix extends InputGroupSuffix.Props {}
  export interface Input extends LocalInput.Props {}
  export interface TextArea extends LocalTextArea.Props {}
}
