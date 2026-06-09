"use client";

import { TextArea } from "@jamsrui/textarea";

export const InputGroupTextArea = (props: InputGroupTextArea.Props) => {
  return <TextArea {...props} />;
};

export namespace InputGroupTextArea {
  export interface Props extends TextArea.Props {}
}
