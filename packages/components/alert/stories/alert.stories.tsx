import { type Meta, type StoryObj } from "@storybook/react";
import { Alert, type AlertProps } from "../src/alert";
import { AlertTitle } from "../src/alert-title";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: AlertProps) => {
  return (
    <Alert
      severity="warning"
      {...props}
    >
      <AlertTitle>Warning!</AlertTitle>
      This is a warning message.
    </Alert>
  );
};

export const Primary: Story = {
  render: Template,
  args: { children: "Primary" },
};
