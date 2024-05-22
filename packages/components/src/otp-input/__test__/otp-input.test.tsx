import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OtpInput } from "..";

describe("Otp-input", () => {
  it("should render correctly", () => {
    const wrapper = render(<OtpInput>hiii</OtpInput>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
