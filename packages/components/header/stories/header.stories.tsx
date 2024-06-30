import { Button } from "@jamsr-ui/button";
import { Repeater } from "@jamsr-ui/repeater";
import { type Meta, type StoryObj } from "@storybook/react";
import type { HeaderProps } from "../src/header";
import { Header } from "../src/header";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: HeaderProps) => {
  return (
    <div>
      <Header className="flex justify-between px-2" {...props}>
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png"
          alt="logo"
        />
        <Button>Go to dashboard</Button>
      </Header>
      <div className="py-4">
        <Repeater count={212}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            nobis, repudiandae ullam animi illum praesentium quidem eius amet
            deleniti adipisci magnam mollitia aspernatur, veniam libero
            consequuntur. Hic nesciunt qui neque.
          </p>
        </Repeater>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: Template,
};

export const HideOnScroll: Story = {
  render: () => <Template hideOnScroll />,
};
