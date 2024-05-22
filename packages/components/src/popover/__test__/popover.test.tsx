import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Popover } from "..";

describe("Popover", () => {
  it("should render correctly", () => {
    const wrapper = render(<Popover>hiii</Popover>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
