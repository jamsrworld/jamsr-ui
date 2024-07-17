/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Node, ReactNodeViewRenderer } from "@tiptap/react";
import { ImageUploadComponent } from "./view/image-upload";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    imageUpload: {
      setImageUpload: () => ReturnType;
    };
  }
}

export const ImageUpload = Node.create({
  name: "imageUpload",
  isolating: true,
  defining: true,
  group: "block",
  draggable: true,
  selectable: true,
  inline: false,
  parseHTML() {
    return [
      {
        tag: `div[data-type="${this.name}"]`,
      },
    ];
  },
  renderHTML() {
    return ["div", { "data-type": this.name }];
  },
  addCommands() {
    return {
      setImageUpload:
        () =>
        ({ commands }) =>
          commands.insertContent(`<div data-type="${this.name}"></div>`),
    };
  },
  addNodeView() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ReactNodeViewRenderer((e: any) => {
      return (
        <ImageUploadComponent
          fileUploadProps={e.extension.options?.props}
          editor={e.editor}
          getPos={e.getPos}
        />
      );
    });
  },
});
