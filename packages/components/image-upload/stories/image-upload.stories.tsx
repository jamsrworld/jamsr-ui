import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import type {
  ImageUploadProps,
  MultiImageUploadProps,
  MultiUploadImgState,
} from "../src";
import { ImageUpload, MultiImageUpload } from "../src";

const meta: Meta<typeof ImageUpload> = {
  title: "Components/Image Upload",
  component: ImageUpload,
};

export default meta;
type Story = StoryObj<typeof meta>;

const fileUrl =
  "https://jamsrworld.com/assets/files/roi-nextjs-pages-master.zip-52635761687417717bc8a44ee-6aac-4d42-ab88-adf8ee1c48f1.zip";
// "https://cdn.jamsrworld.com/06-24-2024/avatar_1_1719214634268_71531560.jpg?w=3840&q=75";

const SingleImageTemplate = (props: Partial<ImageUploadProps>) => {
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

  const handleOnError = (error: string) => {
    console.error("error:->", error);
  };

  return (
    <ImageUpload
      value={value}
      onValueChange={setValue}
      onFileSelect={onFileSelect}
      className="aspect-video h-40"
      onError={handleOnError}
      showDeleteBtn
      fileName="components-image-upload--single-image-nextjs-site.zip"
      fileSize={3473433}
      dropzoneOptions={{
        accept: {
          "image/*": [],
        },
      }}
      {...props}
    />
  );
};

const MultiImageTemplate = (props: Partial<MultiImageUploadProps>) => {
  const [files, setValue] = useState<MultiUploadImgState[]>([]);
  const images = files.filter((item) => item.progress === "COMPLETE");
  console.log("images:->", images);

  const onFilesSelect = async (files: MultiUploadImgState[]) => {
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
    <MultiImageUpload
      {...props}
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
    />
  );
};

export const SingleImage: Story = {
  render: SingleImageTemplate,
};

export const Avatar: Story = {
  render: () => <SingleImageTemplate isAvatar className="aspect-square" />,
};

export const Disabled: Story = {
  render: () => (
    <div className="grid gap-4">
      <SingleImageTemplate isAvatar className="aspect-square" isDisabled />
      <SingleImageTemplate isDisabled />
    </div>
  ),
};

export const MultiImage = {
  render: MultiImageTemplate,
};

export const MultiImageDisabled: Story = {
  render: () => <MultiImageTemplate isDisabled />,
};
