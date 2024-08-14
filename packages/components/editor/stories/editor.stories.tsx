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
        src: "https://cdn.jamsrworld.com/08-10-2024/9618420164849061594cf598a-4370-4a39-a7cf-4b01e75ba089.jpg-17465301660373000303984b3-79eb-4ee9-be9d-fb9efc4bafeb-1723279953883-41662329.jpg",
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
