import { type EditorProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    editor?: Partial<EditorProps>;
  }
}
