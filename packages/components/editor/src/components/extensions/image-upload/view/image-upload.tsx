import { type FileUploadSingleProps } from "@jamsr-ui/file-upload-single";
import type { Editor } from "@tiptap/react";
import { NodeViewWrapper } from "@tiptap/react";
import { useState } from "react";

export type ImageUploadProps = Omit<FileUploadSingleProps, "onFileSelect"> & {
  onFileSelect: (file: File) => Promise<{
    src: string;
    width: number;
    height: number;
    alt: string;
    placeholder?: string;
  }>;
};

export const ImageUploadComponent = ({
  getPos,
  editor,
  imageUploadProps,
}: {
  getPos: () => number;
  editor: Editor;
  imageUploadProps: ImageUploadProps;
}) => {
  const [value, setValue] = useState("");
  const onFileSelect = async (file: File) => {
    const data = await imageUploadProps.onFileSelect(file);
    //
    editor
      .chain()
      .focus()
      .setImage(data)
      .deleteRange({ from: getPos(), to: getPos() })
      .run();
  };

  return (
    // @ts-expect-error TypeError
    <NodeViewWrapper>
      <div className="m-0 p-0" data-drag-handle>
        {/* <FileUploadSingle
          className="max-h-[200px]"
          {...imageUploadProps}
          value={value}
          onValueChange={setValue}
          onFileSelect={onFileSelect}
          dropzoneOptions={{
            accept: {
              "image/*": [],
            },
          }}
        /> */}
      </div>
    </NodeViewWrapper>
  );
};
