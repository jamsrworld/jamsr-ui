import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import type { FileError } from "react-dropzone";
import type {
  MultiFileUploadProps,
  MultiFileUploadState,
  SingleFileUploadProps,
} from "../src";
import { MultiFileUpload, SingleFileUpload } from "../src";

const meta: Meta<typeof SingleFileUpload> = {
  title: "Components/File Upload",
  component: SingleFileUpload,
};

export default meta;
type Story = StoryObj<typeof meta>;

const fileUrl =
  // "https://jamsrworld.com/assets/files/roi-nextjs-pages-master.zip-52635761687417717bc8a44ee-6aac-4d42-ab88-adf8ee1c48f1.zip";
  "https://cdn.jamsrworld.com/06-24-2024/avatar_1_1719214634268_71531560.jpg?w=3840&q=75";

const SingleFileTemplate = (props: Partial<SingleFileUploadProps>) => {
  const [value, setValue] = useState("");
  console.log("value:->", value);
  const onFileSelect = async (file: File) => {
    console.log("file:->", file);
    // let upload file
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 1000);
    });
    setValue(fileUrl);
  };

  const handleOnError = ({ message }: FileError) => {
    console.error("error:->", message);
  };

  return (
    <SingleFileUpload
      value={value}
      onValueChange={setValue}
      onFileSelect={onFileSelect}
      className="aspect-video h-40"
      onError={handleOnError}
      showDeleteBtn
      fileName="components-file-upload--single-file-nextjs-site.zip"
      fileSize={3473433}
      dropzoneOptions={{
        accept: {
          "file/*": [],
        },
      }}
      {...props}
    />
  );
};

const MultiFileTemplate = (props: Partial<MultiFileUploadProps>) => {
  const [files, setValue] = useState<MultiFileUploadState[]>([]);
  const images = files.filter((item) => item.progress === "COMPLETE");
  console.log("files:->", files);

  const onFilesSelect = async (files: MultiFileUploadState[]) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of files) {
      const { file, id } = item;

      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("");
        }, 1000);
      });

      setValue((value) =>
        value.map((item, idx) => {
          if (item.id === id)
            return {
              ...item,
              preview: fileUrl,
              progress: "COMPLETE",
            };
          return item;
        }),
      );
    }
  };

  const handleOnError = (error: string) => {
    console.error("error:->", error);
  };

  return (
    <MultiFileUpload
      value={files}
      onValueChange={setValue}
      onFilesSelect={onFilesSelect}
      classNames={{
        picker: "aspect-square h-20",
        fileView: "size-[200px]",
      }}
      onError={handleOnError}
      dropzoneOptions={{
        maxFiles: 4,
      }}
      {...props}
    />
  );
};

export const SingleFile: Story = {
  render: SingleFileTemplate,
};

export const WithInfo: Story = {
  render: () => (
    <SingleFileTemplate info="Images with fie size less than 5MB" />
  ),
};

export const HelperText: Story = {
  render: () => (
    <SingleFileTemplate
      info="Images with fie size less than 5MB"
      isInvalid
      helperText="File is required"
    />
  ),
};

export const Avatar: Story = {
  render: () => <SingleFileTemplate isAvatar className="aspect-square" />,
};

export const Disabled: Story = {
  render: () => (
    <div className="grid gap-4">
      <SingleFileTemplate isAvatar className="aspect-square" isDisabled />
      <SingleFileTemplate isDisabled />
    </div>
  ),
};

export const MultiFile = {
  render: MultiFileTemplate,
};

export const MultiFileDisabled: Story = {
  render: () => <MultiFileTemplate isDisabled />,
};

export const MultiHelperText: Story = {
  render: () => <MultiFileTemplate helperText="File is required" isInvalid />,
};

export const MultiWithInfo: Story = {
  render: () => (
    <MultiFileTemplate
      helperText="File is required"
      info="Choose or drag and drop files"
      classNames={{
        picker: "size-[400px]",
      }}
    />
  ),
};
