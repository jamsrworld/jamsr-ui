import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "../src";

describe("Badge", () => {
  it("should render correctly", () => {
    const wrapper = render(<Badge>I'm badge</Badge>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
