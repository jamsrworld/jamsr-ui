import { Popover } from "@jamsr-ui/popover";
import { EmailIcon, InfoIcon } from "@jamsr-ui/shared-icons";
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
    <div>
      <Input
        {...props}
        label="Controlled Input"
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
    type: "email",
    startContent: <EmailIcon />,
  },
};

export const Required: Story = {
  args: {
    label: "Enter your name",
    isRequired: true,
  },
};

export const Optional: Story = {
  args: {
    label: "Enter your address",
    isOptional: true,
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <Input label="Small" size="sm" />
        <Input label="Medium" size="md" />
        <Input label="Large" size="lg" />
      </div>
    );
  },
};

export const Placeholder: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <Input label="Small" size="sm" placeholder="Input your username" />
        <Input label="Medium" size="md" placeholder="Input your username" />
        <Input label="Large" size="lg" placeholder="Input your username" />
      </div>
    );
  },
};

export const Variant: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <Input label="Outline" variant="outlined" />
        <Input label="standard" variant="standard" />
      </div>
    );
  },
};

export const LabelHelper: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        label="Password"
        labelHelperContent={
          <Popover
            trigger={<InfoIcon className="size-4 text-foreground-secondary" />}
          >
            Password must be at least 8 characters
          </Popover>
        }
      />
      <Input
        label="Password"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        labelHelperContent={<a className="ml-auto text-xs">Forgot Password?</a>}
      />
    </div>
  ),
};

export const SecuredText: Story = {
  args: {
    label: "Password",
    type: "password",
    isSecuredText: true,
  },
};
