import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Divider } from "../src";

describe("Divider", () => {
  it("should render correctly", () => {
    const wrapper = render(<Divider>hiii</Divider>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
