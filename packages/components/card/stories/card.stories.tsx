import { type Meta, type StoryObj } from "@storybook/react";
import { Card, CardContent, type CardProps } from "../src";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: CardProps) => (
  <Card {...props}>
    <CardContent>This is a card. Pretty cool right?</CardContent>
  </Card>
);

export const Primary: Story = {
  render: Template,
  args: {},
};
