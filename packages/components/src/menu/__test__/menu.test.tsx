import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Menu } from "..";

describe("Menu", () => {
  it("should render correctly", () => {
    const wrapper = render(<Menu>hiii</Menu>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
