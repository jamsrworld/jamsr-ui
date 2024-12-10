import { Button } from "@jamsr-ui/button";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { Alert, type AlertProps } from "../src/alert";
import type { AlertVariantProps } from "../src/styles";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    status: "success",
    children: "Here is a gentle confirmation that your action was successful.",
  },
};

export const Description: Story = {
  args: {
    heading: "Warning!",
    children: "This is a warning message.",
    status: "warning",
  },
};

export const CustomIcon: Story = {
  args: {
    children: "This is a error message.",
    status: "danger",
    icon: <CloseIcon />,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: "This is a warning message.",
    status: "warning",
    icon: null,
  },
};

export const WithAction: Story = {
  args: {
    heading: "Warning!",
    children: "Your plan will expire soon, please renew your plan.",
    status: "warning",
    action: (
      <Button variant="light" color="warning">
        Renew Now!
      </Button>
    ),
  },
};

const SeverityTemplate = (props: AlertProps) => {
  const statuses: AlertVariantProps["status"][] = [
    "info",
    "success",
    "warning",
    "danger",
    "default",
  ];

  return (
    <div className="grid gap-4">
      {statuses.map((status) => (
        <Alert
          {...props}
          key={status}
          status={status}
          className="capitalize"
          heading={statuses}
        >
          This is a description message for {statuses}
        </Alert>
      ))}
    </div>
  );
};

export const Severity: Story = {
  render: SeverityTemplate,
};

const VariantTemplate = () => {
  const variants: AlertVariantProps["variant"][] = ["solid", "outlined"];

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
