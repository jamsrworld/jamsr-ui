import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OTPInput } from "../src";

describe("Otp-input", () => {
  it("should render correctly", () => {
    const wrapper = render(<OTPInput>hiii</OTPInput>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
