import type { SingleFileUploadProps } from "@jamsr-ui/file-upload";
import { SingleFileUpload } from "@jamsr-ui/file-upload";
import type { Editor } from "@tiptap/react";
import { NodeViewWrapper } from "@tiptap/react";
import { useState } from "react";

export const ImageUploadComponent = ({
  getPos,
  editor,
  fileUploadProps,
}: {
  getPos: () => number;
  editor: Editor;
  fileUploadProps: SingleFileUploadProps;
}) => {
  const [value, setValue] = useState("");

  const onFileSelect = async (file: File) => {
    const url = await fileUploadProps.onFileSelect(file);
    if (!url) {
      return;
    }

    setValue(url);
    //
    editor
      .chain()
      .focus()
      .setImage({ src: url })
      .deleteRange({ from: getPos(), to: getPos() })
      .run();
  };

  return (
    <NodeViewWrapper>
      <div className="m-0 p-0" data-drag-handle>
        <SingleFileUpload
          {...fileUploadProps}
          value={value}
          onValueChange={setValue}
          onFileSelect={onFileSelect}
        />
      </div>
    </NodeViewWrapper>
  );
};
