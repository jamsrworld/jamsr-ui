import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "..";

describe("Tooltip", () => {
  it("should render correctly", () => {
    const wrapper = render(<Tooltip>hiii</Tooltip>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
