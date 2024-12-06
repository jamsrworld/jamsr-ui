import { Avatar } from "@jamsr-ui/avatar";
import { Typography } from "@jamsr-ui/typography";
import { type Meta, type StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, type CardProps } from "../src";

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

export const StartEndContent: Story = {
  render: () => {
    return (
      <Card>
        <CardHeader
          heading="Card Header"
          startContent={<Avatar alt="avatar" src="" />}
          subHeading="20 Minutes Ago"
        />
        <CardContent>
          <Typography as="p">This is a card. Pretty cool right?</Typography>
        </CardContent>
      </Card>
    );
  },
};
