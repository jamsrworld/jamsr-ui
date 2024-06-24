import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { ImageUpload, ImageUploadProps } from "../src";

const meta = {
  title: "Components/Image Upload",
  component: ImageUpload,
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

const fileUrl =
  "https://cdn.jamsrworld.com/06-24-2024/avatar_1_1719214634268_71531560.jpg?w=3840&q=75";

const Template = (props: ImageUploadProps) => {
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
        base:"border-error"
      }}
    />
  );
};

export const SingleImage = {
  render: Template,
};
