import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "../src";

describe("Input", () => {
  it("should render correctly", () => {
    const wrapper = render(<Input>hiii</Input>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
