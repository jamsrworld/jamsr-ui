import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "..";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const wrapper = render(<Checkbox>hiii</Checkbox>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
