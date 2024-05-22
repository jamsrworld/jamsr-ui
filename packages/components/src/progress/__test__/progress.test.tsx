import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "..";

describe("Progress", () => {
  it("should render correctly", () => {
    const wrapper = render(<Progress>hiii</Progress>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
