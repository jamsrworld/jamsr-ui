import { type Meta, type StoryObj } from "@storybook/react";
import { OTPInput } from "../src/otp-input";

const meta: Meta<typeof OTPInput> = {
  title: "Components/OTPInput",
  component: OTPInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
