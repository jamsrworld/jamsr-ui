import { type EditorProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    editor?: Partial<EditorProps>;
  }
}
