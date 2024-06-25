import { Button } from "@jamsr-ui/button";
import { Email } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input, type InputProps } from "../src/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: { label: "Input Label" },
};

const ControlledInput = (props: InputProps) => {
  const [value, setValue] = useState("");
  return (
    <Input
      {...props}
      label="Controlled Input"
      value={value}
      onValueChange={setValue}
    />
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
    type: "email",
    startContent: <Email />,
  },
};

export const SecuredText: Story = {
  args: {
    label: "Password",
    type: "password",
    isSecuredText: true,
  },
};
