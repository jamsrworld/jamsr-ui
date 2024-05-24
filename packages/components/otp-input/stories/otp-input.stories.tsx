import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { OTPInput } from "../src/otp-input";

const meta = {
  title: "Components/OTPInput",
  component: OTPInput,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
