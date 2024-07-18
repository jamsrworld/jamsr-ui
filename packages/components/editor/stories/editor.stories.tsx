/* eslint-disable react-hooks/rules-of-hooks */
import { type Meta, type StoryObj } from "@storybook/react";
import type { JSONContent } from "@tiptap/core";
import { useState } from "react";
import { Editor } from "../src";

const meta: Meta<typeof Editor> = {
  title: "Components/Editor",
  component: Editor,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<JSONContent>({});
    console.log("value:->", value);
    const [progress, setProgress] = useState(0);

    const handleFileSelect = async () => {
      const intervalId = setInterval(() => {
        setProgress((progress) => {
          const newProgress = Math.min(progress + 10, 100);
          if (newProgress === 100) {
            clearInterval(intervalId);
          }
          return newProgress;
        });
      }, 100);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("");
        }, 1000);
      });
      return {
        src: "https://jamsrworld.com/assets/images/users/Generation-mlm-software.png-55109851721120489b3f993cf-4514-42fd-92e7-20b26dfb09af.png",
        width: 300,
        height: 900,
        alt: "hii there",
        placeholder: "base64://34jlajsdflasjflj",
      };
    };

    return (
      <Editor
        value={value}
        onValueChange={setValue}
        extensionsProps={{
          imageUpload: {
            async onFileSelect(file) {
              return handleFileSelect();
            },
          },
        }}
      />
    );
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "A custom placeholder",
  },
};

export const helperText: Story = {
  args: {
    helperText: "This field is required",
  },
};

export const isInvalid: Story = {
  args: {
    helperText: "This field is required",
    isInvalid: true,
  },
};
