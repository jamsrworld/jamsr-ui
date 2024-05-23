import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "../src";

describe("Badge", () => {
  it("should render correctly", () => {
    const wrapper = render(<Badge>hiii</Badge>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
