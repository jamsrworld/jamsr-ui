import "@tiptap/core";

declare module "@tiptap/core" {
  export interface Commands<ReturnType> {
    image: {
      setImage: (options: {
        url: string;
        alt?: string;
        placeholder?: string;
        width?: string | undefined;
        height?: string | undefined;
      }) => ReturnType;
    };
  }
}
