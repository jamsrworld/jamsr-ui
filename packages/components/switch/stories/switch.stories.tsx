import { type Meta, type StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSwitch = () => <Switch label="I'm a switch" />;

export const Default: Story = {
  render: DefaultSwitch,
  args: {},
};

export const Description: Story = {
  args: {
    label: "Are you ok?",
    description: "This is a description",
  },
};
