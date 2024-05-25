import { type Meta, type StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSwitch = () => <Switch label="I'm a switch" />;

export const Default: Story = {
  render: DefaultSwitch,
  args: {},
};
