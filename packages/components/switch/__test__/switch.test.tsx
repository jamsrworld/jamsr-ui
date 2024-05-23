import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from "../src";

describe("Switch", () => {
  it("should render correctly", () => {
    const wrapper = render(<Switch>hiii</Switch>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
