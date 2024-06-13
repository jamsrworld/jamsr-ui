import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "../src";

describe("Textarea", () => {
  it("should render correctly", () => {
    const wrapper = render(<Textarea label="Textarea" />);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
