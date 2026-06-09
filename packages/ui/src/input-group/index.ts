import {
  InputGroup as InputGroupRoot,
  InputGroupInput,
  InputGroupPrefix,
  InputGroupSuffix,
  InputGroupTextArea,
} from "./input-group";

import type { Input, TextArea } from "@jamsrui/react";

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
  export interface Input extends Input.Props {}
  export interface TextArea extends TextArea.Props {}
}
