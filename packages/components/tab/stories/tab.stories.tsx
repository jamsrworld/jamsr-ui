import { Card, CardContent } from "@jamsr-ui/card";
import { type Meta, type StoryObj } from "@storybook/react";
import { Tab, Tabs } from "../src";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof meta>;

const content = (
  <Card>
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </CardContent>
  </Card>
);

const Template = () => {
  return (
    <Tabs defaultValue="photos">
      <Tab value="photos" title="Photos">
        {content}
      </Tab>
      <Tab value="music" title="Music">
        {content}
      </Tab>
      <Tab value="videos" title="Videos">
        {content}
      </Tab>
    </Tabs>
  );
};

export const Default: Story = {
  args: { title: "", value: "" },
  render: Template,
};
