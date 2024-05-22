import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Select } from "..";

describe("Select", () => {
  it("should render correctly", () => {
    const wrapper = render(<Select>hiii</Select>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
