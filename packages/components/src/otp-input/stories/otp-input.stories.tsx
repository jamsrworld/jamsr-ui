import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { OtpInput } from "../src/otp-input";

const meta = {
  title: "Components/Otp Input",
  component: OtpInput,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof OtpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
