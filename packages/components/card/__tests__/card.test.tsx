import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "../src";

describe("Card", () => {
  it("should render correctly", () => {
    const wrapper = render(<Card>hiii</Card>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
