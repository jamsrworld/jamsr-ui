import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "..";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button>hiii</Button>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
