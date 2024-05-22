import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Chip } from "..";

describe("Chip", () => {
  it("should render correctly", () => {
    const wrapper = render(<Chip>hiii</Chip>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
