import { type Meta, type StoryObj } from "@storybook/react";
import { Editor } from "../src";

const meta: Meta<typeof Editor> = {
  title: "Components/Editor",
  component: Editor,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    extensionsProps: {
      imageUpload: {
        onFileSelect(file) {
          console.log(file);
          return "https://jamsrworld.com/assets/images/users/Generation-mlm-software.png-55109851721120489b3f993cf-4514-42fd-92e7-20b26dfb09af.png";
        },
      },
    },
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
