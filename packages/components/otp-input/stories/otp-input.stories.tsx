import { type Meta, type StoryObj } from "@storybook/react";
import { OtpInput } from "../src/otp-input";

const meta: Meta<typeof OtpInput> = {
  title: "Components/OTPInput",
  component: OtpInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
