import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "../src";

describe("Tooltip", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Tooltip title="Click Me!">
        <div>Button</div>
      </Tooltip>,
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
