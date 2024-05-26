import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LinearProgress } from "../src";

describe("Progress", () => {
  it("should render correctly", () => {
    const wrapper = render(<LinearProgress isIntermediate />);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
