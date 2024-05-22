import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog } from "..";

describe("Dialog", () => {
  it("should render correctly", () => {
    const wrapper = render(<Dialog>hiii</Dialog>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
