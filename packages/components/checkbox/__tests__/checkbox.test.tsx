import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "../src";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Checkbox
        label="Checkbox"
        onCheckedChange={() => {}}
      />,
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
