import { Button } from "@jamsr-ui/button";
import { Close } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { Alert, type AlertProps } from "../src/alert";
import type { AlertVariantProps } from "../src/style";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    severity: "success",
    children: "Here is a gentle confirmation that your action was successful.",
  },
};

export const Description: Story = {
  args: {
    heading: "Warning!",
    children: "This is a warning message.",
    severity: "warning",
  },
};

export const CustomIcon: Story = {
  args: {
    children: "This is a error message.",
    severity: "danger",
    icon: <Close />,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: "This is a warning message.",
    severity: "warning",
    icon: null,
  },
};

export const WithAction: Story = {
  args: {
    heading: "Warning!",
    children: "Your plan will expire soon, please renew your plan.",
    severity: "warning",
    action: (
      <Button variant="light" color="warning">
        Renew Now!
      </Button>
    ),
  },
};

const SeverityTemplate = (props: AlertProps) => {
  const severity: AlertVariantProps["severity"][] = [
    "info",
    "success",
    "warning",
    "danger",
    "default",
  ];

  return (
    <div className="grid gap-4">
      {severity.map((severity) => (
        <Alert
          {...props}
          key={severity}
          severity={severity}
          className="capitalize"
          heading={severity}
        >
          This is a description message for {severity}
        </Alert>
      ))}
    </div>
  );
};

export const Severity: Story = {
  render: SeverityTemplate,
};

const VariantTemplate = () => {
  const variants: AlertVariantProps["variant"][] = ["filled", "outline"];

  return (
    <div className="grid gap-4">
      {variants.map((variant) => (
        <SeverityTemplate variant={variant} />
      ))}
    </div>
  );
};

export const Variants: Story = {
  render: VariantTemplate,
};
