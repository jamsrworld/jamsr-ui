import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "../src";

describe("Typography", () => {
  it("should render correctly", () => {
    const wrapper = render(<Typography>hiii</Typography>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
