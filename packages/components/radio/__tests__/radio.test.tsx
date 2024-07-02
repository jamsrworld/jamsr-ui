import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Radio } from "../src2";

describe("Radio", () => {
  it("should render correctly", () => {
    const wrapper = render(<Radio>hiii</Radio>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
