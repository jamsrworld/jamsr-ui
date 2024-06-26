import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  ImageUpload,
  MultiImageUpload,
  type ImageUploadProps,
  type MultiUploadImgState,
} from "../src";

const meta: Meta<typeof ImageUpload> = {
  title: "Components/Image Upload",
  component: ImageUpload,
};

export default meta;
type Story = StoryObj<typeof meta>;

const fileUrl =
  "https://cdn.jamsrworld.com/06-24-2024/avatar_1_1719214634268_71531560.jpg?w=3840&q=75";

const SingleImageTemplate = (props: ImageUploadProps) => {
  const [value, setValue] = useState("");
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

  const handleOnError = (error: string) => {
    console.error("error:->", error);
  };

  return (
    <ImageUpload
      {...props}
      value={value}
      onValueChange={setValue}
      onFileSelect={onFileSelect}
      className="aspect-video h-40"
      onError={handleOnError}
      showDeleteBtn
      classNames={{
        base: "border-error",
      }}
    />
  );
};

const MultiImageTemplate = (props: ImageUploadProps) => {
  const [files, setValue] = useState<MultiUploadImgState[]>([]);
  const images = files.filter((item) => item.progress === "COMPLETE");
  console.log("images:->", images);

  const onFilesSelect = async (files: MultiUploadImgState[]) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of files) {
      const { file, id } = item;

      //  upload file
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
    <MultiImageUpload
      {...props}
      value={files}
      onValueChange={setValue}
      onFilesSelect={onFilesSelect}
      className="aspect-square h-20"
      onError={handleOnError}
      dropzoneOptions={{
        maxFiles: 4,
      }}
    />
  );
};

export const SingleImage: Story = {
  render: SingleImageTemplate,
};

export const MultiImage: Story = {
  render: MultiImageTemplate,
};
