import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Ripple } from "..";

describe("Ripple", () => {
  it("should render correctly", () => {
    const wrapper = render(<Ripple>hiii</Ripple>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
