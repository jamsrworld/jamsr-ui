import { Card, CardContent } from "@jamsr-ui/card";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
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
  render: Template,
};

export const Disabled: Story = {
  render: () => {
    return (
      <Tabs defaultValue="photos" isDisabled>
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
  },
};

export const DisabledItem: Story = {
  render: () => {
    return (
      <Tabs defaultValue="photos">
        <Tab value="photos" title="Photos">
          {content}
        </Tab>
        <Tab value="music" title="Music" disabled>
          {content}
        </Tab>
        <Tab value="videos" title="Videos">
          {content}
        </Tab>
      </Tabs>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes = ["sm", "md", "lg"] as const;
    return (
      <div className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <Tabs key={size} size={size} aria-label="Tabs sizes">
            <Tab value="photos" title="Photos" />
            <Tab value="music" title="Music" />
            <Tab value="videos" title="Videos" />
          </Tabs>
        ))}
      </div>
    );
  },
};

export const Radius: Story = {
  render: () => {
    const radiusList = ["full", "lg", "md", "sm", "none"] as const;

    return (
      <div className="flex flex-wrap gap-4">
        {radiusList.map((radius) => (
          <Tabs key={radius} radius={radius} aria-label="Tabs radius">
            <Tab value="photos" title="Photos" />
            <Tab value="music" title="Music" />
            <Tab value="videos" title="Videos" />
          </Tabs>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const colors = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "error",
    ] as const;

    return (
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <Tabs
            key={color}
            color={color}
            aria-label="Tabs colors"
            radius="full"
          >
            <Tab value="photos" title="Photos" />
            <Tab value="music" title="Music" />
            <Tab value="videos" title="Videos" />
          </Tabs>
        ))}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const variants = ["solid", "underlined", "bordered", "light"] as const;

    return (
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Tabs key={variant} variant={variant} aria-label="Tabs variants">
            <Tab value="photos" title="Photos" />
            <Tab value="music" title="Music" />
            <Tab value="videos" title="Videos" />
          </Tabs>
        ))}
      </div>
    );
  },
};

export const Outside: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("photos");
    return (
      <>
        <div>
          {/* tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <Tab value="photos" title="Photos" />
            <Tab value="music" title="Music" />
            <Tab value="videos" title="Videos" />
          </Tabs>
        </div>
        <div>
          {activeTab === "photos" && "photos"}
          {activeTab === "music" && "music"}
          {activeTab === "videos" && "videos"}
          {/* content */}
        </div>
      </>
    );
  },
};
