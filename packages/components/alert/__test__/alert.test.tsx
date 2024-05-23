import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert } from "../src";

describe("Alert", () => {
  it("should render correctly", () => {
    const wrapper = render(<Alert>hiii</Alert>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
