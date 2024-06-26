import { Email } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea, type TextareaProps } from "../src/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
};

export default meta;
type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: { label: "Textarea label" },
};

const ControlledInput = (props: TextareaProps) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Textarea
        {...props}
        label="Controlled Textarea"
        value={value}
        onValueChange={setValue}
      />
      <p className="text-foreground-secondary">Value: {value}</p>
    </div>
  );
};
export const Controlled = {
  render: ControlledInput,
};

export const HelperText: Story = {
  args: { label: "Username", helperText: "Please use a unique username" },
};

export const ErrorState: Story = {
  args: {
    label: "Username",
    helperText: "Please use a unique username",
    isInvalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Username",
  },
};

export const WithStartContent: Story = {
  args: {
    label: "Username",
    startContent: <span className="text-foreground-400">$</span>,
  },
};

export const WithEndContent: Story = {
  args: {
    label: "Username",
    endContent: <span className="text-foreground-400">%</span>,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Email",
    startContent: <Email />,
  },
};
